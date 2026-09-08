import React, { useState } from 'react';
import Card from '../../../components/ui/Card';

export default function ProgramExamTracks({ examTracks = [] }) {
  const [expandedTracks, setExpandedTracks] = useState({});

  if (!examTracks || examTracks.length === 0) return null;

  const toggleTrack = (id) => {
    setExpandedTracks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTrackTheme = (idx) => {
    switch (idx % 4) {
      case 0:
        return {
          borderAccent: 'border-t-4 border-t-blue-600',
          badge: 'bg-blue-100 text-blue-900 border-blue-200',
          targetBg: 'bg-blue-50/90 text-blue-950 border-blue-100',
          iconBg: 'bg-blue-100/80 text-blue-700',
          btnActive: 'bg-blue-900 text-white border-blue-800',
          btnInactive: 'bg-blue-50/90 text-blue-950 hover:bg-blue-100/80 border-blue-200/80',
        };
      case 1:
        return {
          borderAccent: 'border-t-4 border-t-amber-500',
          badge: 'bg-amber-100 text-amber-950 border-amber-200',
          targetBg: 'bg-amber-50/90 text-amber-950 border-amber-100',
          iconBg: 'bg-amber-100/80 text-amber-700',
          btnActive: 'bg-amber-900 text-white border-amber-800',
          btnInactive: 'bg-amber-50/90 text-amber-950 hover:bg-amber-100/80 border-amber-200/80',
        };
      case 2:
        return {
          borderAccent: 'border-t-4 border-t-emerald-600',
          badge: 'bg-emerald-100 text-emerald-950 border-emerald-200',
          targetBg: 'bg-emerald-50/90 text-emerald-950 border-emerald-100',
          iconBg: 'bg-emerald-100/80 text-emerald-700',
          btnActive: 'bg-emerald-900 text-white border-emerald-800',
          btnInactive: 'bg-emerald-50/90 text-emerald-950 hover:bg-emerald-100/80 border-emerald-200/80',
        };
      case 3:
      default:
        return {
          borderAccent: 'border-t-4 border-t-purple-600',
          badge: 'bg-purple-100 text-purple-950 border-purple-200',
          targetBg: 'bg-purple-50/90 text-purple-950 border-purple-100',
          iconBg: 'bg-purple-100/80 text-purple-700',
          btnActive: 'bg-purple-900 text-white border-purple-800',
          btnInactive: 'bg-purple-50/90 text-purple-950 hover:bg-purple-100/80 border-purple-200/80',
        };
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-blue-800/60 shadow-xl">
      {/* Subtle Background Radial Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3 border border-white/20 shadow-xs backdrop-blur-md">
            Pilihan Target &amp; Jalur Ujian
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Pilihan Target Ujian
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 font-medium leading-relaxed">
            Program ini menyediakan {examTracks.length} pilihan target seleksi utama dengan materi terfokus, buku bahan ajar asli, dan struktur biaya paket yang sama persis.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${examTracks.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6 items-stretch`}>
          {examTracks.map((track, idx) => {
            const trackKey = track.id || idx;
            const theme = getTrackTheme(idx);
            const isExpanded = !!expandedTracks[trackKey];

            return (
              <Card
                key={trackKey}
                hoverEffect
                className={`flex flex-col justify-between p-6 sm:p-7 bg-white/98 text-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative border border-white/80 ${theme.borderAccent}`}
              >
                <div>
                  {/* Top Header: Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-black px-3 py-1 rounded-full border shadow-2xs ${theme.badge}`}>
                      {track.badge || `Jalur ${idx + 1}`}
                    </span>
                    <span className={`text-2xl p-2 rounded-2xl ${theme.iconBg}`}>
                      {track.icon || '🎯'}
                    </span>
                  </div>

                  {/* Track Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3.5 leading-snug">
                    {track.name}
                  </h3>

                  {/* Meta Details Box (Lokasi, Periode, Durasi, Fokus) */}
                  {(track.location || track.period || track.duration || track.focus) && (
                    <div className="bg-gray-50/90 rounded-2xl p-3.5 border border-gray-100 text-xs space-y-2 mb-3.5 text-left">
                      {track.location && (
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 text-sm">📍</span>
                          <div>
                            <span className="font-bold text-gray-900">Lokasi: </span>
                            <span className="text-gray-700">{track.location}</span>
                          </div>
                        </div>
                      )}
                      {track.period && (
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 text-sm">📅</span>
                          <div>
                            <span className="font-bold text-gray-900">Periode: </span>
                            <span className="text-gray-700">{track.period}</span>
                          </div>
                        </div>
                      )}
                      {track.duration && (
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 text-sm">⏳</span>
                          <div>
                            <span className="font-bold text-gray-900">Durasi: </span>
                            <span className="text-gray-700">{track.duration}</span>
                          </div>
                        </div>
                      )}
                      {(track.focus || track.targetInfo) && (
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 text-sm">🎯</span>
                          <div>
                            <span className="font-bold text-gray-900">Fokus: </span>
                            <span className="text-blue-900 font-semibold">{track.focus || track.targetInfo}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Fallback Target Info Pill jika tidak ada meta box di atas */}
                  {!track.location && !track.period && !track.duration && track.targetInfo && (
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Fokus Cakupan:
                      </span>
                      <p className={`text-xs font-bold p-2.5 rounded-xl border ${theme.targetBg}`}>
                        📌 {track.targetInfo}
                      </p>
                    </div>
                  )}

                  {/* Collapsible Subjects / Materi yang Dipelajari */}
                  {track.subjects && track.subjects.length > 0 ? (
                    <div className="text-left mb-3.5">
                      <button
                        type="button"
                        onClick={() => toggleTrack(trackKey)}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-between border cursor-pointer shadow-2xs ${
                          isExpanded ? theme.btnActive : theme.btnInactive
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>📚</span>
                          <span>Materi Dipelajari ({track.subjects.length})</span>
                        </span>
                        <span className={`text-[10px] transition-transform duration-300 transform ${isExpanded ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>

                      {/* Smooth Collapsible Body */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[900px] opacity-100 pt-2.5' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {track.description && (
                          <p className="text-xs text-gray-600 mb-2.5 leading-relaxed font-medium">
                            {track.description}
                          </p>
                        )}
                        <div className="space-y-2">
                          {track.subjects.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-2.5 rounded-xl bg-gray-50/80 hover:bg-gray-50 border border-gray-100 transition-colors"
                            >
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-sm shrink-0">{sub.icon || '📌'}</span>
                                <strong className="text-xs font-bold text-gray-900">{sub.title}</strong>
                              </div>
                              {sub.desc && (
                                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed pl-5">
                                  {sub.desc}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Simple Description fallback */
                    track.description && (
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 text-left">
                        {track.description}
                      </p>
                    )
                  )}
                </div>

                {/* Footer Notice */}
                <div className="pt-3 border-t border-gray-100 mt-auto flex items-center justify-between text-[11px] font-bold text-gray-500">
                  <span className="flex items-center gap-1 text-emerald-700">
                    ✓ Termasuk Buku Asli
                  </span>
                  <span className="text-blue-900 bg-blue-50 px-2 py-0.5 rounded-md font-semibold">
                    Harga Paket Sama
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 text-center text-xs sm:text-sm text-blue-200/90 font-medium">
          💡 Siswa dapat menentukan pilihan jenis ujian di formulir pendaftaran atau berkonsultasi gratis terlebih dahulu dengan Admin.
        </div>
      </div>
    </section>
  );
}
