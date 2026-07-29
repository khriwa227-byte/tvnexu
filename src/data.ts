import { Benefit, PricingPlan, FAQItem, Testimonial, DeviceItem, MoviePoster } from './types';

export const BENEFITS: Benefit[] = [
  {
    id: 'money-back',
    icon: 'euro',
    title: 'Niet Goed, Geld Terug Garantie',
    description: 'Wij zijn pas tevreden als jij dat bent. Niet tevreden? Ontvang binnen 14 dagen na aankoop een volledige terugbetaling.',
    color: 'text-blue-500 bg-blue-50'
  },
  {
    id: 'ultrasast-connection',
    icon: 'zap',
    title: 'Ultrasnelle Verbinding',
    description: 'In tegenstelling tot andere IPTV-providers gebruikt TvNexu (tv-nexu.app) toegewijde Europese servers van hoge kwaliteit. Onze TV-kanalen openen in minder dan 0,5 seconde.',
    color: 'text-green-500 bg-green-50'
  },
  {
    id: 'direct-install',
    icon: 'settings',
    title: 'Directe Installatie',
    description: 'Configureer eenvoudig je IPTV-abonnement op je favoriete apparaat. We bieden complete after-sales ondersteuning om dit proces te vergemakkelijken.',
    color: 'text-blue-600 bg-blue-50'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '49',
    period: 'Jaar',
    subtitle: 'Jaarabonnement + 6 Maanden Gratis',
    badgeOffer: '+ Gratis IBO Pro-speler!',
    popular: true,
    monthsCount: '18 MAANDEN',
    features: [
      'PREMIUM SERVER',
      'Alle Premium Kanalen',
      'ESPN Nederland voor Eredivisie ⚽',
      'Ziggo Sport en Viaplay voor Formule 1',
      'Eleven Sports voor Belgian Pro League ⚽',
      'Amazon Prime, Videoland, Viaplay, NPO Start Plus, Discovery+, HBO Max, Netflix, Apple+, Disney+',
      'Onbeperkt Films & Series',
      'SD / HD / FULL HD / 4K / 8K',
      'Snelle & Stabiele Servers',
      'Regelmatig Bijgewerkte Content',
      '24/7 Klantenservice',
      '15 dagen Garantie',
      'TV Replay & Gids',
      'Compatibel Met Alle Apparaten'
    ],
    buttonText: 'Bestellen',
    buttonVariant: 'secondary'
  },
  {
    id: 'basis',
    name: 'BASIS',
    price: '39',
    period: 'Jaar',
    subtitle: 'Jaarabonnement + 3 Maanden Gratis',
    badgeOffer: '+ Gratis IBO Pro-speler!',
    features: [
      'BASIC SERVER',
      'Alle Premium Kanalen',
      'ESPN Nederland voor Eredivisie ⚽',
      'Ziggo Sport en Viaplay voor Formule 1',
      'Eleven Sports voor Belgian Pro League ⚽',
      'Amazon Prime, Viaplay, NPO Start Plus, Discovery+, HBO Max, Netflix, Apple+, Disney+',
      'Onbeperkt Films & Series',
      'SD / HD / FULL HD',
      'Snelle & Stabiele Servers',
      'Regelmatig Bijgewerkte Content',
      '24/7 Klantenservice',
      '15 dagen Garantie',
      'TV Replay & Gids',
      'Compatibel Met Alle Apparaten'
    ],
    buttonText: 'Bestellen',
    buttonVariant: 'secondary'
  },
  {
    id: 'goud',
    name: '🏆 GOUD',
    price: '69',
    period: 'Jaar',
    subtitle: 'Jaarabonnement + 3 Maanden Gratis',
    badgeOffer: '+ Gratis IBO Pro-speler!',
    bestseller: true,
    screensLabel: '2 SCHERM',
    features: [
      'PREMIUM SERVER',
      '2 Gelijktijdige Verbindingen',
      'Alle Premium Kanalen',
      'ESPN Nederland voor Eredivisie ⚽',
      'Ziggo Sport en Viaplay voor Formule 1',
      'Eleven Sports voor Belgian Pro League ⚽',
      'Amazon Prime, Videoland, Viaplay, NPO Start Plus, Discovery+, HBO Max, Netflix, Apple+, Disney+',
      'Onbeperkt Films & Series',
      'SD / HD / FULL HD / 4K / 8K',
      'Snelle & Stabiele Servers',
      'Regelmatig Bijgewerkte Content',
      '24/7 Klantenservice',
      '15 dagen Garantie',
      'TV Replay & Gids',
      'Compatibel Met Alle Apparaten'
    ],
    buttonText: 'Bestellen',
    buttonVariant: 'accent'
  }
];

