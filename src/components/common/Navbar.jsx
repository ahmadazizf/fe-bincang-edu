import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import ProgramSelectModal from './ProgramSelectModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-blue-950/90 backdrop-blur-md border-b border-blue-800/50 shadow-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src="/logo.png"
                alt={siteConfig.name}
                className="h-10 w-10 object-contain rounded-xl shadow-xs shrink-0 p-0.5 bg-white/10 border border-white/20 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col text-left">
                <span className="font-black text-base sm:text-lg text-white tracking-tight leading-none">
                  BINCANG EDUKASI
                </span>
                <span className="font-serif italic text-[11px] text-yellow-300 font-bold leading-tight mt-0.5">
                  Siap Hadapi Ujian
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-semibold text-blue-100 hover:text-yellow-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:from-amber-300 hover:to-yellow-300 text-blue-950 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Daftar Sekarang
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-100 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-blue-900/50 transition-colors"
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-blue-950/98 backdrop-blur-xl border-b border-blue-800 px-4 pt-2 pb-5 space-y-2 animate-page-fade-in shadow-2xl">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-blue-100 hover:text-yellow-300 hover:bg-blue-900/60 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:from-amber-300 hover:to-yellow-300 text-blue-950 font-extrabold text-sm py-3 rounded-xl shadow-lg shadow-amber-500/20 active:scale-98 transition-all cursor-pointer text-center"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Quick Program Selection Modal */}
      <ProgramSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
