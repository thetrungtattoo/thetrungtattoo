import { useState, useMemo, useRef, useEffect } from 'react';
import FormInput from './FormInput';
import styles from '../styles.module.scss';

interface AutocompleteOption {
    value: string;
    label: string;
}

interface AutocompleteInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: AutocompleteOption[];
    placeholder?: string;
    error?: string;
    required?: boolean;
    icon?: React.ReactNode;
    'aria-label'?: string;
    minLength?: number;
}

const AutocompleteInput = ({
    label,
    value,
    onChange,
    options,
    placeholder,
    error,
    required = false,
    icon,
    'aria-label': ariaLabel,
    minLength = 2
}: AutocompleteInputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredOptions = useMemo(() => {
        if (inputValue.length < minLength) return [];
        
        const searchTerm = inputValue.toLowerCase().trim();
        return options.filter(option => {
            const label = option.label.toLowerCase();
            const searchWords = searchTerm.split(' ').filter(word => word.length > 0);
            return searchWords.every(word => label.includes(word));
        }).slice(0, 10); // Giới hạn 10 kết quả
    }, [options, inputValue, minLength]);

    // Handle input change
    const handleInputChange = (newValue: string) => {
        setInputValue(newValue);
        onChange(newValue);
        setIsOpen(newValue.length >= minLength && filteredOptions.length > 0);
        setHighlightedIndex(-1);
    };

    const handleOptionSelect = (option: AutocompleteOption) => {
        setInputValue(option.label);
        onChange(option.value); // Lưu chỉ địa chỉ (không có tỉnh)
        setIsOpen(false);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prev => 
                    prev < filteredOptions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prev => 
                    prev > 0 ? prev - 1 : filteredOptions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
                    handleOptionSelect(filteredOptions[highlightedIndex]);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setHighlightedIndex(-1);
                break;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setHighlightedIndex(-1);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        // Nếu value là địa chỉ đã chọn, tìm label tương ứng
        const selectedOption = options.find(option => option.value === value);
        setInputValue(selectedOption ? selectedOption.label : value);
    }, [value, options]);

    return (
        <div className={styles.formGroup}>
            <FormInput
                ref={inputRef}
                label={label}
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                error={error}
                required={required}
                icon={icon}
                onKeyDown={handleKeyDown}
                aria-label={ariaLabel || label}
            />
            {isOpen && filteredOptions.length > 0 && (
                <div 
                    ref={dropdownRef}
                    className={styles.dropdown}
                    role="listbox"
                    aria-label={`${label} suggestions`}
                >
                    {filteredOptions.map((option, index) => (
                        <div
                            key={option.value}
                            className={`${styles.dropdownItem} ${
                                index === highlightedIndex ? styles.highlighted : ''
                            }`}
                            onClick={() => handleOptionSelect(option)}
                            role="option"
                            aria-selected={index === highlightedIndex}
                            tabIndex={-1}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AutocompleteInput;
