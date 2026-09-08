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
    switch (idx % 4) {
      case 0:
        return {
          topBorder: 'border-t-4 border-t-pink-500',
          badge: 'bg-pink-100 text-pink-950 border-pink-300/80',
          priceBox: 'bg-pink-50/90 border-pink-200/90 text-pink-950',
          priceColor: 'text-pink-950',
          btnClass: 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white shadow-pink-500/25',
          highlightBadge: 'bg-pink-500 text-white font-black',
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
        return {
          topBorder: 'border-t-4 border-t-purple-600',
          badge: 'bg-purple-100 text-purple-950 border-purple-300/80',
          priceBox: 'bg-purple-50/90 border-purple-200/90 text-purple-950',
          priceColor: 'text-purple-950',
          btnClass: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-600/25',
          highlightBadge: 'bg-purple-600 text-white font-black',
        };
      case 3:
      default:
        return {
          topBorder: 'border-t-4 border-t-amber-400',
          badge: 'bg-amber-100 text-amber-950 border-amber-300/80',
          priceBox: 'bg-amber-50/90 border-amber-200/90 text-amber-950',
          priceColor: 'text-amber-950',
          btnClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:from-amber-300 hover:to-yellow-300 text-blue-950 shadow-amber-500/25',
          highlightBadge: 'bg-gradient-to-r from-amber-400 to-yellow-400 text-blue-950 font-black',
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

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/30 text-blue-950 text-xs font-bold uppercase tracking-widest mb-3 border border-white/50 shadow-xs backdrop-blur-md">
            Pilihan Paket &amp; Rincian Investasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight mb-3">
            Pilihan Kelas &amp; Struktur Biaya
          </h2>
          <p className="text-base text-blue-950/85 font-medium leading-relaxed">
            Biaya paket di bawah ini berlaku sama untuk semua pilihan target ujian (<strong>SNBT</strong>, <strong>SIMAK UI</strong>, <strong>KKI UI</strong>, maupun <strong>SIMAK Pascasarjana</strong>) dan sudah termasuk buku cetak bahan ajar asli.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${packages.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6 items-stretch`}>
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

                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-1.5">
                    {pkg.icon && <span className="text-xl">{pkg.icon}</span>}
                    <span>{pkg.name}</span>
                  </h3>

                  {/* Sesi & Tryout Info Pills */}
                  {(pkg.sessions || pkg.tryout) && (
                    <div className="mb-3.5 flex flex-wrap gap-1.5">
                      {pkg.sessions && (
                        <span className="text-[11px] font-bold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 flex items-center gap-1">
                          ⏱️ {pkg.sessions}
                        </span>
                      )}
                      {pkg.tryout && (
                        <span className="text-[11px] font-bold text-amber-950 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100 flex items-center gap-1">
                          🎯 {pkg.tryout}
                        </span>
                      )}
                    </div>
                  )}

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

                  {/* Rincian Biaya Paket & Pendaftaran */}
                  {pkg.packageFee && pkg.regFee && (
                    <div className="mb-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Biaya Paket:</span>
                        <span className="font-bold text-gray-900">{formatRupiah(pkg.packageFee)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Biaya Pendaftaran:</span>
                        <span className="font-bold text-gray-900">{formatRupiah(pkg.regFee)} (1x di awal)</span>
                      </div>
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

        {/* Ketentuan Pembayaran Info Banner */}
        {/* <div className="mt-12 p-5 sm:p-6 bg-white/95 backdrop-blur-md rounded-3xl border border-white/80 shadow-xl text-blue-950 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5">
          <span className="text-4xl p-3.5 bg-gradient-to-tr from-amber-100 to-yellow-200 rounded-2xl shrink-0 shadow-inner">
            💳
          </span>
          <div className="text-xs sm:text-sm text-left">
            <h4 className="font-black text-blue-950 text-base mb-1.5 flex items-center gap-2">
              <span>Ketentuan Pembayaran &amp; Fasilitas Belajar:</span>
            </h4>
            <ul className="text-blue-950/85 leading-relaxed space-y-1 list-disc list-inside">
              <li><strong>Harga Sama untuk Semua Target Ujian:</strong> Pilihan target <strong>SNBT</strong>, <strong>SIMAK UI (S1/Vokasi)</strong>, <strong>KKI UI</strong>, maupun <strong>SIMAK Pascasarjana</strong> memiliki struktur biaya paket yang sama persis.</li>
              <li>Pilihan <strong>Privat Online maupun Offline</strong> memiliki harga yang sama, peserta bebas memilih metode belajar yang paling sesuai.</li>
              <li>Sudah termasuk <strong>Buku Bahan Ajar ASLI</strong> yang disesuaikan secara khusus dengan target ujian pilihan siswa.</li>
              <li><strong>Ketentuan Pembayaran:</strong> LUNAS di awal pendaftaran (Biaya pendaftaran Rp250.000 dibayarkan satu kali untuk program reguler/privat).</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}
