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
        '@id': 'https://bincangedu.com/#organization',
        name: 'Bincang Edukasi',
        url: 'https://bincangedu.com',
        logo: 'https://bincangedu.com/logo.png',
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
            name: 'ONE MONTH CAMP SNBT, SIMAK UI & KKI UI 2027 by Bincang Edu',
            description: 'Karantina intensif 1 bulan di Saffron Apartment Sentul Bogor untuk persiapan SNBT, SIMAK UI, dan SIMAK KKI UI bersama Master Tutor UI.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Bincang Edukasi',
              url: 'https://bincangedu.com',
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
              url: 'https://bincangedu.com',
            },
          },
          {
            '@type': 'Course',
            position: 3,
            name: 'Paket Privat SNBT & SIMAK UI 2027 by Bincang Edu',
            description: 'Program bimbingan privat Online & Offline intensif persiapan SNBT 2027 dan SIMAK UI 2027 (SIMAK KKI, S1 Reguler, Vokasi, dan Pascasarjana).',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Bincang Edukasi',
              url: 'https://bincangedu.com',
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
              text: 'Bincang Edukasi menyediakan program One Month Camp SIMAK KKI UI (Karantina Sentul Bogor), Bimbingan Penulisan Esai & Motivation Letter, dan Paket Privat SNBT & SIMAK UI 2027 (Online & Offline).',
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
              text: 'Pendaftaran dapat dilakukan dengan memilih salah satu program unggulan di website bincangedu.com, lalu mengisi formulir pada halaman detail program untuk langsung terhubung ke WhatsApp Admin resmi di +62 858-9030-6392.',
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
        canonicalUrl="https://bincangedu.com/"
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
