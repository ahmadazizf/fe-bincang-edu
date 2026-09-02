import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { formatRupiah } from '../../../utils/helpers';

export default function ProgramDetailHero({ program }) {
  const {
    title,
    badge,
    tagline,
    fullDescription,
    price,
    pricePeriod,
    stats,
    heroBgImage,
  } = program;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 min-h-[520px] flex items-center">
      {/* Background Image with Rich Multi-Layer Gradient Overlays */}
      {heroBgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroBgImage}
            alt={title}
            className="w-full h-full object-cover object-center filter brightness-90 transform scale-105 transition-transform duration-1000"
          />
          {/* Layered Gradient Overlay for Crystal Clear Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/85 to-indigo-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-950/50" />
        </div>
      )}

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

      {/* Decorative Glow Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Breadcrumb with fade-in */}
        <nav className="flex items-center gap-2 text-xs text-blue-200 mb-8 font-medium animate-page-fade-in">
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

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Info with Slide-In */}
          <div className="lg:col-span-7 text-left animate-fade-in-left">
            {/* Official Logo Only & Program Badge */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Bincang Edukasi"
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain rounded-2xl p-2 bg-white/15 backdrop-blur-md border border-white/30 shadow-xl hover:scale-105 transition-transform shrink-0"
              />
              {badge && (
                <span className="px-4 py-2 rounded-full bg-yellow-400 text-blue-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg animate-pulse">
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

            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-2xl">
              {fullDescription}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#pilihan-paket">
                <Button size="lg" variant="secondary" className="shadow-lg shadow-yellow-400/20 hover:scale-105 transition-transform font-bold">
                  Pilih Paket Bimbingan
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
                  className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Konsultasi WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Pricing Card & Key Stats with Slide-In */}
          <div className="lg:col-span-5 animate-fade-in-right">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/20 p-6 sm:p-8 text-left shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
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
                  *Pendampingan full-service dari analisis profil hingga hasil akhir siap pakai.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-blue-500/20 text-yellow-300">
                    ⏱️
                  </span>
                  <div>
                    <div className="text-xs text-blue-200">Intensitas &amp; Sesi</div>
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
                    <div className="text-xs text-blue-200">Durasi Bimbingan</div>
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
