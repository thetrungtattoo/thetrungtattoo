import type { BookingFormData } from '../config';

export const VALIDATION_RULES = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9+\-\s()]{10,}$/,
    required: (value: string) => value.trim().length > 0
} as const;


export const validateForm = (formData: BookingFormData): boolean => {
    const requiredFields: (keyof BookingFormData)[] = [
        'fullName', 'email', 'phone', 'date', 'address', 'budget', 'serviceType'
    ];
    
    return requiredFields.every(field => {
        const value = formData[field];
        if (typeof value !== 'string') return false;
        
        if (field === 'email') {
            return value && VALIDATION_RULES.email.test(value);
        }
        if (field === 'phone') {
            return value && VALIDATION_RULES.phone.test(value);
        }
        return value && value.trim().length > 0;
    });
};

