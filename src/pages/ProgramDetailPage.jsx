import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import {
  programsData,
  ProgramDetailHero,
  ProgramAlumniList,
  ProgramSyllabus,
  ProgramPackagesTable,
} from '../features/programs';
import { RegistrationForm, useRegistration } from '../features/registration';
import Button from '../components/ui/Button';

export default function ProgramDetailPage() {
  const { programId } = useParams();
  const program = programsData.find(
    (p) =>
      p.slug === programId ||
      p.id === programId ||
      (programId === 'privat' && p.id === 'esai')
  );

  // Inisialisasi hook dengan program yang sedang aktif
  const registrationState = useRegistration(program);

  // If program not found
  if (!program) {
    return (
      <div className="py-28 px-4 text-center max-w-2xl mx-auto animate-page-fade-in">
        <SEO
          title="Program Tidak Ditemukan"
          description="Halaman program bimbingan belajar tidak ditemukan. Silakan kunjungi daftar program unggulan Bincang Edukasi."
        />
        <span className="text-6xl mb-4 block animate-bounce">🔍</span>
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

  // Course Structured Data Schema
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.title,
    description: program.seoDescription || program.fullDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Bincang Edukasi',
      sameAs: 'https://bincangedukasi.com',
    },
    offers: {
      '@type': 'Offer',
      price: program.price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      instructor: {
        '@type': 'Person',
        name: 'Master Tutor Alumni Universitas Indonesia',
      },
    },
  };

  // Other programs for comparison / quick switch
  const otherPrograms = programsData.filter((p) => p.id !== program.id);

  return (
    <div key={program.id} className="bg-gray-50 min-h-screen animate-page-fade-in">
      {/* Dynamic SEO Meta Tags for Specific Program */}
      <SEO
        title={program.seoTitle || program.title}
        description={program.seoDescription || program.fullDescription}
        keywords={program.seoKeywords || ['Bimbel PTN', 'Bimbel SNBT', 'Supercamp SIMAK KKI UI', 'Bimbel Simak UI', 'Bimbel Masuk UI']}
        canonicalUrl={`https://bincangedukasi.com/program/${program.slug || program.id}`}
        schemaData={courseSchema}
      />

      {/* 1. Header & Program Hero Banner */}
      <ProgramDetailHero program={program} />

      {/* 2. Pilihan Paket & Rincian Biaya (Sub-Program) */}
      {program.packages && (
        <ProgramPackagesTable
          packages={program.packages}
          onSelectPackage={registrationState.selectSubProgram}
        />
      )}

      {/* 3. Kurikulum, Silabus & Fasilitas */}
      <ProgramSyllabus
        curriculum={program.curriculum}
        features={program.features}
      />

      {/* 4. Showcase Alumni & Testimoni Program Ini */}
      <ProgramAlumniList
        alumni={program.alumni}
        programTitle={program.title}
      />

      {/* 5. Formulir Pendaftaran Program Langsung */}
      <div id="daftar-program" className="scroll-mt-20">
        <RegistrationForm
          registrationState={registrationState}
          program={program}
        />
      </div>

      {/* 6. Rekomendasi Program Lainnya */}
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
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-left block group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 bg-blue-50 rounded-xl inline-block group-hover:scale-110 transition-transform">
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
