import { useState, useRef, useEffect } from 'react';
import { DateIcon } from '@/assets/svg/svg';
import styles from './styles.module.scss';

interface DatePickerProps {
    value: string;
    onChange: (date: string) => void;
    placeholder?: string;
    className?: string;
    error?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
}

const DatePicker = ({
    value,
    onChange,
    placeholder = "Chọn ngày",
    className = "",
    error = false,
    onFocus,
    onBlur
}: DatePickerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);
    const datePickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                onBlur?.();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onBlur]);

    useEffect(() => {
        setSelectedDate(value ? new Date(value) : null);
    }, [value]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formatDate = (date: Date | null): string => 
        date ? date.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }) : '';

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        onChange(date.toISOString().split('T')[0]);
        setIsOpen(false);
        onBlur?.();
    };

    const handleInputClick = () => {
        setIsOpen(prev => !prev);
        onFocus?.();
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = Array(startingDayOfWeek).fill(null);
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }
        return days;
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentMonth(prev => {
            const newMonth = new Date(prev);
            newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
            return newMonth;
        });
    };

    const isDateDisabled = (date: Date): boolean => date < today;
    const isDateSelected = (date: Date): boolean => 
        selectedDate ? date.toDateString() === selectedDate.toDateString() : false;
    const isToday = (date: Date): boolean => date.toDateString() === today.toDateString();

    const days = getDaysInMonth(currentMonth);
    const monthNames = [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ];
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

    return (
        <div className={`${styles.datePicker} ${className}`} ref={datePickerRef}>
            <div
                className={`${styles.dateInput} ${error ? styles.error : ''} ${isOpen ? styles.active : ''}`}
                onClick={handleInputClick}
            >
                <span className={selectedDate ? styles.hasValue : styles.placeholder}>
                    {selectedDate ? formatDate(selectedDate) : placeholder}
                </span>
                 <div className={styles.calendarIcon}>
                     <DateIcon />
                 </div>
            </div>

            {isOpen && (
                <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                        <button
                            type="button"
                            className={styles.navButton}
                            onClick={() => navigateMonth('prev')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className={styles.monthYear}>
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </span>
                        <button
                            type="button"
                            className={styles.navButton}
                            onClick={() => navigateMonth('next')}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.calendarBody}>
                        <div className={styles.dayNames}>
                            {dayNames.map(day => (
                                <div key={day} className={styles.dayName}>{day}</div>
                            ))}
                        </div>
                        <div className={styles.days}>
                            {days.map((day, index) => (
                                <div key={index} className={styles.dayCell}>
                                    {day && (
                                        <button
                                            type="button"
                                            className={`
                        ${styles.dayButton}
                        ${isDateSelected(day) ? styles.selected : ''}
                        ${isToday(day) ? styles.today : ''}
                        ${isDateDisabled(day) ? styles.disabled : ''}
                      `}
                                            onClick={() => !isDateDisabled(day) && handleDateSelect(day)}
                                            disabled={isDateDisabled(day)}
                                        >
                                            {day.getDate()}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatePicker;
