import React from 'react';
import Card from '../../../components/ui/Card';
import { formatRupiah } from '../../../utils/helpers';
import Button from '../../../components/ui/Button';

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

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-widest mb-2 border border-blue-200">
          Pilihan Paket & Rincian Investasi
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Pilihan Kelas & Struktur Biaya
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Pilih tipe kelas dan skema bimbingan yang paling sesuai dengan kebutuhan persiapan ujian Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <Card
            key={idx}
            hoverEffect
            className={`flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative ${
              pkg.name === 'KKI IRIS'
                ? 'border-2 border-amber-400 ring-2 ring-amber-400/20'
                : 'border border-gray-200'
            }`}
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100">
                  {pkg.badge || `Paket ${idx + 1}`}
                </span>
                {pkg.highlight && (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    ★ {pkg.highlight}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-2">{pkg.name}</h3>

              {/* Target / Tipe Kelas */}
              {pkg.classType && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    Sistem Belajar:
                  </span>
                  <p className="text-xs font-bold text-blue-900 bg-blue-50/80 px-2.5 py-1.5 rounded-lg border border-blue-100">
                    👥 {pkg.classType}
                  </p>
                </div>
              )}

              {/* Target Jalur (Khusus Esai / Reguler) */}
              {pkg.target && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    Target Jalur:
                  </span>
                  <p className="text-xs font-medium text-blue-900 bg-blue-50/70 p-2 rounded-lg border border-blue-100/80">
                    {pkg.target}
                  </p>
                </div>
              )}

              {/* Akomodasi / Kamar (Khusus Camp) */}
              {pkg.room && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    Akomodasi Kamar:
                  </span>
                  <p className="text-xs text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100 leading-relaxed">
                    🛏️ {pkg.room}
                  </p>
                </div>
              )}

              {/* Catatan / Note Khusus (Misal Lotus) */}
              {pkg.note && (
                <div className="mb-3 p-2.5 bg-yellow-50/80 border border-yellow-200 rounded-xl text-[11px] text-yellow-900 font-medium leading-relaxed">
                  ⚠️ <strong>Catatan:</strong> {pkg.note}
                </div>
              )}

              {/* Cakupan Bimbingan */}
              {pkg.type && (
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
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
            <div className="pt-4 border-t border-gray-100 mt-auto">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs text-gray-400 block">Total Investasi</span>
                  <span className="text-2xl font-extrabold text-blue-900">{formatRupiah(pkg.price)}</span>
                </div>
                <span className="text-xs text-gray-500 font-medium">{pkg.pricePeriod || '/ paket'}</span>
              </div>

              <div onClick={() => handleSelect(pkg.name)} className="cursor-pointer">
                <Button variant="primary" size="sm" className="w-full text-xs font-bold pointer-events-none">
                  Pilih Paket Ini
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
