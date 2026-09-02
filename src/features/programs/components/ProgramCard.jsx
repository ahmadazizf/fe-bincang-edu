import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { formatRupiah } from '../../../utils/helpers';

export default function ProgramCard({ program }) {
  const { id, slug, title, badge, description, features, price, pricePeriod, icon } = program;
  const programSlug = slug || id;

  // Custom visual theme styling per program
  const getTheme = () => {
    switch (id) {
      case 'supercamp':
        return {
          topBorder: 'border-t-4 border-t-amber-400',
          iconBg: 'bg-gradient-to-tr from-amber-100 via-amber-200 to-yellow-100 text-amber-900 border border-amber-300/60',
          badgeBg: 'bg-amber-100 text-amber-950 border border-amber-300/80',
          priceBox: 'bg-amber-50/90 border border-amber-200/90 text-amber-950',
          priceColor: 'text-amber-950',
          checkColor: 'text-amber-600 bg-amber-100/90',
          ctaVariant: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 hover:from-amber-300 hover:to-yellow-300 text-blue-950 shadow-amber-500/25',
          hoverGlow: 'hover:shadow-amber-500/20 group-hover:border-amber-300',
          taglineColor: 'text-amber-700',
        };
      case 'esai':
        return {
          topBorder: 'border-t-4 border-t-sky-500',
          iconBg: 'bg-gradient-to-tr from-sky-100 via-blue-100 to-cyan-100 text-sky-900 border border-sky-300/60',
          badgeBg: 'bg-sky-100 text-sky-950 border border-sky-300/80',
          priceBox: 'bg-sky-50/90 border border-sky-200/90 text-sky-950',
          priceColor: 'text-sky-950',
          checkColor: 'text-sky-600 bg-sky-100/90',
          ctaVariant: 'bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-700 hover:to-blue-700 text-white shadow-sky-600/25',
          hoverGlow: 'hover:shadow-sky-500/20 group-hover:border-sky-300',
          taglineColor: 'text-sky-700',
        };
      case 'reguler':
      default:
        return {
          topBorder: 'border-t-4 border-t-blue-600',
          iconBg: 'bg-gradient-to-tr from-blue-100 via-indigo-100 to-blue-200 text-blue-900 border border-blue-300/60',
          badgeBg: 'bg-blue-100 text-blue-950 border border-blue-300/80',
          priceBox: 'bg-blue-50/90 border border-blue-200/90 text-blue-950',
          priceColor: 'text-blue-950',
          checkColor: 'text-blue-600 bg-blue-100/90',
          ctaVariant: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 hover:from-blue-800 hover:to-indigo-700 text-white shadow-blue-700/25',
          hoverGlow: 'hover:shadow-blue-500/20 group-hover:border-blue-300',
          taglineColor: 'text-blue-700',
        };
    }
  };

  const theme = getTheme();

  return (
    <Card
      hoverEffect
      className={`flex flex-col justify-between h-full relative group bg-white/98 backdrop-blur-xs rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/90 ${theme.topBorder} ${theme.hoverGlow}`}
    >
      <div>
        {/* Header Icon & Program Badge */}
        <div className="flex justify-between items-start mb-5">
          <span
            className={`text-3xl p-3 rounded-2xl inline-flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform ${theme.iconBg}`}
            role="img"
            aria-label={title}
          >
            {icon}
          </span>
          {badge && (
            <span className={`text-xs font-black px-3 py-1 rounded-full shadow-2xs tracking-wide ${theme.badgeBg}`}>
              ★ {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <Link
          to={`/program/${programSlug}`}
          className="group-hover:text-blue-600 transition-colors block"
        >
          <h3 className="text-xl font-extrabold text-gray-900 mb-2.5 leading-tight group-hover:text-blue-700">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features Checklist */}
        <div className="border-t border-gray-100 pt-4 mb-6">
          <h4 className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-3">
            Fasilitas Program Unggulan:
          </h4>
          <ul className="space-y-2.5">
            {features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-700 gap-2.5">
                <span className={`p-0.5 rounded-full mt-0.5 shrink-0 ${theme.checkColor}`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Price & CTA Actions */}
      <div className="border-t border-gray-100 pt-4 mt-auto space-y-4">
        {/* Styled Investment Price Box */}
        <div className={`p-3.5 rounded-2xl flex items-baseline justify-between shadow-2xs ${theme.priceBox}`}>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">
              Investasi Mulai Dari
            </span>
            <span className={`text-2xl font-black ${theme.priceColor}`}>
              {formatRupiah(price)}
            </span>
          </div>
          <span className="text-xs font-bold opacity-80">{pricePeriod}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2.5">
          <Link to={`/program/${programSlug}#pilihan-paket`} className="block w-full">
            <button
              className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer text-center ${theme.ctaVariant}`}
            >
              Pilih Paket &amp; Daftar
            </button>
          </Link>

          <Link to={`/program/${programSlug}`} className="block w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs font-bold hover:border-blue-300 hover:text-blue-600"
            >
              Lihat Silabus &amp; Detail Program &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
