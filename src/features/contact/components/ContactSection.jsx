import React, { useEffect, useState, useRef } from 'react';
import { siteConfig } from '../../../config/site';
import Card from '../../../components/ui/Card';

function ChannelIcon({ type }) {
  switch (type) {
    case 'whatsapp':
      return (
        <span className="p-3 bg-green-500/10 text-green-600 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </span>
      );
    case 'shopee':
      return (
        <span className="p-3 bg-orange-500/10 text-orange-600 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.782 8.423a.986.986 0 00-.816-.423h-2.147C16.53 4.257 14.597 1.5 12 1.5S7.47 4.257 7.181 8H5.034a.986.986 0 00-.816.423.998.998 0 00-.142.914l2.585 11.2a1.868 1.868 0 001.821 1.463h6.836a1.868 1.868 0 001.821-1.463l2.585-11.2a.998.998 0 00-.142-.914zM12 3.5c1.472 0 2.766 1.956 3.125 4.5H8.875C9.234 5.456 10.528 3.5 12 3.5zm3.321 16.5H8.679l-2.24-9.7h11.122l-2.24 9.7z" />
          </svg>
        </span>
      );
    case 'ebook':
      return (
        <span className="p-3 bg-purple-500/10 text-purple-600 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </span>
      );
    case 'tiktok':
      return (
        <span className="p-3 bg-gray-900/10 text-gray-900 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </span>
      );
    case 'instagram':
      return (
        <span className="p-3 bg-pink-500/10 text-pink-600 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </span>
      );
    case 'x':
      return (
        <span className="p-3 bg-gray-900/10 text-gray-900 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </span>
      );
    default:
      return (
        <span className="p-3 bg-blue-500/10 text-blue-600 rounded-xl inline-flex items-center justify-center shrink-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </span>
      );
  }
}

export default function ContactSection() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animasi highlight saat URL hash berpindah ke #kontak
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#kontak') {
        setIsHighlighted(true);
        const timer = setTimeout(() => setIsHighlighted(false), 1600);
        return () => clearTimeout(timer);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  // Intersection observer untuk animasi scroll reveal
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
      id="kontak"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 sm:scroll-mt-24 transition-all duration-500"
    >
      {/* Header Section */}
      <div
        className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-3 border border-blue-200/60">
          Official Channels & Store
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Kontak & Tautan Resmi
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Hubungi kami langsung atau akses materi belajar, modul, buku, dan media sosial resmi Bincang Edukasi di bawah ini.
        </p>
      </div>

      {/* Channels Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 rounded-2xl transition-all duration-700 ${isHighlighted ? 'animate-section-glow ring-4 ring-blue-400/40 rounded-2xl' : ''
          }`}
      >
        {siteConfig.channels.map((channel, index) => (
          <a
            key={channel.id}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card
              hoverEffect
              className={`h-full flex flex-col justify-between p-6 transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-xl ${channel.highlight
                  ? 'border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-white'
                  : 'bg-white'
                }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <ChannelIcon type={channel.type} />
                  {channel.badge && (
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${channel.highlight
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}
                    >
                      {channel.badge}
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                  {channel.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1.5 flex items-center gap-1.5">
                  <span>{channel.title}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-mono truncate max-w-[200px] text-gray-400 group-hover:text-blue-500 transition-colors">
                  {/* {channel.label} */}
                </span>
                <span className="font-semibold text-blue-600 group-hover:underline">
                  Kunjungi &rarr;
                </span>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
