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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 sm:scroll-mt-24 transition-all duration-500"
    >
      <div
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3 border border-blue-200/60">
          Pilihan Bimbingan Belajar
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Program Unggulan Kami
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Temukan program bimbingan belajar yang tepat sesuai target pencapaian dan kebutuhan akademis Anda.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch p-2 rounded-2xl transition-all duration-700 ${
          isHighlighted ? 'animate-section-glow ring-4 ring-blue-400/40 rounded-2xl' : ''
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
    </section>
  );
}
