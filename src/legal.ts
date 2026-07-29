export interface LegalDoc {
  slug: string;
  title: string;
  description: string;
  intro: string;
  clauses: string[];
}

/** Shared by the footer links and the standalone legal pages. */
export const LEGAL_DOCS = {
  privacy: {
    slug: 'privacybeleid',
    title: 'Privacybeleid',
    description:
      'Het privacybeleid van TvNexu: welke gegevens wij verzamelen, hoe wij ermee omgaan en waarom wij een strikt no-logs beleid hanteren.',
    intro:
      'Bij TvNexu hechten we grote waarde aan uw privacy. Dit privacybeleid legt uit welke gegevens we verzamelen en hoe we hiermee omgaan.',
    clauses: [
      '1. Gegevensverzameling: Wij verzamelen uitsluitend de minimale informatie die nodig is om uw IPTV-abonnement op te zetten. Dit omvat uw opgegeven e-mailadres en de door u gekozen betaalmethode. Wij slaan nooit uw fysieke adres of persoonlijke naam op.',
      "2. Geen Logbestanden: Onze dedicated Europese servers hanteren een strikt 'no-logs' beleid. We loggen geen kijkgeschiedenis, IP-adressen of streaming-activiteiten.",
      '3. Veiligheid: Alle betalingen worden verwerkt via volledig gecertificeerde en anonieme SSL-beveiligde transactiekanalen om uw financiële gegevens te beschermen.',
      '4. Delen met Derden: Wij verkopen, ruilen of verhuren uw persoonlijke gegevens nooit aan derden. Alle systemen zijn anoniem gecentraliseerd.',
    ],
  },
  terms: {
    slug: 'gebruiksvoorwaarden',
    title: 'Gebruiksvoorwaarden',
    description:
      'De gebruiksvoorwaarden van TvNexu: licentieverlening, het verbod op delen, eenmalige betaling en onze afspraken over servicekwaliteit.',
    intro:
      'Welkom bij TvNexu. Door onze diensten te gebruiken, gaat u akkoord met de volgende voorwaarden:',
    clauses: [
      '1. Licentieverlening: Uw aankoop verleent u een persoonlijke, niet-exclusieve licentie om onze IPTV-streams te bekijken op het aantal ondersteunde schermen horend bij uw pakket.',
      '2. Verbod op Delen: Het is ten strengste verboden om uw inloggegevens te verkopen of openbaar te delen. Schending hiervan resulteert in onmiddellijke IP-blokkering zonder restitutie.',
      '3. Geautomatiseerde Afloop: Al onze pakketten maken gebruik van een eenmalig betalingsmodel. Er zijn geen automatische incasso’s of verlengingen. Na afloop van uw periode stopt het abonnement vanzelf.',
      '4. Service Kwaliteit: Hoewel wij streven naar 99.9% uptime met onze hoogwaardige dedicated servers, kunnen tijdelijke downtime of onderhoud aan zenders incidenteel voorkomen.',
    ],
  },
  refund: {
    slug: 'restitutiebeleid',
    title: 'Restitutiebeleid',
    description:
      'Het restitutiebeleid van TvNexu: technische ondersteuning, onze niet-goed-geld-terug garantie en waarom u nooit kosten achteraf riskeert.',
    intro:
      'Klanttevredenheid is onze allerhoogste prioriteit bij TvNexu. Ons restitutiebeleid is als volgt georganiseerd:',
    clauses: [
      '1. Technische Ondersteuning: Mocht u problemen ervaren met de installatie of het afspelen van zenders, neem dan direct contact op met onze WhatsApp helpdesk. 95% van de problemen wordt binnen 10 minuten opgelost.',
      '2. Niet-Goed-Geld-Terug Garantie: Indien onze IPTV-dienst na deskundige begeleiding van onze klantenservice niet functioneert op uw apparaat vanwege server-side problemen, heeft u tot 7 dagen na aankoop recht op een volledige terugbetaling.',
      '3. Geen Kosten Achteraf: Omdat onze abonnementen handmatig en eenmalig worden betaald, riskeert u bij ons nooit onverwachte automatische afschrijvingen.',
    ],
  },
} satisfies Record<string, LegalDoc>;

export type LegalDocKey = keyof typeof LEGAL_DOCS;
