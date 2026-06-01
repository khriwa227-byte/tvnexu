import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  { id: 'review-1', imageUrl: '/images/reviews/review_1.png' },
  { id: 'review-2', imageUrl: '/images/reviews/review_2.png' },
  { id: 'review-3', imageUrl: '/images/reviews/review_3.png' },
  { id: 'review-4', imageUrl: '/images/reviews/review_4.png' },
  { id: 'review-5', imageUrl: '/images/reviews/review_5.png' },
  { id: 'review-6', imageUrl: '/images/reviews/review_6.png' },
  { id: 'review-7', imageUrl: '/images/reviews/review_7.png' },
  { id: 'review-8', imageUrl: '/images/reviews/review_8.png' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials-section" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Wat onze klanten zeggen
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            We zijn trots op onze reviews en de tevredenheid van onze klanten. Ontdek waarom we de #1 IPTV provider zijn.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 bg-slate-800 ring-1 ring-white/10">
            <img
              key={REVIEWS[current].id}
              src={REVIEWS[current].imageUrl}
              alt={`Review ${current + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 sm:-translate-x-5 w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-700 transition-colors border border-white/10"
            aria-label="Vorige"
          >
            <ChevronLeft className="w-5 h-5 text-slate-200 stroke-[2.5]" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:translate-x-5 w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-700 transition-colors border border-white/10"
            aria-label="Volgende"
          >
            <ChevronRight className="w-5 h-5 text-slate-200 stroke-[2.5]" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? 'w-6 h-2.5 bg-sky-400'
                    : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
