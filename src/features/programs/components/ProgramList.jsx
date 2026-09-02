import React, { useEffect, useState, useRef } from 'react';
import ProgramCard from './ProgramCard';
import { usePrograms } from '../hooks/usePrograms';

export default function ProgramList({ onSelectProgram }) {
  const { programs } = usePrograms();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Deteksi ketika halaman di-direct ke #program (baik via URL hash maupun event hashchange)
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#program') {
        setIsHighlighted(true);
        const timer = setTimeout(() => setIsHighlighted(false), 1600);
        return () => clearTimeout(timer);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  // Intersection Observer untuk animasi smooth fade-up saat scroll masuk ke viewport
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
      id="program"
      className="relative w-full overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 sm:scroll-mt-20 border-y border-blue-800/50 transition-all duration-500"
    >
      {/* Background Subtle Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative Soft Ambient Glow Orbs (Royal Blue & Amber) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3 border border-white/20 shadow-xs backdrop-blur-md">
            Pilihan Bimbingan Belajar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Program Unggulan Kami
          </h2>
          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
            Temukan program bimbingan belajar yang tepat sesuai target pencapaian dan kebutuhan akademis Anda.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch p-2 rounded-2xl transition-all duration-700 ${
            isHighlighted ? 'animate-section-glow ring-4 ring-yellow-400/50 rounded-2xl' : ''
          }`}
        >
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProgramCard
                program={program}
                onSelect={onSelectProgram}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
