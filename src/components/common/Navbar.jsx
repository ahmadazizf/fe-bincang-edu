import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import Button from '../ui/Button';
import ProgramSelectModal from './ProgramSelectModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src="/logo.png" alt={siteConfig.name} className="h-10 w-10 object-contain rounded-xl shadow-xs shrink-0 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="font-black text-base sm:text-lg text-blue-900 tracking-tight leading-none">
                  BINCANG EDUKASI
                </span>
                <span className="font-serif italic text-[11px] text-amber-600 font-bold leading-tight mt-0.5">
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
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="sm"
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                className="shadow-sm hover:shadow-md transition-all font-bold"
              >
                Daftar Sekarang
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
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
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full font-bold"
              >
                Daftar Sekarang
              </Button>
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
