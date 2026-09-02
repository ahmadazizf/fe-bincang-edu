import React, { useEffect, useState, useRef } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import { formatRupiah } from '../../../utils/helpers';

export default function RegistrationForm({ registrationState, program }) {
  const {
    formData,
    isLoading,
    errors,
    isSuccess,
    lastWaUrl,
    updateField,
    resetForm,
    handleSubmit,
  } = registrationState;

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const nameInputRef = useRef(null);

  // Generate options sub-program spesifik dari program yang sedang dibuka
  const subProgramOptions = program?.packages?.map((pkg) => ({
    value: pkg.name,
    label: `${pkg.name} — ${formatRupiah(pkg.price)} (${pkg.badge || pkg.classType || 'Full Service'})`,
  })) || [];

  // Trigger animasi highlight saat URL hash berpindah ke #registrasi atau #daftar-program
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#registrasi' || window.location.hash === '#daftar-program') {
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
      id="daftar-program"
      className="relative w-full overflow-hidden bg-gradient-to-b from-amber-500 via-yellow-400 to-amber-500 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 sm:scroll-mt-20 border-t border-amber-300 shadow-inner transition-all duration-500"
    >
      {/* Subtle Background White Radial Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative Radiant Warm Sun Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/40 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`max-w-2xl mx-auto relative z-10 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/30 text-blue-950 text-xs font-bold uppercase tracking-widest mb-2 border border-white/50 shadow-xs backdrop-blur-md">
            Formulir Pendaftaran
          </span>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
            {program ? `Daftar ${program.title}` : 'Formulir Pendaftaran Siswa'}
          </h2>
          <p className="text-sm text-blue-950/85 font-medium mt-2 leading-relaxed">
            Isi formulir di bawah ini untuk pendaftaran langsung ke WhatsApp Admin resmi Bincang Edukasi.
          </p>
        </div>

        <Card
          className={`shadow-2xl border border-white/80 bg-white/95 backdrop-blur-xs p-6 sm:p-8 rounded-3xl transition-all duration-500 relative ${
            isHighlighted
              ? 'animate-section-glow ring-4 ring-white/60 shadow-2xl scale-[1.01]'
              : 'hover:shadow-2xl'
          }`}
        >
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Pendaftaran Siap!</h3>
              
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6 text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500">Nama Siswa:</span>
                  <strong className="text-gray-900">{formData.nama}</strong>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500">Asal Sekolah:</span>
                  <strong className="text-gray-900">{formData.sekolah}</strong>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500">Alamat / Asal:</span>
                  <strong className="text-gray-900">{formData.alamat}</strong>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500">Nomor WhatsApp:</span>
                  <strong className="text-gray-900">{formData.whatsapp}</strong>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500">Nama Orang Tua:</span>
                  <strong className="text-gray-900">{formData.namaOrtu}</strong>
                </div>
                {formData.subProgram && (
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500">Pilihan Paket:</span>
                    <strong className="text-blue-700">{formData.subProgram}</strong>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {lastWaUrl && (
                  <a
                    href={lastWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="primary"
                      className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 py-3 shadow-md"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      Buka Chat WhatsApp Sekarang &rarr;
                    </Button>
                  </a>
                )}

                <Button variant="outline" onClick={resetForm} className="w-full">
                  Daftar Siswa Lain
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              {/* Info Banner Program Terpilih */}
              {program && (
                <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl flex items-center gap-3 text-left">
                  <span className="text-2xl">{program.icon || '🎓'}</span>
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block">
                      Program Yang Sedang Didaftar:
                    </span>
                    <strong className="text-sm font-bold text-gray-900">{program.title}</strong>
                  </div>
                </div>
              )}

              {/* Row 1: Nama Siswa & Asal Sekolah */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  ref={nameInputRef}
                  id="nama"
                  label="Nama Lengkap Siswa"
                  placeholder="Contoh: Budi Santoso"
                  required
                  value={formData.nama}
                  onChange={(e) => updateField('nama', e.target.value)}
                  error={errors.nama}
                />

                <Input
                  id="sekolah"
                  label="Asal Sekolah"
                  placeholder="Contoh: SMA Labschool / SMAN 8"
                  required
                  value={formData.sekolah}
                  onChange={(e) => updateField('sekolah', e.target.value)}
                  error={errors.sekolah}
                />
              </div>

              {/* Row 2: Alamat / Asal Kota & Nomor WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="alamat"
                  label="Alamat / Asal Kota"
                  placeholder="Contoh: Jakarta Selatan / Bogor"
                  required
                  value={formData.alamat}
                  onChange={(e) => updateField('alamat', e.target.value)}
                  error={errors.alamat}
                />

                <Input
                  id="whatsapp"
                  type="tel"
                  label="Nomor WhatsApp"
                  placeholder="Contoh: 08123456789"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                  error={errors.whatsapp}
                  helperText="Nomor WA aktif untuk koordinasi admin"
                />
              </div>

              {/* Row 3: Nama Orang Tua */}
              <Input
                id="namaOrtu"
                label="Nama Orang Tua (Ayah / Ibu)"
                placeholder="Contoh: Bpk. Bambang / Ibu Sri"
                required
                value={formData.namaOrtu}
                onChange={(e) => updateField('namaOrtu', e.target.value)}
                error={errors.namaOrtu}
              />

              {/* Row 4: Pilihan Sub-Program / Paket Khusus Program Ini */}
              {subProgramOptions.length > 0 && (
                <Select
                  id="subProgram"
                  label="Pilihan Paket / Sub-Program"
                  options={subProgramOptions}
                  value={formData.subProgram}
                  onChange={(e) => updateField('subProgram', e.target.value)}
                  error={errors.subProgram}
                  helperText="Pilih paket atau skema bimbingan yang diinginkan"
                />
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isLoading}
                  className="w-full py-3.5 text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700"
                >
                  <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Daftar &amp; Kirim via WhatsApp</span>
                </Button>
              </div>

              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-blue-800 text-center leading-relaxed">
                💬 <strong>Format Otomatis:</strong> Setelah klik tombol, seluruh data pendaftaran di atas beserta pilihan paket akan otomatis terhubung ke WhatsApp Admin Bincang Edukasi.
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
