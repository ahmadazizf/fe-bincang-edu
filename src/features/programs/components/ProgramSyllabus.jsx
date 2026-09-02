import React, { useEffect, useRef, useState } from 'react';
import Card from '../../../components/ui/Card';

export default function ProgramSyllabus({ curriculum = [], features = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-blue-800/50 transition-all duration-700"
    >
      {/* Background Subtle Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative Soft Ambient Glow Orbs (Royal Blue & Amber) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Kurikulum & Silabus Materi */}
          <div
            className={`lg:col-span-7 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-extrabold uppercase tracking-widest mb-3 border border-white/20 shadow-2xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span>Struktur Pembelajaran Resmi</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Kurikulum &amp; Silabus Materi
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed">
                Materi disusun sistematis mengikuti kisi-kisi resmi SIMAK KKI UI, SNBT, dan standar seleksi PTN terbaru.
              </p>
            </div>

            <div className="space-y-4">
              {curriculum.map((item, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Card className="p-5 bg-white border border-orange-100/90 border-l-4 border-l-orange-500 rounded-2xl shadow-md hover:shadow-xl hover:border-l-blue-600 hover:-translate-y-1 transition-all duration-300 group text-gray-900">
                    <div className="flex items-center gap-3.5 mb-2.5">
                      <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white text-xs font-black flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-blue-950 group-hover:text-orange-600 transition-colors">
                        {item.topic}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-11">
                      {item.details}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Fasilitas & Keunggulan (Glassmorphic Deep Royal Navy Panel) */}
          <div
            className={`lg:col-span-5 transition-all duration-700 transform delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative overflow-hidden bg-slate-900/60 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl sticky top-24 hover:shadow-blue-500/20 transition-all duration-300">
              {/* Soft Sun Orange Glow within card */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-500/30 text-yellow-300 text-[11px] font-bold tracking-wider uppercase border border-orange-400/40">
                    ★ Benefit Siswa
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                  Fasilitas yang Didapatkan
                </h3>
                <p className="text-xs text-blue-200 mb-6 leading-relaxed">
                  Seluruh fasilitas bimbingan eksklusif ini otomatis aktif sejak hari pertama Anda bergabung di Bincang Edukasi.
                </p>

                <ul className="space-y-3.5">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-blue-100 hover:translate-x-1.5 transition-transform"
                    >
                      <span className="p-1 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white mt-0.5 shrink-0 shadow-xs">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
