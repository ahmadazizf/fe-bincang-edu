import React, { useEffect, useState, useRef } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

const PROGRAM_OPTIONS = [
  { value: 'reguler', label: 'Kelas Reguler (3x Seminggu)' },
  { value: 'privat', label: 'Bimbingan Privat (1-on-1)' },
  { value: 'supercamp', label: 'Supercamp (Intensif Eksklusif)' },
];

export default function RegistrationForm({ registrationState }) {
  const {
    formData,
    isLoading,
    errors,
    isSuccess,
    updateField,
    resetForm,
    handleSubmit,
  } = registrationState;

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const nameInputRef = useRef(null);

  // Trigger animasi highlight saat URL hash berpindah ke #registrasi
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#registrasi') {
        setIsHighlighted(true);
        const timer = setTimeout(() => setIsHighlighted(false), 1600);
        return () => clearTimeout(timer);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  // Animasi scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="registrasi"
      className="bg-gradient-to-b from-gray-100 via-blue-50/30 to-gray-200 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24 transition-all duration-500"
    >
      <div
        className={`max-w-xl mx-auto transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2 border border-blue-200">
            Langkah Mudah Bergabung
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Formulir Pendaftaran</h2>
          <p className="text-sm text-gray-600 mt-2">
            Isi data di bawah ini untuk konsultasi & pendaftaran bimbingan belajar.
          </p>
        </div>

        <Card
          className={`shadow-xl border-0 p-8 transition-all duration-500 relative ${
            isHighlighted
              ? 'animate-section-glow ring-4 ring-blue-500/60 shadow-2xl scale-[1.01]'
              : 'hover:shadow-2xl'
          }`}
        >
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pendaftaran Berhasil!</h3>
              <p className="text-gray-600 text-sm mb-6">
                Terima kasih, <strong>{formData.nama}</strong>. Tim konselor kami akan segera menghubungi Anda melalui WhatsApp/Email.
              </p>
              <Button variant="primary" onClick={resetForm} className="w-full">
                Daftar Siswa Lain
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                ref={nameInputRef}
                id="nama"
                label="Nama Lengkap"
                placeholder="Contoh: Budi Santoso"
                required
                value={formData.nama}
                onChange={(e) => updateField('nama', e.target.value)}
                error={errors.nama}
              />

              <Input
                id="whatsapp"
                type="tel"
                label="Nomor WhatsApp"
                placeholder="Contoh: 08123456789"
                value={formData.whatsapp}
                onChange={(e) => updateField('whatsapp', e.target.value)}
                helperText="Kami akan mengirimkan detail jadwal via WhatsApp"
              />

              <Select
                id="program"
                label="Pilihan Program"
                options={PROGRAM_OPTIONS}
                value={formData.program}
                onChange={(e) => updateField('program', e.target.value)}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isLoading}
                  className="w-full py-3 text-base shadow-md hover:shadow-lg transition-all"
                >
                  Proses Pendaftaran
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-2">
                🔒 Data pribadi Anda dijamin kerahasiaannya dan hanya digunakan untuk keperluan bimbingan.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
