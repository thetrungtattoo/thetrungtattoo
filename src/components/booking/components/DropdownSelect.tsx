import { useMemo } from 'react';
import { useDropdown } from '../hooks/useDropdown';
import FormInput from './FormInput';
import styles from '../styles.module.scss';

interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownSelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: DropdownOption[];
    placeholder?: string;
    error?: string;
    required?: boolean;
    icon?: React.ReactNode;
    'aria-label'?: string;
}

const DropdownSelect = ({
    label,
    value,
    onChange,
    options,
    placeholder,
    error,
    required = false,
    icon,
    'aria-label': ariaLabel
}: DropdownSelectProps) => {
    const { isOpen, toggle, close, ref } = useDropdown();

    const handleOptionSelect = (optionValue: string) => {
        onChange(optionValue);
        close();
    };

    const selectedOption = useMemo(() => 
        options.find(option => option.value === value), 
        [options, value]
    );

    return (
        <div className={styles.formGroup} ref={ref}>
            <FormInput
                label={label}
                value={selectedOption?.label || value}
                onChange={() => {}}
                placeholder={placeholder}
                error={error}
                required={required}
                icon={icon}
                onClick={toggle}
                readOnly
                aria-label={ariaLabel || label}
            />
            {isOpen && (
                <div 
                    className={styles.dropdown}
                    role="listbox"
                    aria-label={`${label} options`}
                >
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={styles.dropdownItem}
                            onClick={() => handleOptionSelect(option.value)}
                            role="option"
                            aria-selected={value === option.value}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleOptionSelect(option.value);
                                }
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownSelect;
