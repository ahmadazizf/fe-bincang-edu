import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { formatRupiah } from '../../../utils/helpers';

export default function ProgramDetailHero({ program }) {
  const { title, badge, tagline, fullDescription, price, pricePeriod, icon, stats } = program;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-blue-200 mb-8 font-medium">
          <Link to="/" className="hover:text-white transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link to="/#program" className="hover:text-white transition-colors">
            Program Unggulan
          </Link>
          <span>/</span>
          <span className="text-yellow-400 font-semibold">{title}</span>
        </nav>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Info */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl p-2 bg-white/10 backdrop-blur-xs rounded-xl border border-white/20">
                {icon}
              </span>
              {badge && (
                <span className="px-3.5 py-1 rounded-full bg-yellow-400 text-blue-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-yellow-300 font-semibold mb-4 italic">
              "{tagline}"
            </p>

            <p className="text-blue-100 text-base leading-relaxed mb-8">
              {fullDescription}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#daftar-program">
                <Button size="lg" variant="secondary" className="shadow-lg shadow-yellow-400/20">
                  Daftar Program Ini
                </Button>
              </a>
              <a
                href="https://wa.me/6285890306392"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Konsultasi WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Pricing Card & Key Stats */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-8 text-left shadow-2xl">
              <div className="border-b border-white/15 pb-6 mb-6">
                <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest block mb-1">
                  Investasi Program
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {formatRupiah(price)}
                  </span>
                  <span className="text-blue-200 text-sm font-medium">{pricePeriod}</span>
                </div>
                <p className="text-xs text-blue-200 mt-2">
                  *Sudah termasuk modul belajar lengkap, tryout CBT, dan bimbingan konsultasi jurusan.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-blue-500/20 text-yellow-300">
                    ⏱️
                  </span>
                  <div>
                    <div className="text-xs text-blue-200">Intensitas & Sesi</div>
                    <div className="text-sm font-bold text-white">{stats.intensity}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-blue-500/20 text-yellow-300">
                    👥
                  </span>
                  <div>
                    <div className="text-xs text-blue-200">Ukuran Kelas</div>
                    <div className="text-sm font-bold text-white">{stats.classSize}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-blue-500/20 text-yellow-300">
                    🏆
                  </span>
                  <div>
                    <div className="text-xs text-blue-200">Tingkat Keberhasilan</div>
                    <div className="text-sm font-bold text-green-300">{stats.passRate}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-blue-500/20 text-yellow-300">
                    📅
                  </span>
                  <div>
                    <div className="text-xs text-blue-200">Durasi Belajar</div>
                    <div className="text-sm font-bold text-white">{stats.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
