import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { formatRupiah } from '../../../utils/helpers';

export default function ProgramCard({ program }) {
  const { id, slug, title, badge, description, features, price, pricePeriod, icon } = program;
  const programSlug = slug || id;

  return (
    <Card hoverEffect className="flex flex-col justify-between h-full relative group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-3xl p-2.5 bg-blue-50 rounded-xl inline-block" role="img" aria-label={title}>
            {icon}
          </span>
          {badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
              {badge}
            </span>
          )}
        </div>

        <Link
          to={`/program/${programSlug}`}
          className="group-hover:text-blue-600 transition-colors"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>

        <div className="border-t border-gray-100 pt-4 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Fasilitas Program:
          </h4>
          <ul className="space-y-2.5">
            {features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700 gap-2">
                <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto space-y-3">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-extrabold text-gray-900">{formatRupiah(price)}</span>
            <span className="text-gray-500 text-xs ml-1">{pricePeriod}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Link to={`/program/${programSlug}#pilihan-paket`} className="block w-full">
            <Button
              variant="primary"
              className="w-full font-bold shadow-sm hover:shadow-md"
            >
              Pilih Paket &amp; Daftar
            </Button>
          </Link>

          <Link to={`/program/${programSlug}`} className="block w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs font-semibold hover:border-blue-300 hover:text-blue-600"
            >
              Lihat Silabus &amp; Detail Program &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
