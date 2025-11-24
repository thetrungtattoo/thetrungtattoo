import { studioInfo } from '../config/studioInfo';

interface GeminiResponse {
    candidates: Array<{
        content: {
            parts: Array<{
                text: string;
            }>;
        };
    }>;
}

interface ChatMessage {
    role: 'user' | 'model';
    parts: Array<{
        text: string;
    }>;
}

// Custom error classes for better error handling
export class GeminiApiError extends Error {
    readonly statusCode?: number;
    readonly code?: string;

    constructor(
        message: string,
        statusCode?: number,
        code?: string
    ) {
        super(message);
        this.name = 'GeminiApiError';
        this.statusCode = statusCode;
        this.code = code;
    }
}

export class GeminiConfigError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GeminiConfigError';
    }
}

class GeminiService {
    private apiKey: string;
    private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    constructor() {
        this.apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
        
        // Only warn in development, not in production to avoid exposing config issues
        if (!this.apiKey && import.meta.env.DEV) {
            console.warn('VITE_GEMINI_API_KEY not found in environment variables');
        }
    }

    /**
     * Check if API key is configured
     */
    isConfigured(): boolean {
        return !!this.apiKey && this.apiKey.trim().length > 0;
    }

    async generateResponse(userMessage: string, chatHistory: ChatMessage[] = []): Promise<string> {
        // Validate API key
        if (!this.isConfigured()) {
            const error = new GeminiConfigError('Gemini API key chưa được cấu hình. Vui lòng liên hệ quản trị viên.');
            console.error('[GeminiService]', error.message);
            throw error;
        }

        // Validate input
        if (!userMessage || !userMessage.trim()) {
            throw new Error('Tin nhắn không được để trống');
        }

        try {
            const systemPrompt = `Bạn là AI assistant của ${studioInfo.name}. 
            
            THÔNG TIN STUDIO:
            - Tên: ${studioInfo.name}
            - Địa chỉ: ${studioInfo.address}
            - SĐT: ${studioInfo.phone}
            - Chuyên: ${studioInfo.specialties.join(', ')}
            
            DỊCH VỤ CHÍNH:
            ${studioInfo.specialties.map(s => `- ${s}`).join('\n')}
            
            GIÁ CẢ (tham khảo):
            - Tattoo nhỏ: ${studioInfo.pricing.small}
            - Tattoo trung bình: ${studioInfo.pricing.medium}  
            - Tattoo lớn: ${studioInfo.pricing.large}
            - Cover-up: ${studioInfo.pricing.coverUp}
            
            QUY TRÌNH:
            ${studioInfo.process.map((step, index) => `${index + 1}. ${step}`).join('\n')}
            
            QUY TẮC TRẢ LỜI:
            - Tin nhắn đầu tiên: Giới thiệu bản thân là "Quản Gia Online" của studio và giới thiệu đầy đủ về studio
            - Từ tin nhắn thứ 2: Trả lời trực tiếp, không giới thiệu lại
            - Format đẹp: Dùng **bold**, xuống dòng, bullet points
            - Thân thiện, chuyên nghiệp, ngôn ngữ chuẩn ngành tattoo quốc tế và chuẩn SEO
            - Nếu không biết: Hướng dẫn liên hệ SĐT ${studioInfo.phone}`;

            const messages: ChatMessage[] = [
                {
                    role: 'user',
                    parts: [{ text: `${systemPrompt}\nLịch sử chat:\n${chatHistory.map(msg => `${msg.role}: ${msg.parts[0].text}`).join('\n')}\nTin nhắn hiện tại: ${userMessage}` }]
                }
            ];

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

            try {
                const response = await fetch(this.baseUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-goog-api-key': this.apiKey,
                    },
                    body: JSON.stringify({
                        contents: messages
                    }),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    let errorMessage = 'Lỗi không xác định từ API';
                    let statusCode = response.status;
                    let errorCode: string | undefined;

                    try {
                        const errorData = await response.json();
                        errorMessage = errorData.error?.message || errorMessage;
                        errorCode = errorData.error?.code;
                    } catch {
                        // If JSON parsing fails, use status text
                        errorMessage = response.statusText || errorMessage;
                    }

                    // Log detailed error in development
                    if (import.meta.env.DEV) {
                        console.error('[GeminiService] API Error:', {
                            status: statusCode,
                            code: errorCode,
                            message: errorMessage
                        });
                    }

                    // Handle specific API errors with user-friendly messages
                    let userFriendlyMessage = errorMessage;
                    if (statusCode === 403) {
                        if (errorMessage.toLowerCase().includes('leaked') || errorMessage.toLowerCase().includes('reported')) {
                            userFriendlyMessage = 'API key không hợp lệ hoặc đã bị thu hồi. Vui lòng liên hệ quản trị viên để cập nhật API key mới.';
                        } else {
                            userFriendlyMessage = 'Không có quyền truy cập API. Vui lòng kiểm tra cấu hình API key.';
                        }
                    } else if (statusCode === 401) {
                        userFriendlyMessage = 'API key không hợp lệ. Vui lòng kiểm tra lại cấu hình.';
                    } else if (statusCode === 429) {
                        userFriendlyMessage = 'API đang quá tải. Vui lòng thử lại sau vài phút.';
                    } else if (statusCode >= 500) {
                        userFriendlyMessage = 'Lỗi từ phía server. Vui lòng thử lại sau.';
                    }

                    throw new GeminiApiError(userFriendlyMessage, statusCode, errorCode);
                }

                const data: GeminiResponse = await response.json();
                
                if (data.candidates && data.candidates.length > 0 && data.candidates[0].content?.parts?.[0]?.text) {
                    return data.candidates[0].content.parts[0].text;
                } else {
                    throw new GeminiApiError('API không trả về dữ liệu hợp lệ');
                }

            } catch (error) {
                clearTimeout(timeoutId);
                
                // Handle abort (timeout)
                if (error instanceof Error && error.name === 'AbortError') {
                    throw new GeminiApiError('Yêu cầu quá thời gian chờ. Vui lòng thử lại sau.');
                }
                
                // Re-throw if it's already a GeminiApiError
                if (error instanceof GeminiApiError || error instanceof GeminiConfigError) {
                    throw error;
                }

                // Handle network errors
                if (error instanceof TypeError && error.message.includes('fetch')) {
                    throw new GeminiApiError('Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet và thử lại.');
                }

                // Generic error
                const errorMessage = error instanceof Error ? error.message : 'Lỗi không xác định';
                console.error('[GeminiService] Unexpected error:', error);
                throw new GeminiApiError(`Lỗi: ${errorMessage}`);
            }

        } catch (error) {
            // Re-throw known errors
            if (error instanceof GeminiApiError || error instanceof GeminiConfigError) {
                throw error;
            }

            // Wrap unknown errors
            const errorMessage = error instanceof Error ? error.message : 'Lỗi không xác định';
            console.error('[GeminiService] Error calling Gemini API:', error);
            throw new GeminiApiError(errorMessage);
        }
    }

    convertChatHistory(messages: Array<{id: number, text: string, isBot: boolean}>): ChatMessage[] {
        return messages
            .filter(msg => msg.id !== 1)
            .map(msg => ({
                role: msg.isBot ? 'model' : 'user',
                parts: [{ text: msg.text }]
            }));
    }
}

export const geminiService = new GeminiService();
