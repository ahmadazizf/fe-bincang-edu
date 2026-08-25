import React from 'react';
import { HeroSection } from '../features/hero';
import { ProgramList } from '../features/programs';
import { RegistrationForm, useRegistration } from '../features/registration';
import { ContactSection } from '../features/contact';

export default function HomePage() {
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
    <>
      {/* 1. Hero Feature */}
      <HeroSection />

      {/* 2. Programs Catalog Feature */}
      <ProgramList onSelectProgram={handleSelectProgram} />

      {/* 3. Registration Portal Feature */}
      <RegistrationForm registrationState={registrationState} />

      {/* 4. Official Channels & Kontak Kami Feature */}
      <ContactSection />
    </>
  );
}
