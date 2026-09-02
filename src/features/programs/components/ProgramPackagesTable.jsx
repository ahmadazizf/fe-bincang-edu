import React from 'react';
import Card from '../../../components/ui/Card';
import { formatRupiah } from '../../../utils/helpers';

export default function ProgramPackagesTable({ packages = [], onSelectPackage }) {
  if (!packages || packages.length === 0) return null;

  const handleSelect = (packageName) => {
    if (onSelectPackage) {
      onSelectPackage(packageName);
    }
    const target = document.getElementById('daftar-program');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPackageTheme = (idx) => {
    switch (idx % 3) {
      case 0:
        return {
          topBorder: 'border-t-4 border-t-amber-400',
          badge: 'bg-amber-100 text-amber-950 border-amber-300/80',
          priceBox: 'bg-amber-50/90 border-amber-200/90 text-amber-950',
          priceColor: 'text-amber-950',
          btnClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:from-amber-300 hover:to-yellow-300 text-blue-950 shadow-amber-500/25',
          highlightBadge: 'bg-gradient-to-r from-amber-400 to-yellow-400 text-blue-950 font-black',
        };
      case 1:
        return {
          topBorder: 'border-t-4 border-t-sky-500',
          badge: 'bg-sky-100 text-sky-950 border-sky-300/80',
          priceBox: 'bg-sky-50/90 border-sky-200/90 text-sky-950',
          priceColor: 'text-sky-950',
          btnClass: 'bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-sky-600/25',
          highlightBadge: 'bg-sky-500 text-white font-black',
        };
      case 2:
      default:
        return {
          topBorder: 'border-t-4 border-t-blue-600',
          badge: 'bg-blue-100 text-blue-950 border-blue-300/80',
          priceBox: 'bg-blue-50/90 border-blue-200/90 text-blue-950',
          priceColor: 'text-blue-950',
          btnClass: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 hover:from-blue-800 hover:to-indigo-700 text-white shadow-blue-700/25',
          highlightBadge: 'bg-blue-600 text-white font-black',
        };
    }
  };

  return (
    <section
      id="pilihan-paket"
      className="relative w-full overflow-hidden bg-gradient-to-b from-amber-500 via-yellow-400 to-amber-500 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 sm:scroll-mt-20 border-y border-amber-300 shadow-inner"
    >
      {/* Subtle White Radial Dot Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative Radiant Warm Sun Glow Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/30 text-blue-950 text-xs font-bold uppercase tracking-widest mb-3 border border-white/50 shadow-xs backdrop-blur-md">
            Pilihan Paket &amp; Rincian Investasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight mb-3">
            Pilihan Kelas &amp; Struktur Biaya
          </h2>
          <p className="text-base text-blue-950/85 font-medium leading-relaxed">
            Pilih tipe kelas dan skema bimbingan yang paling sesuai dengan kebutuhan persiapan ujian Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, idx) => {
            const theme = getPackageTheme(idx);

            return (
              <Card
                key={idx}
                hoverEffect
                className={`flex flex-col justify-between p-6 sm:p-7 bg-white/98 backdrop-blur-xs rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative border border-white/90 ${theme.topBorder}`}
              >
                {/* Top Badge & Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-black px-3 py-1 rounded-full border shadow-2xs ${theme.badge}`}>
                      {pkg.badge || `Paket ${idx + 1}`}
                    </span>
                    {pkg.highlight && (
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full shadow-2xs ${theme.highlightBadge}`}>
                        ★ {pkg.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">{pkg.name}</h3>

                  {/* Target / Tipe Kelas */}
                  {pkg.classType && (
                    <div className="mb-3.5">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Sistem Belajar:
                      </span>
                      <p className="text-xs font-bold text-blue-950 bg-blue-50/90 px-3 py-2 rounded-xl border border-blue-100">
                        👥 {pkg.classType}
                      </p>
                    </div>
                  )}

                  {/* Target Jalur (Khusus Esai / Reguler) */}
                  {pkg.target && (
                    <div className="mb-3.5">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Target Jalur:
                      </span>
                      <p className="text-xs font-medium text-blue-950 bg-blue-50/70 p-2.5 rounded-xl border border-blue-100/80">
                        {pkg.target}
                      </p>
                    </div>
                  )}

                  {/* Akomodasi / Kamar (Khusus Camp) */}
                  {pkg.room && (
                    <div className="mb-3.5">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Akomodasi Kamar:
                      </span>
                      <p className="text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100 leading-relaxed">
                        🛏️ {pkg.room}
                      </p>
                    </div>
                  )}

                  {/* Catatan / Note Khusus (Misal Lotus) */}
                  {pkg.note && (
                    <div className="mb-3.5 p-3 bg-yellow-50/90 border border-yellow-200 rounded-xl text-[11px] text-yellow-950 font-medium leading-relaxed">
                      ⚠️ <strong>Catatan:</strong> {pkg.note}
                    </div>
                  )}

                  {/* Cakupan Bimbingan */}
                  {pkg.type && (
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Cakupan Bimbingan:
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {pkg.type}
                      </p>
                    </div>
                  )}

                  {/* Skema Pembayaran Camp (Booking Seat & Pelunasan) */}
                  {pkg.bookingSeat && (
                    <div className="mb-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Booking Seat:</span>
                        <span className="font-bold text-gray-900">{formatRupiah(pkg.bookingSeat)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pelunasan (H-7 Camp):</span>
                        <span className="font-bold text-gray-900">{formatRupiah(pkg.settlement)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Footer */}
                <div className="pt-4 border-t border-gray-100 mt-auto space-y-4">
                  <div className={`p-3.5 rounded-2xl flex items-baseline justify-between shadow-2xs border ${theme.priceBox}`}>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">
                        Total Investasi
                      </span>
                      <span className={`text-2xl font-black ${theme.priceColor}`}>
                        {formatRupiah(pkg.price)}
                      </span>
                    </div>
                    <span className="text-xs font-bold opacity-80">{pkg.pricePeriod || '/ paket'}</span>
                  </div>

                  <button
                    onClick={() => handleSelect(pkg.name)}
                    className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer text-center ${theme.btnClass}`}
                  >
                    Pilih Paket Ini &rarr;
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
