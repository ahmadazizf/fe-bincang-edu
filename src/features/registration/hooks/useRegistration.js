import { useState } from 'react';
import { submitRegistration } from '../services/registrationApi';

export function useRegistration(currentProgram = null) {
  const initialProgramTitle = currentProgram?.title || 'Bimbingan Belajar Bincang Edukasi';
  const initialSubProgram = currentProgram?.packages?.[0]?.name || '';

  const [formData, setFormData] = useState({
    nama: '',
    sekolah: '',
    alamat: '',
    whatsapp: '',
    namaOrtu: '',
    programTitle: initialProgramTitle,
    subProgram: initialSubProgram,
  });

  const [prevProgramId, setPrevProgramId] = useState(currentProgram?.id);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  // Sinkronisasi saat program aktif berubah
  if (currentProgram && currentProgram.id !== prevProgramId) {
    setPrevProgramId(currentProgram.id);
    setFormData((prev) => ({
      ...prev,
      programTitle: currentProgram.title,
      subProgram: currentProgram.packages?.[0]?.name || '',
    }));
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama lengkap siswa wajib diisi';
    }
    if (!formData.sekolah.trim()) {
      newErrors.sekolah = 'Asal sekolah wajib diisi';
    }
    if (!formData.alamat.trim()) {
      newErrors.alamat = 'Alamat / asal kota wajib diisi';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp aktif wajib diisi';
    }
    if (!formData.namaOrtu.trim()) {
      newErrors.namaOrtu = 'Nama orang tua wajib diisi';
    }
    if (currentProgram?.packages && currentProgram.packages.length > 0 && !formData.subProgram) {
      newErrors.subProgram = 'Pilihan sub-program wajib dipilih';
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

  const selectSubProgram = (subProgramName) => {
    updateField('subProgram', subProgramName);
  };

  const resetForm = () => {
    setFormData({
      nama: '',
      sekolah: '',
      alamat: '',
      whatsapp: '',
      namaOrtu: '',
      programTitle: currentProgram?.title || initialProgramTitle,
      subProgram: currentProgram?.packages?.[0]?.name || '',
    });
    setErrors({});
    setIsSuccess(false);
    setLastWaUrl('');
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    try {
      // 1. Simpan/kirim data ke API service
      await submitRegistration(formData);

      // 2. Format pesan WhatsApp spesifik untuk sub-program
      const waNumber = '6285890306392';
      const programHeader = formData.programTitle || currentProgram?.title || 'Program Bincang Edukasi';
      const subProgramSelected = formData.subProgram ? `\n*Pilihan Sub-Program / Paket:* ${formData.subProgram}` : '';

      const message = `Halo Admin Bincang Edukasi, saya ingin mendaftar program bimbingan belajar:

*Nama Lengkap Siswa:* ${formData.nama}
*Asal Sekolah:* ${formData.sekolah}
*Alamat / Asal Kota:* ${formData.alamat}
*Nomor WhatsApp:* ${formData.whatsapp}
*Nama Orang Tua:* ${formData.namaOrtu}
*Program Utama:* ${programHeader}${subProgramSelected}

Mohon informasi mengenai ketersediaan seat, jadwal, dan langkah pendaftaran selanjutnya. Terima kasih!`;

      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      setLastWaUrl(waUrl);
      setIsSuccess(true);

      // 3. Direct langsung ke WhatsApp
      window.open(waUrl, '_blank');
      
      return { success: true, waUrl };
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
    lastWaUrl,
    updateField,
    selectSubProgram,
    resetForm,
    handleSubmit,
  };
}