export const STATE_STEPS = [
  {
    step: 1,
    title: 'Plaats je bestelling',
    description: 'Kies je gewenste abonnement.'
  },
  {
    step: 2,
    title: 'Ontvang je account',
    description: 'Na betaling ontvang je direct je inloggegevens en installatiegids per e-mail.'
  },
  {
    step: 3,
    title: 'Geniet van je I.P.T.V',
    description: 'Begin direct met het bekijken van alle kanalen, films en series!'
  }
];

export const DEVICES: DeviceItem[] = [
  { id: 'chrome', name: 'Google Chrome', iconType: 'chrome' },
  { id: 'samsung', name: 'SAMSUNG', iconType: 'samsung' },
  { id: 'apple', name: 'Apple VIP', iconType: 'apple' },
  { id: 'microsoft', name: 'Microsoft Windows', iconType: 'microsoft' },
  { id: 'firetv', name: 'Amazon Fire TV', iconType: 'firetv' },
  { id: 'androidtv', name: 'androidtv', iconType: 'androidtv' },
  { id: 'x96', name: 'X96 Box', iconType: 'x96' },
  { id: 'lg', name: 'LG Smart TV', iconType: 'lg' },
  { id: 'toshiba', name: 'TOSHIBA', iconType: 'toshiba' },
  { id: 'tcl', name: 'TCL', iconType: 'tcl' },
  { id: 'sharp', name: 'SHARP', iconType: 'sharp' },
  { id: 'sony', name: 'SONY', iconType: 'sony' },
  { id: 'android', name: 'android', iconType: 'android' },
  { id: 'xbox', name: 'XBOX One / Series', iconType: 'xbox' },
  { id: 'formuler', name: 'FORMULER', iconType: 'formuler' },
  { id: 'lenovo', name: 'Lenovo', iconType: 'lenovo' },
  { id: 'philips', name: 'PHILIPS', iconType: 'philips' },
  { id: 'xiaomi', name: 'mi Xiaomi', iconType: 'xiaomi' },
  { id: 'roku', name: 'Roku', iconType: 'roku' },
  { id: 'playstation', name: 'PLAYSTATION PS4/PS5', iconType: 'playstation' },
  { id: 'huawei', name: 'HUAWEI', iconType: 'huawei' },
  { id: 'hisense', name: 'Hisense', iconType: 'hisense' },
  { id: 'vizio', name: 'VIZIO', iconType: 'vizio' },
  { id: 'nvidia', name: 'NVIDIA Shield', iconType: 'nvidia' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-0',
    question: 'Wat is TvNexu en wat maakt het anders?',
    answer: 'TvNexu is een premium IPTV-aanbieder voor Nederland, België en Canada. In tegenstelling tot andere aanbieders gebruikt TvNexu uitsluitend toegewijde Europese servers voor maximale stabiliteit: kanalen laden in minder dan 0,5 seconde. U krijgt 10.000+ live zenders, 249.000+ films & series en 4K/8K kwaliteit — zonder automatische incasso of verborgen kosten.'
  },
  {
    id: 'faq-1',
    question: 'Is de prijs maandelijks? Word ik opnieuw gefactureerd?',
    answer: 'Nee, absoluut niet! Bij TvNexu hanteren we een eenmalig betalingssysteem zonder automatische incasso of onverwachte afschrijvingen. Je abonnement stopt automatisch na de gekozen periode, tenzij je er zelf voor kiest om te verlengen op onze officiële website. Je zit dus nergens aan vast!'
  },
  {
    id: 'faq-2',
    question: 'Hoe kan ik me abonneren op de streamingdienst?',
    answer: "Het is heel eenvoudig! Kies hierboven het gewenste pakket (Basis, Premium of Goud) en klik op 'Bestellen'. Je vult je e-mailadres en optioneel je telefoonnummer in, waarna je direct via onze beveiligde partners kunt betalen. Of klik op een van de WhatsApp-koppelingsknoppen om de bestelling handmatig af te ronden."
  },
  {
    id: 'faq-3',
    question: 'Waarom word ik doorgestuurd naar een andere site om mijn aankoop af te ronden?',
    answer: 'Voor uw veiligheid maken wij gebruik van beveiligde en gecertificeerde externe betaalproviders. Dit zorgt ervoor dat uw transactie- en bankgegevens 100% beschermd en anoniem blijven volgens de strengste PCI-DSS encryptie-standaarden.'
  },
  {
    id: 'faq-4',
    question: 'Kan ik mijn abonnement betalen met PayPal?',
    answer: 'Ja, zeker! We ondersteunen PayPal, iDEAL (Nederland), Bancontact (België), Visa, MasterCard en Bitcoin / Cryptocurrencies. Staat je gewenste betaalmethode er niet bij? Neem contact met ons op via WhatsApp en we regelen het direct handmatig!'
  },
  {
    id: 'faq-5',
    question: 'Hoe ontvang ik mijn abonnement?',
    answer: 'Na uw betaling ontvangt u direct uw inloggegevens (M3U Link, Portal URL en Xtream Codes) en een eenvoudige installatiehandleiding via e-mail. Indien u via WhatsApp contact heeft opgenomen, sturen we de codes direct daar ook toe.'
  },
  {
    id: 'faq-6',
    question: 'Kan ik de IPTV op meerdere apparaten tegelijk gebruiken?',
    answer: "Met de 'Basis' en 'Premium' pakketten kunt u de IPTV op één apparaat tegelijk gebruiken. Wilt u met meerdere schermen tegelijk kijken (bijvoorbeeld in de woonkamer én de slaapkamer)? Kies dan ons 'Goud' pakket, dat standaard ondersteuning biedt voor 2 gelijktijdige actieve verbindingen!"
  },
  {
    id: 'faq-7',
    question: 'Heb ik een satellietantenne nodig om IPTV te gebruiken?',
    answer: 'Nee, u heeft absoluut geen schotel of satellietantenne nodig! IPTV werkt volledig digitaal via uw internetverbinding. Het enige wat u nodig heeft is een smart device (TV, telefoon, tablet, box) en een stabiele internetverbinding.'
  },
  {
    id: 'faq-8',
    question: 'Werkt deze streamingdienst in mijn land?',
    answer: 'Ja! Onze IPTV-service werkt wereldwijd, zonder enige geoblokkades. Of u nu in Nederland, België, Canada, Spanje of Frankrijk bent: zolang u een internetverbinding heeft (wij raden minstens 15 Mbps aan voor vlekkeloze 4K beeldkwaliteit) geniet u overal van uw live TV-zenders.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'Net5, Veronica en SBS6 in perfecte HD-kwaliteit! Alle Nederlandse series en films direct beschikbaar en de replay functie werkt fantastisch. Eindelijk mis ik geen enkele aflevering of sportevent meer.',
    author: 'Klant',
    country: 'Land: NL'
  },
  {
    id: 'testimonial-2',
    imageUrl: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'Alle RTL en SBS zenders in HD-kwaliteit, wat een verschil! De TV-gids functie is ook erg handig om te zien wat er op de Nederlandse kanalen komt. Zeker een aanrader voor iedereen die kwaliteit zoekt.',
    author: 'Klant',
    country: 'Land: NL'
  },
  {
    id: 'testimonial-3',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    text: 'De kwaliteit van Ziggo Sport is uitstekend! Formule 1 races en voetbalwedstrijden kijken zonder haperingen. Ook FOX Sports werkt perfect, ideaal voor alle sportliefhebbers die geen compromis willen.',
    author: 'Klant',
    country: 'Land: NL'
  }
];

