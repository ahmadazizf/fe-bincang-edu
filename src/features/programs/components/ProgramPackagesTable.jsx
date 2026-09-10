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

  const getPackageTheme = (idx, hasHighlight) => {
    switch (idx % 4) {
      case 0:
        return {
          cardBorder: hasHighlight ? 'border-pink-300 ring-2 ring-pink-500/15' : 'border-slate-200/90 hover:border-pink-300',
          topAccent: 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600',
          badge: 'bg-pink-50 text-pink-800 border-pink-200/80',
          priceBox: 'bg-pink-50/70 border-pink-100 text-pink-950',
          priceColor: 'text-pink-600',
          btnClass: 'bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 hover:from-pink-700 hover:to-rose-600 text-white shadow-pink-500/20',
          highlightBadge: 'bg-pink-600 text-white font-bold',
          checkIcon: 'text-pink-600 bg-pink-50 border-pink-200/60',
        };
      case 1:
        return {
          cardBorder: hasHighlight ? 'border-sky-300 ring-2 ring-sky-500/15' : 'border-slate-200/90 hover:border-sky-300',
          topAccent: 'bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600',
          badge: 'bg-sky-50 text-sky-800 border-sky-200/80',
          priceBox: 'bg-sky-50/70 border-sky-100 text-sky-950',
          priceColor: 'text-sky-600',
          btnClass: 'bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-sky-600/20',
          highlightBadge: 'bg-sky-600 text-white font-bold',
          checkIcon: 'text-sky-600 bg-sky-50 border-sky-200/60',
        };
      case 2:
        return {
          cardBorder: hasHighlight ? 'border-purple-300 ring-2 ring-purple-500/15' : 'border-slate-200/90 hover:border-purple-300',
          topAccent: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700',
          badge: 'bg-purple-50 text-purple-800 border-purple-200/80',
          priceBox: 'bg-purple-50/70 border-purple-100 text-purple-950',
          priceColor: 'text-purple-600',
          btnClass: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-600/20',
          highlightBadge: 'bg-purple-600 text-white font-bold',
          checkIcon: 'text-purple-600 bg-purple-50 border-purple-200/60',
        };
      case 3:
      default:
        return {
          cardBorder: hasHighlight ? 'border-amber-300 ring-2 ring-amber-500/15' : 'border-slate-200/90 hover:border-amber-300',
          topAccent: 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600',
          badge: 'bg-amber-50 text-amber-900 border-amber-200/80',
          priceBox: 'bg-amber-50/70 border-amber-100 text-amber-950',
          priceColor: 'text-amber-700',
          btnClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-slate-950 shadow-amber-500/20 font-extrabold',
          highlightBadge: 'bg-amber-500 text-slate-950 font-black',
          checkIcon: 'text-amber-600 bg-amber-50 border-amber-200/60',
        };
    }
  };

  return (
    <section
      id="pilihan-paket"
      className="relative w-full overflow-hidden bg-slate-50/80 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 sm:scroll-mt-20 border-y border-slate-200"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      {/* Soft Ambient Warm Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-300/60 shadow-2xs">
            <span>✨</span> Pilihan Paket &amp; Rincian Investasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Pilihan Kelas &amp; Struktur Biaya
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Biaya paket di bawah ini berlaku sama untuk semua pilihan target ujian (<strong>SNBT</strong>, <strong>SIMAK UI</strong>, <strong>KKI UI</strong>, maupun <strong>SIMAK Pascasarjana</strong>) dan sudah termasuk buku cetak bahan ajar asli.
          </p>
        </div>

        {/* Card Grid */}
        <div className={`grid grid-cols-1 ${packages.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-5 sm:gap-6 items-stretch`}>
          {packages.map((pkg, idx) => {
            const hasHighlight = Boolean(pkg.highlight);
            const theme = getPackageTheme(idx, hasHighlight);
            const isSupercamp = Boolean(pkg.bookingSeat);

            return (
              <Card
                key={idx}
                hoverEffect
                className={`flex flex-col justify-between p-5 sm:p-6 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative border overflow-hidden ${theme.cardBorder}`}
              >
                {/* Top Subtle Color Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.topAccent}`} />

                <div>
                  {/* Badge & Highlight Top Row */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${theme.badge}`}>
                      {pkg.badge || `Paket ${idx + 1}`}
                    </span>
                    {pkg.highlight && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full shadow-2xs ${theme.highlightBadge}`}>
                        ★ {pkg.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 flex items-center gap-1.5">
                    {pkg.icon && <span className="text-xl">{pkg.icon}</span>}
                    <span>{pkg.name}</span>
                  </h3>

                  {/* Sesi & Tryout Info Pills (Untuk Paket Reguler/Privat) */}
                  {(pkg.sessions || pkg.tryout) && (
                    <div className="mb-3.5 flex flex-wrap gap-1.5">
                      {pkg.sessions && (
                        <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200 flex items-center gap-1">
                          ⏱️ {pkg.sessions}
                        </span>
                      )}
                      {pkg.tryout && (
                        <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 flex items-center gap-1">
                          🎯 {pkg.tryout}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Akomodasi / Kehadiran (Khusus Camp) */}
                  {pkg.room && (
                    <div className="mb-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {pkg.name === 'RAGWORT' ? 'Akomodasi & Kehadiran' : 'Akomodasi Kamar'}
                      </span>
                      <p className="font-medium leading-snug">
                        {pkg.name === 'RAGWORT' ? '🚗' : '🛏️'} {pkg.room}
                      </p>
                    </div>
                  )}

                  {/* Sistem Belajar */}
                  {pkg.classType && (
                    <div className="mb-3.5 text-xs text-slate-700">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Sistem Belajar
                      </span>
                      <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {pkg.classType}
                      </p>
                    </div>
                  )}

                  {/* Target Jalur (Khusus Esai) */}
                  {pkg.target && !pkg.room && (
                    <div className="mb-3.5 text-xs text-slate-700">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Target Jalur
                      </span>
                      <p className="font-medium text-slate-800">
                        {pkg.target}
                      </p>
                    </div>
                  )}

                  {/* Checklist Fasilitas Bimbingan (Scannable Bullet Points) */}
                  <div className="border-t border-slate-100 pt-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Fasilitas &amp; Cakupan:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {isSupercamp ? (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold shrink-0">✓</span>
                            <span><strong>4 Sesi Belajar/Hari</strong> (Pagi–Sore)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold shrink-0">✓</span>
                            <span><strong>TO Mini Harian</strong> &amp; TO Akbar Sabtu</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold shrink-0">✓</span>
                            <span>Bedah Soal Asli, FR &amp; Konseling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            {pkg.name === 'RAGWORT' ? (
                              <span className="text-rose-500 font-bold shrink-0">✕</span>
                            ) : (
                              <span className="text-green-500 font-bold shrink-0">✓</span>
                            )}
                            <span className={pkg.name === 'RAGWORT' ? 'text-slate-400 line-through' : 'font-medium'}>
                              Makan 3×, Snack &amp; Laundry
                            </span>
                          </li>
                        </>
                      ) : (
                        <>
                          {pkg.type && (
                            <li className="flex items-start gap-2">
                              <span className="text-green-500 font-bold shrink-0">✓</span>
                              <span>{pkg.type}</span>
                            </li>
                          )}
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold shrink-0">✓</span>
                            <span>Termasuk <strong>Buku Bahan Ajar Asli</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold shrink-0">✓</span>
                            <span>Master Tutor Alumni Universitas Indonesia</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Catatan / Note Khusus (Misal Lotus / Ragwort) */}
                  {pkg.note && (
                    <div className="mb-3.5 p-2.5 bg-amber-50/80 border border-amber-200/70 rounded-xl text-[11px] text-amber-950 font-medium leading-relaxed">
                      ⚠️ <strong>Catatan:</strong> {pkg.note}
                    </div>
                  )}

                  {/* Breakdown Biaya Paket & Pendaftaran (Reguler) */}
                  {pkg.packageFee && pkg.regFee && (
                    <div className="mb-3 pt-2.5 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                      <div className="flex justify-between">
                        <span>Biaya Paket:</span>
                        <span className="font-semibold text-slate-800">{formatRupiah(pkg.packageFee)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pendaftaran:</span>
                        <span className="font-semibold text-slate-800">{formatRupiah(pkg.regFee)} (1x)</span>
                      </div>
                    </div>
                  )}

                  {/* Skema Pembayaran Camp (Booking Seat & Pelunasan) */}
                  {pkg.bookingSeat && (
                    <div className="mb-3 pt-2.5 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                      <div className="flex justify-between">
                        <span>Booking Seat:</span>
                        <span className="font-semibold text-slate-800">{formatRupiah(pkg.bookingSeat)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pelunasan (H-7):</span>
                        <span className="font-semibold text-slate-800">{formatRupiah(pkg.settlement)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Footer */}
                <div className="pt-3.5 border-t border-slate-100 mt-auto space-y-3">
                  <div className={`p-3 rounded-2xl flex items-baseline justify-between border ${theme.priceBox}`}>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">
                        Total Investasi
                      </span>
                      <span className={`text-xl sm:text-2xl font-black ${theme.priceColor}`}>
                        {formatRupiah(pkg.price)}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold opacity-75">{pkg.pricePeriod || '/ paket'}</span>
                  </div>

                  <button
                    onClick={() => handleSelect(pkg.name)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all transform active:scale-98 cursor-pointer text-center ${theme.btnClass}`}
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
