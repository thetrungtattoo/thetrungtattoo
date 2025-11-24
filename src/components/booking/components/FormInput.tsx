import { forwardRef } from 'react';
import styles from '../styles.module.scss';

interface FormInputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    required?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    readOnly?: boolean;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    'aria-label'?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    error,
    required = false,
    icon,
    onClick,
    readOnly = false,
    onKeyDown,
    'aria-label': ariaLabel
}, ref) => (
    <div className={styles.formGroup}>
        <label className={styles.formLabel}>
            {label}
            {required && <span className={styles.required}>(*)</span>}
        </label>
        <div className={styles.inputContainer}>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${styles.formInput} ${error ? styles.inputError : ''}`}
                placeholder={placeholder}
                onClick={onClick}
                readOnly={readOnly}
                onKeyDown={onKeyDown}
                aria-label={ariaLabel || label}
                aria-invalid={!!error}
                aria-describedby={error ? `${label}-error` : undefined}
            />
            {icon}
        </div>
        {error && (
            <span id={`${label}-error`} className={styles.errorMessage} role="alert">
                {error}
            </span>
        )}
    </div>
));

FormInput.displayName = 'FormInput';

export default FormInput;
