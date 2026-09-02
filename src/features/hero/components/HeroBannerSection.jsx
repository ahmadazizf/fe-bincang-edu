import React from 'react';

export default function HeroBannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-amber-500 via-yellow-400 to-amber-500 py-8 sm:py-14 px-[5%] border-y border-amber-300 shadow-inner">
      {/* Subtle Background White Radial Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative Radiant Warm Sun Glow Orbs */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-orange-400/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-amber-300/60 rounded-full blur-2xl pointer-events-none" />

      {/* Banner Card Container with Crisp White & Gold Border with Warm Shadow */}
      <div className="relative z-10 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/20 border-2 border-white/60 bg-white/20 backdrop-blur-md transition-all duration-300 hover:shadow-amber-950/30 hover:-translate-y-1">
        <img
          src="/hero-banner-bincang-edu.png"
          alt="Bincang Edu - Siap Hadapi Ujian, Raih Mimpimu, Wujudkan Prestasi Gemilang! Bimbel Pilihan Favorit untuk Lulus PTN & Alumni Lolos UI"
          className="w-full h-auto object-cover object-center block"
          loading="eager"
        />
      </div>
    </section>
  );
}
