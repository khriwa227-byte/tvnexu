import React from 'react';
import { Play } from 'lucide-react';
import { MOVIE_POSTERS } from '../data';

const BRAND_LOGOS = [
  { id: 'amazon_prime', name: 'Amazon Prime', logoUrl: '/images/channel_logos/Amazon_Prime.png' },
  { id: 'bbc', name: 'BBC', logoUrl: '/images/channel_logos/BBC.png' },
  { id: 'disney', name: 'Disney+', logoUrl: '/images/channel_logos/Disney+.png' },
  { id: 'espn', name: 'ESPN', logoUrl: '/images/channel_logos/ESPN.png' },
  { id: 'fubotv', name: 'FuboTV', logoUrl: '/images/channel_logos/FuboTV.png' },
  { id: 'hbomax', name: 'HBO Max', logoUrl: '/images/channel_logos/HBO_Max.png' },
  { id: 'hulu', name: 'Hulu', logoUrl: '/images/channel_logos/Hulu.png' },
  { id: 'netflix', name: 'Netflix', logoUrl: '/images/channel_logos/Netflix.png' },
  { id: 'nlziet', name: 'NLZIET', logoUrl: '/images/channel_logos/NLZIET.png' },
  { id: 'npoplus', name: 'NPO Plus', logoUrl: '/images/channel_logos/NPO_Plus.png' },
  { id: 'paramount', name: 'Paramount+', logoUrl: '/images/channel_logos/Paramount+.png' },
  { id: 'rtl', name: 'RTL', logoUrl: '/images/channel_logos/RTL.png' },
  { id: 'sbs', name: 'SBS', logoUrl: '/images/channel_logos/SBS.png' },
  { id: 'skyshowtime', name: 'Sky Showtime', logoUrl: '/images/channel_logos/Sky_Showtime.png' },
  { id: 'spi', name: 'SPI International', logoUrl: '/images/channel_logos/SPI_International.png' },
  { id: 'viaplay', name: 'Viaplay', logoUrl: '/images/channel_logos/Viaplay.png' },
  { id: 'vrt', name: 'VRT', logoUrl: '/images/channel_logos/VRT.png' },
  { id: 'vtm', name: 'VTM', logoUrl: '/images/channel_logos/VTM.png' },
  { id: 'ziggo', name: 'Ziggo Sport', logoUrl: '/images/channel_logos/Ziggo_Sport.png' },
];

const DUPLICATED_POSTERS = [...MOVIE_POSTERS, ...MOVIE_POSTERS];

export default function StreamingReleases() {
  return (
    <section id="streaming-section" className="py-16 bg-page overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 bg-brand/10 text-brand rounded-full font-bold text-xs uppercase tracking-wide border border-brand/20">
            Nieuwste Releases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
            Onbeperkt streamen van de nieuwste films, series en live TV-kanalen
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            Kijk onbeperkt films en series van de beste kanalen
          </p>
        </div>

        {/* Brand Logos marquee */}
        <div className="bg-surface rounded-2xl py-6 px-4 border border-line shadow-xl shadow-ink/5 overflow-hidden" id="brand-logos-row">
          <div className="relative w-full flex select-none py-2">
            {/* Two identical runs, each ending in a trailing gap, so the
                track is exactly 2 repeat units and -50% loops invisibly. */}
            <div className="flex items-center shrink-0 animate-marquee min-w-max">
              {[0, 1].map((copy) => (
                <div
                  key={`run-${copy}`}
                  className="flex gap-6 md:gap-8 pr-6 md:pr-8 items-center shrink-0"
                  aria-hidden={copy > 0}
                >
                  {BRAND_LOGOS.map((brand) => (
                    <div
                      key={`set${copy}-${brand.id}`}
                      className="h-14 w-28 md:h-16 md:w-32 bg-brand-tint rounded-xl p-1 flex items-center justify-center border border-line hover:bg-line hover:scale-[1.03] transition-all duration-300 select-none flex-shrink-0"
                    >
                      <img
                        src={brand.logoUrl}
                        alt={copy === 0 ? brand.name : ''}
                        className="max-h-full max-w-full object-contain scale-125"
                        loading="lazy"
                        referrerPolicy="origin"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Film posters carousel */}
        <div className="overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-marquee min-w-max">
            {DUPLICATED_POSTERS.map((poster, idx) => (
              <div
                key={`${poster.id}-${idx}`}
                className="w-[130px] sm:w-[220px] md:w-[260px] h-[200px] sm:h-[360px] md:h-[400px] rounded-xl sm:rounded-3xl overflow-hidden relative shadow-xl shadow-ink/5 flex-shrink-0 bg-surface ring-1 ring-line"
              >
                <img
                  src={poster.imageUrl}
                  alt={poster.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/40 to-transparent opacity-80" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <span className="px-2.5 py-1 bg-brand text-white font-bold text-[9px] uppercase tracking-wider rounded-full self-start">
                    {poster.badge || '4K Ultra'}
                  </span>
                  <div className="space-y-2">
                    <h4 className="text-white text-base sm:text-lg font-semibold leading-snug">
                      {poster.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-tint">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 fill-white text-white" />
                      </div>
                      <span>Stream in 4K</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
