import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 text-center max-w-xl mx-auto flex flex-col items-center justify-center">
      <span className="text-7xl font-extrabold text-blue-600 mb-2">404</span>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
        Halaman yang Anda cari mungkin telah dipindahkan, diubah namanya, atau tidak tersedia.
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <Button variant="primary">Kembali ke Beranda</Button>
        </Link>
        <Link to="/#program">
          <Button variant="outline">Lihat Program</Button>
        </Link>
      </div>
    </div>
  );
}
