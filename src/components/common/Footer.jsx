import React from 'react';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <img src="/logo-white.svg" alt={siteConfig.name} className="h-10 w-auto mb-4" />
          <p className="text-sm leading-relaxed text-gray-400 mb-4">{siteConfig.description}</p>
          <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full text-xs font-semibold">
            {siteConfig.tagline}
          </span>
        </div>

        {/* Layanan & Pendaftaran */}
        <div>
          <h4 className="text-white font-semibold mb-3.5 text-sm uppercase tracking-wider">
            Layanan & Toko
          </h4>
          <ul className="text-sm space-y-2.5">
            <li>
              <a
                href="https://wa.me/6285890306392"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp Pendaftaran</span>
                <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded font-mono">
                  Chat
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://shopee.co.id/jurusmasukptn_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
              >
                <span>Buku Jurus Masuk PTN</span>
                <span className="text-[10px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded font-mono">
                  Shopee
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://lynk.id/pusatbukuedukasi_/41klrw1l14yo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
              >
                <span>Edisi Ebook Digital</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded font-mono">
                  Lynk.id
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Media Sosial Resmi */}
        <div>
          <h4 className="text-white font-semibold mb-3.5 text-sm uppercase tracking-wider">
            Media Sosial
          </h4>
          <ul className="text-sm space-y-2.5">
            <li>
              <a
                href="https://www.tiktok.com/@bincangedukasi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok: <span className="text-gray-300">@bincangedukasi</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bincangedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                Instagram: <span className="text-gray-300">@bincangedu</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/bincangedukasi_?t=M6EmR_jcf40qknfwv0zJhw&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                X (Twitter): <span className="text-gray-300">@bincangedukasi_</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Tautan Cepat */}
        <div>
          <h4 className="text-white font-semibold mb-3.5 text-sm uppercase tracking-wider">
            Navigasi Cepat
          </h4>
          <ul className="text-sm space-y-2.5">
            {siteConfig.navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-gray-800 text-center text-xs text-gray-400">
        <p>&copy; {currentYear} {siteConfig.name}. Hak Cipta Dilindungi Undang-Undang.</p>
      </div>
    </footer>
  );
}
