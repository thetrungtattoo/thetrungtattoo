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

class GeminiService {
    private apiKey: string;
    private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    constructor() {
        this.apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
        if (!this.apiKey) {
            console.warn('VITE_GEMINI_API_KEY not found in environment variables');
        }
    }

    async generateResponse(userMessage: string, chatHistory: ChatMessage[] = []): Promise<string> {
        if (!this.apiKey) {
            throw new Error('Gemini API key not configured');
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

            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': this.apiKey,
                },
                body: JSON.stringify({
                    contents: messages
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Gemini API error: ${errorData.error?.message || 'Unknown error'}`);
            }

            const data: GeminiResponse = await response.json();
            
            if (data.candidates && data.candidates.length > 0) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error('No response from Gemini API');
            }

        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
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
