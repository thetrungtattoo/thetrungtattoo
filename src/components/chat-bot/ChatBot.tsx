import React, { useState } from 'react';
import styles from './styles.module.scss';
import { geminiService, GeminiConfigError, GeminiApiError } from '../../services/geminiService';
import { studioInfo } from '../../config/studioInfo';
import { CloseIcon } from '../../assets/svg/svg';

interface ChatBotProps {
    onClose?: () => void;
}

// Function để format tin nhắn với markdown
const formatMessage = (text: string): string => {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
        .replace(/\n/g, '<br>') // Line breaks
        .replace(/^- (.*$)/gm, '<li>$1</li>') // Bullet points
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>'); // Wrap lists
};

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: studioInfo.greeting, isBot: true }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (message.trim() && !isLoading) {
            const userMessage = message.trim();
            setMessage('');
            
            setMessages(prev => [...prev, { id: Date.now(), text: userMessage, isBot: false }]);
            
            setIsLoading(true);
            
            try {
                const chatHistory = geminiService.convertChatHistory(messages);
                const botResponse = await geminiService.generateResponse(userMessage, chatHistory);
                
                setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
            } catch (error) {
                console.error('Error getting AI response:', error);
                
                // Determine error message based on error type
                let errorMessage = 'Xin lỗi, hệ thống đang quá tải. Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi qua số điện thoại: 0378 927 665.';
                
                if (error instanceof GeminiConfigError) {
                    // API key not configured
                    errorMessage = 'Xin lỗi, dịch vụ AI tạm thời không khả dụng. Vui lòng liên hệ trực tiếp với chúng tôi qua số điện thoại: 0378 927 665.';
                } else if (error instanceof GeminiApiError) {
                    // Use the user-friendly message from GeminiApiError
                    // If it's an API key issue, append contact info
                    if (error.statusCode === 403 || error.statusCode === 401) {
                        errorMessage = `${error.message} Vui lòng liên hệ trực tiếp với chúng tôi qua số điện thoại: 0378 927 665.`;
                    } else {
                        errorMessage = error.message;
                    }
                } else if (error instanceof Error) {
                    // Check for specific error messages
                    if (error.message.includes('kết nối mạng') || error.message.includes('network')) {
                        errorMessage = 'Xin lỗi, có vấn đề về kết nối mạng. Vui lòng kiểm tra kết nối internet và thử lại sau.';
                    } else if (error.message.includes('thời gian chờ') || error.message.includes('timeout')) {
                        errorMessage = 'Xin lỗi, yêu cầu quá thời gian chờ. Vui lòng thử lại sau.';
                    }
                }
                
                setMessages(prev => [...prev, { 
                    id: Date.now() + 1, 
                    text: errorMessage, 
                    isBot: true 
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={styles.chatBotContainer}>
            <div className={styles.chatHeader}>
                <div className={styles.logo}>
                    <span>Quản Gia Online</span>
                </div>
                {onClose && (
                    <button className={styles.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </button>
                )}
            </div>
            <div className={styles.chatMessages}>
                {messages.map(msg => (
                    <div key={msg.id} className={`${styles.message} ${msg.isBot ? styles.botMessage : styles.userMessage}`}>
                        <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
                    </div>
                ))}
                {isLoading && (
                    <div className={`${styles.message} ${styles.botMessage} ${styles.loadingMessage}`}>
                        <div className={styles.typingIndicator}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.chatInputContainer}>
            <div className={styles.chatInput}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isLoading ? "Đang trả lời..." : "Nhập tin nhắn..."}
                    className={styles.chatInputField}
                    disabled={isLoading}
                />
                <svg className={styles.attachIcon} viewBox="0 0 24 24">
                  <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
                </svg>
                <svg className={styles.sendIcon} viewBox="0 0 24 24" onClick={handleSendMessage}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
            </div>
            </div>
        </div>
    );
}

export default ChatBot;
