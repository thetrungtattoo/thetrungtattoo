import { useState, useCallback } from 'react';
import type { BookingFormData } from '../config';
import { validateForm as validateFormUtil } from '../utils/validation';

interface UseFormReturn {
    formData: BookingFormData;
    handleInputChange: (field: keyof BookingFormData, value: string | File) => void;
    validateForm: () => boolean;
    resetForm: () => void;
}

const initialFormData: BookingFormData = {
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    budget: '',
    serviceType: '',
    message: '',
    imageFile: undefined
};

export const useForm = (): UseFormReturn => {
    const [formData, setFormData] = useState<BookingFormData>(initialFormData);

    const handleInputChange = useCallback((field: keyof BookingFormData, value: string | File) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

    const validateForm = useCallback((): boolean => {
        return validateFormUtil(formData);
    }, [formData]);

    const resetForm = useCallback(() => {
        setFormData(initialFormData);
    }, []);

    return {
        formData,
        handleInputChange,
        validateForm,
        resetForm
    };
};
