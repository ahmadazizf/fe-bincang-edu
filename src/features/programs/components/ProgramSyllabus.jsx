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
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left transition-all duration-700"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Kurikulum & Silabus */}
        <div
          className={`lg:col-span-7 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-8">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">
              Struktur Pembelajaran
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Kurikulum & Silabus Materi
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Materi disusun sistematis mengikuti kisi-kisi resmi SNBT dan ujian mandiri PTN terbaru.
            </p>
          </div>

          <div className="space-y-4">
            {curriculum.map((item, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <Card className="p-5 border-l-4 border-l-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">{item.topic}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-10">
                    {item.details}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Fasilitas & Keunggulan */}
        <div
          className={`lg:col-span-5 transition-all duration-700 transform delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm sticky top-24 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fasilitas yang Didapatkan</h3>
            <p className="text-xs text-gray-600 mb-6">
              Seluruh fasilitas eksklusif ini otomatis aktif sejak hari pertama Anda bergabung.
            </p>

            <ul className="space-y-3.5">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-700 hover:translate-x-1 transition-transform"
                >
                  <span className="p-1 bg-green-100 text-green-700 rounded-full mt-0.5 shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
