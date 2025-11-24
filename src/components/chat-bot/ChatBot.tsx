import React, { useState } from 'react';
import styles from './styles.module.scss';
import logo from '@/assets/svg/Logo.svg';
import { geminiService } from '../../services/geminiService';
import { studioInfo } from '../../config/studioInfo';

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
                setMessages(prev => [...prev, { 
                    id: Date.now() + 1, 
                    text: 'Xin lỗi, hệ thống đang quá tải. Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi qua số điện thoại: 0378 927 665.', 
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
                    <img src={logo} alt="logo" />
                </div>
                {onClose && (
                    <button className={styles.closeButton} onClick={onClose}>
                        ×
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
            <div className={styles.chatInput}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isLoading ? "Đang xử lý..." : "Nhập tin nhắn..."}
                    className={styles.inputField}
                    disabled={isLoading}
                />
            </div>
        </div>
    );
}

export default ChatBot;
