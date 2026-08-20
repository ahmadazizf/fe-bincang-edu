import { useState } from 'react';
import { submitRegistration } from '../services/registrationApi';

const INITIAL_FORM_STATE = {
  nama: '',
  email: '',
  whatsapp: '',
  program: 'reguler',
  catatan: '',
};

export function useRegistration() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama lengkap wajib diisi';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const selectProgram = (programId) => {
    updateField('program', programId);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await submitRegistration(formData);
      setIsSuccess(true);
      return response;
    } catch (err) {
      console.error('Registration failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    errors,
    isSuccess,
    updateField,
    selectProgram,
    resetForm,
    handleSubmit,
  };
}
