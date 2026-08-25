import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { programsData, ProgramDetailHero, ProgramAlumniList, ProgramSyllabus } from '../features/programs';
import { RegistrationForm, useRegistration } from '../features/registration';
import Button from '../components/ui/Button';

export default function ProgramDetailPage() {
  const { programId } = useParams();
  const program = programsData.find(
    (p) => p.slug === programId || p.id === programId
  );

  const registrationState = useRegistration();

  // If program not found
  if (!program) {
    return (
      <div className="py-28 px-4 text-center max-w-2xl mx-auto">
        <span className="text-6xl mb-4 block">🔍</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Program Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Maaf, program yang Anda cari tidak tersedia atau URL salah. Silakan kembali ke daftar program unggulan kami.
        </p>
        <Link to="/#program">
          <Button variant="primary">Lihat Semua Program</Button>
        </Link>
      </div>
    );
  }

  // Other programs for comparison / quick switch
  const otherPrograms = programsData.filter((p) => p.id !== program.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Header & Program Hero Banner */}
      <ProgramDetailHero program={program} />

      {/* 2. Kurikulum, Silabus & Fasilitas */}
      <ProgramSyllabus
        curriculum={program.curriculum}
        features={program.features}
      />

      {/* 3. Showcase Alumni & Testimoni Program Ini */}
      <ProgramAlumniList
        alumni={program.alumni}
        programTitle={program.title}
      />

      {/* 4. Formulir Pendaftaran Program Langsung */}
      <div id="daftar-program" className="scroll-mt-20">
        <RegistrationForm
          registrationState={{
            ...registrationState,
            formData: {
              ...registrationState.formData,
              program: program.id,
            },
          }}
        />
      </div>

      {/* 5. Rekomendasi Program Lainnya */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-200">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">
            Pilihan Lainnya
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Jelajahi Program Bimbingan Belajar Lainnya
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {otherPrograms.map((other) => (
            <Link
              key={other.id}
              to={`/program/${other.slug || other.id}`}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-left block group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 bg-blue-50 rounded-xl inline-block">
                  {other.icon}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                  {other.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                {other.title} &rarr;
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                {other.description}
              </p>
              <span className="text-xs font-semibold text-blue-600 group-hover:underline">
                Pelajari Program Ini &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
