import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { programsData } from '../../features/programs/data/programsData';
import { formatRupiah } from '../../utils/helpers';

export default function ProgramSelectModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi penutup modal dengan animasi keluar smooth
  const triggerClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 220);
  }, [isClosing, onClose]);

  // Handler pemilihan program + smooth exit animation
  const handleSelect = (slug) => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
      navigate(`/program/${slug}#pilihan-paket`);
    }, 220);
  };

  // Handle tombol ESC pada keyboard & penguncian scroll body
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isClosing) {
        triggerClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isClosing, triggerClose]);

  if (!isOpen && !isClosing) return null;

  const getModalProgramTheme = (id) => {
    switch (id) {
      case 'supercamp':
        return {
          cardBorder: 'border-l-4 border-l-amber-400 hover:border-amber-400 hover:bg-amber-50/40',
          iconBg: 'bg-gradient-to-tr from-amber-100 to-amber-200 text-amber-900 border border-amber-300/60',
          badge: 'bg-amber-100 text-amber-950 border border-amber-300',
          priceColor: 'text-amber-950',
          btnClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-blue-950 font-extrabold shadow-amber-500/20',
        };
      case 'esai':
        return {
          cardBorder: 'border-l-4 border-l-sky-500 hover:border-sky-400 hover:bg-sky-50/40',
          iconBg: 'bg-gradient-to-tr from-sky-100 to-blue-200 text-sky-900 border border-sky-300/60',
          badge: 'bg-sky-100 text-sky-950 border border-sky-300',
          priceColor: 'text-sky-950',
          btnClass: 'bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white font-extrabold shadow-sky-600/20',
        };
      case 'reguler':
      default:
        return {
          cardBorder: 'border-l-4 border-l-blue-600 hover:border-blue-400 hover:bg-blue-50/40',
          iconBg: 'bg-gradient-to-tr from-blue-100 to-indigo-200 text-blue-900 border border-blue-300/60',
          badge: 'bg-blue-100 text-blue-950 border border-blue-300',
          priceColor: 'text-blue-950',
          btnClass: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 text-white font-extrabold shadow-blue-700/20',
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with Fade In / Out */}
      <div
        className={`fixed inset-0 bg-blue-950/70 backdrop-blur-xs transition-opacity ${
          isClosing ? 'animate-backdrop-exit' : 'animate-backdrop-enter'
        }`}
        onClick={triggerClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content with Scale In / Out */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 text-left border border-gray-100 max-h-[90vh] overflow-y-auto ${
          isClosing ? 'animate-modal-exit' : 'animate-modal-enter'
        }`}
      >
        {/* Close Button (X) */}
        <button
          onClick={triggerClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
          aria-label="Tutup Modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center sm:text-left mb-6 pr-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-[11px] font-black uppercase tracking-wider mb-2 border border-blue-200 shadow-2xs">
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
          {programsData.map((program) => {
            const theme = getModalProgramTheme(program.id);

            return (
              <div
                key={program.id}
                onClick={() => handleSelect(program.slug || program.id)}
                className={`p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-white shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${theme.cardBorder}`}
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className={`text-2xl sm:text-3xl p-3 rounded-2xl group-hover:scale-110 transition-transform shrink-0 shadow-2xs ${theme.iconBg}`}
                  >
                    {program.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors text-base">
                        {program.title}
                      </h4>
                      {program.badge && (
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border shadow-2xs shrink-0 ${theme.badge}`}>
                          ★ {program.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-2 sm:mb-0">
                      {program.description}
                    </p>
                    <div className="text-xs font-bold text-gray-700 mt-1.5 flex items-baseline gap-1">
                      <span>Mulai dari</span>
                      <strong className={`font-black text-sm ${theme.priceColor}`}>
                        {formatRupiah(program.price)}
                      </strong>
                      <span className="text-gray-400 font-normal">{program.pricePeriod}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 self-end sm:self-center">
                  <button
                    className={`text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition-all pointer-events-none ${theme.btnClass}`}
                  >
                    Pilih &amp; Daftar &rarr;
                  </button>
                </div>
              </div>
            );
          })}
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