export const MOVIE_POSTERS: MoviePoster[] = [
  { id: 'poster-1',  title: 'Inception',                 imageUrl: '/images/movie_posters/poster-1.jpg',  badge: 'Netflix' },
  { id: 'poster-2',  title: 'No Time to Die',             imageUrl: '/images/movie_posters/poster-2.jpg',  badge: 'Prime Video' },
  { id: 'poster-3',  title: 'Stranger Things',            imageUrl: '/images/movie_posters/poster-3.jpg',  badge: 'Netflix' },
  { id: 'poster-4',  title: 'Basketball',                 imageUrl: '/images/movie_posters/poster-4.jpg',  badge: 'Live Sport' },
  { id: 'poster-5',  title: 'Motorsport',                 imageUrl: '/images/movie_posters/poster-5.jpg',  badge: 'Live Sport' },
  { id: 'poster-6',  title: 'Keizersvrouwen',             imageUrl: '/images/movie_posters/poster-6.jpg',  badge: 'Netflix' },
  { id: 'poster-7',  title: 'Fight Club',                 imageUrl: '/images/movie_posters/poster-7.jpg',  badge: 'Prime Video' },
  { id: 'poster-8',  title: 'Champions League',           imageUrl: '/images/movie_posters/poster-8.jpg',  badge: 'Live Sport' },
  { id: 'poster-9',  title: 'Pulp Fiction',               imageUrl: '/images/movie_posters/poster-9.jpg',  badge: 'Netflix' },
  { id: 'poster-10', title: 'The Godfather',              imageUrl: '/images/movie_posters/poster-10.jpg', badge: 'Prime Video' },
  { id: 'poster-11', title: 'Eredivisie',                 imageUrl: '/images/movie_posters/poster-11.jpg', badge: 'Live Sport' },
  { id: 'poster-12', title: 'Serie A',                    imageUrl: '/images/movie_posters/poster-12.jpg', badge: 'Live Sport' },
  { id: 'poster-13', title: 'Squid Game',                 imageUrl: '/images/movie_posters/poster-13.jpg', badge: 'Netflix' },
  { id: 'poster-14', title: 'The Dark Knight',            imageUrl: '/images/movie_posters/poster-14.jpg', badge: 'HBO MAX' },
  { id: 'poster-15', title: 'Les Schtroumpfs',            imageUrl: '/images/movie_posters/poster-15.jpg', badge: 'Netflix' },
  { id: 'poster-16', title: 'Narcos',                     imageUrl: '/images/movie_posters/poster-16.jpg', badge: 'Netflix' },
  { id: 'poster-17', title: 'CAF Champions League',       imageUrl: '/images/movie_posters/poster-17.jpg', badge: 'Live Sport' },
  { id: 'poster-18', title: 'The Golden Hour',            imageUrl: '/images/movie_posters/poster-18.jpg', badge: 'Prime Video' },
  { id: 'poster-19', title: 'Athletics',                  imageUrl: '/images/movie_posters/poster-19.jpg', badge: 'Live Sport' },
  { id: 'poster-20', title: 'Bundesliga',                 imageUrl: '/images/movie_posters/poster-20.jpg', badge: 'Live Sport' },
  { id: 'poster-21', title: 'Champions Hockey League',    imageUrl: '/images/movie_posters/poster-21.jpg', badge: 'Live Sport' },
  { id: 'poster-22', title: 'Mia and Me',                 imageUrl: '/images/movie_posters/poster-22.jpg', badge: 'Netflix' },
  { id: 'poster-23', title: 'The Matrix',                 imageUrl: '/images/movie_posters/poster-23.jpg', badge: 'HBO MAX' },
  { id: 'poster-24', title: 'Amstel Gold Race',           imageUrl: '/images/movie_posters/poster-24.jpg', badge: 'Live Sport' },
  { id: 'poster-25', title: 'La Liga',                    imageUrl: '/images/movie_posters/poster-25.jpg', badge: 'Live Sport' },
  { id: 'poster-26', title: 'Orange Is The New Black',    imageUrl: '/images/movie_posters/poster-26.jpg', badge: 'Netflix' },
  { id: 'poster-27', title: 'UEFA Europa League',         imageUrl: '/images/movie_posters/poster-27.jpg', badge: 'Live Sport' },
  { id: 'poster-28', title: 'La Casa de Papel',           imageUrl: '/images/movie_posters/poster-28.jpg', badge: 'Netflix' },
  { id: 'poster-30', title: 'Dune',                       imageUrl: '/images/movie_posters/poster-30.jpg', badge: 'HBO MAX' },
];
