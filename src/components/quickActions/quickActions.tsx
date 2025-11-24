import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { QuickArrowUp, QuickChatBox, QuickTikTok, QuickFacebook, QuickHouse, QuickPhone } from '@/assets/svg/svg';
import ChatBot from '@/components/chat-bot/ChatBot';
import styles from './styles.module.scss';

const QuickActions = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const quickActionsRef = useRef<HTMLDivElement>(null);

    const toggleExpanded = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const handleActionClick = useCallback((action: () => void) => {
        action();
        setIsExpanded(false);
    }, []);

    const toggleChat = useCallback(() => {
        setIsChatOpen(prev => !prev);
        setIsExpanded(false);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (quickActionsRef.current && !quickActionsRef.current.contains(event.target as Node)) {
            setIsExpanded(false);
            setIsChatOpen(false);
        }
    }, []);

    useEffect(() => {
        if (isExpanded || isChatOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExpanded, isChatOpen, handleClickOutside]);

    const actionItems = useMemo(() => [
        { icon: QuickPhone, delay: 0, label: 'Liên hệ SĐT', onClick: () => {} },
        { icon: QuickFacebook, delay: 1, label: 'Follow Facebook', onClick: () => {} },
        { icon: QuickChatBox, delay: 2, label: 'Chat Box Online', onClick: toggleChat },
        { icon: QuickTikTok, delay: 3, label: 'Follow TikTok', onClick: () => {} },
        { icon: QuickArrowUp, delay: 4, label: 'Quay lại đầu trang', onClick: scrollToTop },
    ], [scrollToTop, toggleChat]);

    return (
        <div className={styles.quickActions} ref={quickActionsRef}>
            <div className={styles.quickActionsContainer}>
                {actionItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.actionItem} ${isExpanded ? styles.expanded : styles.collapsed}`}
                        style={{
                            '--delay': `${item.delay * 0.1}s`,
                            '--index': index
                        } as React.CSSProperties}
                        onClick={() => handleActionClick(item.onClick)}
                    >
                        <item.icon />
                        <div className={styles.tooltip}>
                            {item.label}
                        </div>
                    </div>
                ))}
                <div 
                    className={styles.quickActionsHouse}
                    onClick={toggleExpanded}
                >
                    <QuickHouse />
                </div>
            </div>
            {isChatOpen && (
                <div className={styles.chatPopup}>
                    <ChatBot onClose={() => setIsChatOpen(false)} />
                </div>
            )}
        </div>
    );
}

export default memo(QuickActions);
