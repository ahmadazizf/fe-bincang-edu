import React from 'react';
import { siteConfig } from '../../../config/site';
import Button from '../../../components/ui/Button';

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-700 text-white text-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Background decoration elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        {/* Official Logo Badge */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 p-2.5 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-yellow-400/40">
          <img src="/favicon.svg" alt={siteConfig.name} className="w-full h-full object-contain" />
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-yellow-300 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-xs border border-white/20">
          Program Persiapan Ujian Terbaik
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          {siteConfig.name}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 italic text-blue-100 max-w-2xl">
          "{siteConfig.tagline}"
        </p>

        <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mb-10 leading-relaxed">
          {siteConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#registrasi">
            <Button size="lg" variant="secondary">
              Daftar Sekarang
            </Button>
          </a>
          <a href="#program">
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              Lihat Program
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
