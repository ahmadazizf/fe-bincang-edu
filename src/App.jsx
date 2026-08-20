import React from 'react';
import MainLayout from './layouts/MainLayout';
import { HeroSection } from './features/hero';
import { ProgramList } from './features/programs';
import { RegistrationForm, useRegistration } from './features/registration';
import { ContactSection } from './features/contact';

export default function App() {
  const registrationState = useRegistration();

  const handleSelectProgram = (programId) => {
    registrationState.selectProgram(programId);
    const targetSection = document.getElementById('registrasi');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = '#registrasi';
      window.dispatchEvent(new Event('hashchange'));
    }
  };

  return (
    <MainLayout>
      {/* 1. Hero Feature */}
      <HeroSection />

      {/* 2. Programs Catalog Feature */}
      <ProgramList onSelectProgram={handleSelectProgram} />

      {/* 4. Registration Portal Feature */}
      <RegistrationForm registrationState={registrationState} />

      {/* 3. Official Channels & Kontak Kami Feature */}
      <ContactSection />
    </MainLayout>
  );
}