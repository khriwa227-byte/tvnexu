import React from 'react';

const SPORTS_LOGOS = [
  { id: 'brasileirao', name: 'Brasileirao', logoUrl: '/images/sports_logos/Brasileirao.png' },
  { id: 'bundesliga', name: 'Bundesliga', logoUrl: '/images/sports_logos/Bundesliga.png' },
  { id: 'caf', name: 'CAF Champions League', logoUrl: '/images/sports_logos/CAF_Champions_League.png' },
  { id: 'canadian', name: 'Canadian Championship', logoUrl: '/images/sports_logos/Canadian_Championship.png' },
  { id: 'challenger', name: 'Challenger Pro League', logoUrl: '/images/sports_logos/Challenger_Pro_League.png' },
  { id: 'eredivisie', name: 'Eredivisie', logoUrl: '/images/sports_logos/Eredivisie.png' },
  { id: 'formula1', name: 'Formula 1', logoUrl: '/images/sports_logos/Formula_1.png' },
  { id: 'laliga', name: 'La Liga', logoUrl: '/images/sports_logos/La_Liga.png' },
  { id: 'ligaprofesional', name: 'Liga Profesional', logoUrl: '/images/sports_logos/Liga_Profesional.png' },
  { id: 'ligue1', name: 'Ligue 1', logoUrl: '/images/sports_logos/Ligue_1.png' },
  { id: 'nfl', name: 'NFL', logoUrl: '/images/sports_logos/NFL.svg' },
  { id: 'premierleague', name: 'Premier League', logoUrl: '/images/sports_logos/Premier_League.png' },
  { id: 'primeiraliga', name: 'Primeira Liga', logoUrl: '/images/sports_logos/Primeira_Liga.png' },
  { id: 'saudipro', name: 'Saudi Pro League', logoUrl: '/images/sports_logos/Saudi_Pro_League.png' },
  { id: 'seriea', name: 'Serie A', logoUrl: '/images/sports_logos/Serie_A.png' },
  { id: 'superlig', name: 'Super Lig', logoUrl: '/images/sports_logos/Super_Lig.png' },
  { id: 'tourdefrance', name: 'Tour de France', logoUrl: '/images/sports_logos/Tour_de_France.png' },
  { id: 'ucl', name: 'UEFA Champions League', logoUrl: '/images/sports_logos/UEFA_Champions_League.png' },
  { id: 'uecl', name: 'UEFA Conference League', logoUrl: '/images/sports_logos/UEFA_Conference_League.png' },
  { id: 'uel', name: 'UEFA Europa League', logoUrl: '/images/sports_logos/UEFA_Europa_League.png' },
  { id: 'ufc', name: 'UFC', logoUrl: '/images/sports_logos/UFC.png' },
];

export default function SportsLeagues() {
  const scrollingItems = [...SPORTS_LOGOS, ...SPORTS_LOGOS];

  return (
    <section id="sports-leagues-section" className="py-8 bg-slate-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] py-6 px-4 sm:px-8 relative overflow-hidden">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden select-none">
            <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-16">
              {scrollingItems.map((league, idx) => (
                <div
                  key={`${league.id}-${idx}`}
                  className="flex items-center justify-center shrink-0 h-14 w-24 sm:h-16 sm:w-28"
                  aria-hidden={idx >= SPORTS_LOGOS.length}
                >
                  <img
                    src={league.logoUrl}
                    alt={league.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
