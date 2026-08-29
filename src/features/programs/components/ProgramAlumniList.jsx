import React, { useEffect, useRef, useState } from 'react';
import Card from '../../../components/ui/Card';

export default function ProgramAlumniList({ alumni = [], programTitle = '' }) {
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

  if (!alumni || alumni.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left transition-all duration-700"
    >
      <div
        className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block px-3.5 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold uppercase tracking-widest mb-3 border border-yellow-200">
          Hall of Fame & Alumni
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
          Alumni Sukses {programTitle}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Kisah nyata dan pencapaian para siswa yang berhasil tembus program studi & universitas impian bersama {programTitle}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alumni.map((student, idx) => (
          <div
            key={idx}
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <Card
              hoverEffect
              className="flex flex-col justify-between h-full border-t-4 border-t-blue-600 bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shadow-sm shrink-0">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                      {student.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mt-0.5">
                      {student.campus}
                    </p>
                  </div>
                </div>

                {/* Major Badge & UTBK Score */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
                    🎓 {student.major}
                  </span>
                  {student.utbkScore && (
                    <span className="text-xs font-bold px-2.5 py-1 bg-amber-50 text-amber-800 rounded-lg border border-amber-200">
                      ⭐ Skor UTBK: {student.utbkScore}
                    </span>
                  )}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                  "{student.testimonial}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 mt-auto">
                <span>Lulusan Tahun {student.year}</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Terverifikasi Lolos PTN
                </span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
