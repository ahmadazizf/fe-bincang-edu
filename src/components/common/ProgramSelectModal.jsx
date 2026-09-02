import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { programsData } from '../../features/programs/data/programsData';
import { formatRupiah } from '../../utils/helpers';
import Button from '../ui/Button';

export default function ProgramSelectModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (slug) => {
    onClose();
    navigate(`/program/${slug}#pilihan-paket`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-xs transition-opacity animate-page-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 text-left border border-gray-100 transform transition-all animate-card-entrance max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Tutup Modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center sm:text-left mb-6 pr-8">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-2 border border-blue-200">
            Pendaftaran Bimbingan Belajar
          </span>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            Pilih Program Bimbingan Anda
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Pilih program bimbingan belajar di bawah ini untuk langsung mengisi formulir pendaftaran.
          </p>
        </div>

        {/* Program Cards List */}
        <div className="space-y-3.5">
          {programsData.map((program) => (
            <div
              key={program.id}
              onClick={() => handleSelect(program.slug || program.id)}
              className="p-4 sm:p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50/40 bg-white shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <span className="text-2xl sm:text-3xl p-2.5 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform shrink-0">
                  {program.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                      {program.title}
                    </h4>
                    {program.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 shrink-0">
                        {program.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-2 sm:mb-0">
                    {program.description}
                  </p>
                  <div className="text-xs font-bold text-blue-900 mt-1">
                    Mulai dari {formatRupiah(program.price)} <span className="text-gray-400 font-normal">{program.pricePeriod}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-end sm:self-center">
                <Button
                  size="sm"
                  variant="primary"
                  className="text-xs font-bold px-4 py-2 pointer-events-none group-hover:bg-blue-700"
                >
                  Pilih &amp; Daftar &rarr;
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer / Fast Consultation */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
          <span>
            💬 Ingin konsultasi pemilihan program terlebih dahulu?
          </span>
          <a
            href="https://wa.me/6285890306392"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 font-bold flex items-center gap-1.5 shrink-0"
          >
            <span>Chat WhatsApp Admin</span> &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
