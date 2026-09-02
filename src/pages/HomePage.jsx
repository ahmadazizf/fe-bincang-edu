import React from 'react';
import SEO from '../components/common/SEO';
import { HeroSection, HeroBannerSection } from '../features/hero';
import { ProgramList } from '../features/programs';
import { ContactSection } from '../features/contact';

export default function HomePage() {
  // Structured Data Schema (Organization & Course Catalog)
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://bincangedukasi.com/#organization',
        name: 'Bincang Edukasi',
        url: 'https://bincangedukasi.com',
        logo: 'https://bincangedukasi.com/logo.png',
        description: 'Bimbel Masuk UI, Bimbel SNBT, Bimbel Simak UI, Supercamp SIMAK KKI UI, dan Bimbel PTN Favorit terpercaya bersama Master Tutor lulusan Universitas Indonesia.',
        slogan: 'Siap Hadapi Ujian',
        telephone: '+6285890306392',
        sameAs: [
          'https://www.instagram.com/bincangedu/',
          'https://www.tiktok.com/@bincangedukasi',
          'https://x.com/bincangedukasi_',
          'https://shopee.co.id/jurusmasukptn_2026',
          'https://lynk.id/pusatbukuedukasi_/41klrw1l14yo',
        ],
      },
      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'Course',
            position: 1,
            name: 'One Month Camp SIMAK KKI UI by Bincang Edu',
            description: 'Karantina intensif 1 bulan di Saffron Apartment Sentul Bogor persiapan SIMAK KKI UI dan Kedokteran dengan Master Tutor UI.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Bincang Edukasi',
              url: 'https://bincangedukasi.com',
            },
          },
          {
            '@type': 'Course',
            position: 2,
            name: 'Bimbingan Penulisan Esai & Motivation Letter',
            description: 'Bimbingan terstruktur motivation letter, personal statement IUP, PPKB UI, SSU ITB, dan beasiswa.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Bincang Edukasi',
              url: 'https://bincangedukasi.com',
            },
          },
          {
            '@type': 'Course',
            position: 3,
            name: 'Bimbel SNBT & Bimbel PTN Reguler',
            description: 'Kelas intensif persiapan UTBK SNBT dengan latihan soal HOTS dan tryout CBT berkala.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Bincang Edukasi',
              url: 'https://bincangedukasi.com',
            },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Apa saja program bimbingan belajar di Bincang Edukasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bincang Edukasi menyediakan program One Month Camp SIMAK KKI UI (Karantina Sentul Bogor), Bimbingan Penulisan Esai & Motivation Letter, dan Kelas Reguler SNBT/PTN.',
            },
          },
          {
            '@type': 'Question',
            name: 'Siapa pengajar di Bincang Edukasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pengajar di Bincang Edukasi merupakan Master Tutor 100% lulusan S1, S2, dan S3 dari Universitas Indonesia (UI) dan Top PTN dengan pengalaman meloloskan ribuan siswa.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bagaimana cara mendaftar bimbingan belajar Bincang Edukasi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pendaftaran dapat dilakukan dengan memilih salah satu program unggulan di website bincangedukasi.com, lalu mengisi formulir pada halaman detail program untuk langsung terhubung ke WhatsApp Admin resmi di +62 858-9030-6392.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Dynamic SEO Header */}
      <SEO
        title="Bimbel Masuk UI, Bimbel SNBT & Supercamp SIMAK KKI UI"
        description="Bimbel Masuk UI, Bimbel SNBT, Bimbel Simak UI, Supercamp SIMAK KKI UI, dan Bimbel PTN Favorit terpercaya bersama Master Tutor lulusan Universitas Indonesia."
        keywords={[
          'Bimbel PTN',
          'Bimbel SNBT',
          'Supercamp SIMAK KKI UI',
          'Bimbel Simak UI',
          'Bimbel Masuk UI',
          'Bimbel Kedokteran UI',
          'Bimbel KKI UI',
          'Tryout SNBT 2026',
        ]}
        canonicalUrl="https://bincangedukasi.com/"
        schemaData={homeSchema}
      />

      {/* 1. Hero Feature */}
      <HeroSection />

      {/* 2. Secondary Hero Banner Showcase */}
      <HeroBannerSection />

      {/* 3. Programs Catalog Feature */}
      <ProgramList />

      {/* 4. Official Channels & Kontak Kami Feature */}
      <ContactSection />
    </>
  );
}
