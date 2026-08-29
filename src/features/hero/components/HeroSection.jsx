import React from 'react';
import { siteConfig } from '../../../config/site';
import Button from '../../../components/ui/Button';

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background decoration elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      {/* Soft Glow Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, & CTA */}
          <div className="lg:col-span-7 text-left animate-fade-in-left">
            {/* Tag Badge with Keywords */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              <span>Bimbel Masuk UI &amp; Bimbel SNBT PTN Terbaik 2026</span>
            </div>

            {/* Main Semantic Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              Bimbel Masuk UI &amp; Supercamp SIMAK KKI UI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400">
                Satu Langkah Menuju Kampus Impian
              </span>
            </h1>

            {/* Subtitle & Tagline */}
            <p className="text-lg sm:text-xl text-yellow-300 font-semibold mb-4 italic">
              "{siteConfig.tagline} — Bimbel PTN &amp; Bimbel Simak UI dengan Master Tutor Lulusan UI"
            </p>

            {/* Description with Natural Keywords */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-xl mb-8 leading-relaxed">
              Solusi <strong>Bimbel SNBT</strong>, <strong>Bimbel Simak UI</strong>, dan karantina intensif <strong>Supercamp SIMAK KKI UI</strong>. Ribuan siswa berhasil lolos ke Fakultas Kedokteran UI, ITB, UGM, dan PTN Favorit dengan tingkat kelulusan &gt;90%.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a href="#program">
                <Button size="lg" variant="secondary" className="shadow-lg shadow-yellow-400/25 hover:scale-105 transition-transform font-bold">
                  Daftar Sekarang
                </Button>
              </a>
              <a href="#program">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:scale-105 transition-transform">
                  Pilihan Program Unggulan
                </Button>
              </a>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-yellow-400">90%+</div>
                <div className="text-xs text-blue-200 font-medium">Lolos Bimbel PTN &amp; UI</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-yellow-400">100%</div>
                <div className="text-xs text-blue-200 font-medium">Master Tutor Lulusan UI</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-yellow-400">1500+</div>
                <div className="text-xs text-blue-200 font-medium">Bank Soal SNBT &amp; SIMAK</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Student Photo & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center animate-fade-in-right">
            {/* Background Halo Disc */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-amber-500/30 to-blue-500/20 blur-2xl pointer-events-none" />

            {/* Image Container */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md">
              <img
                src="/hero-students.png"
                alt="Siswa Sukses Bimbel Masuk UI dan Bimbel SNBT Bincang Edukasi"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500"
                loading="eager"
              />

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -right-2 sm:right-0 bg-white/95 backdrop-blur-md text-gray-900 px-3.5 py-2.5 rounded-2xl shadow-xl border border-white/40 animate-float-gentle text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎓</span>
                  <div>
                    <div className="text-[11px] font-extrabold text-blue-900 leading-tight">Bimbel Masuk UI &amp; PTN</div>
                    <div className="text-[10px] text-gray-500 font-medium">UI, ITB, UGM &amp; Unair</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:left-0 bg-white/95 backdrop-blur-md text-gray-900 px-3.5 py-2.5 rounded-2xl shadow-xl border border-white/40 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <div>
                    <div className="text-[11px] font-extrabold text-amber-700 leading-tight">Supercamp SIMAK KKI UI</div>
                    <div className="text-[10px] text-gray-500 font-medium">Pendidikan Dokter &amp; KKI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
