export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  subtitle: string;
  popular?: boolean;
  monthsCount?: string;
  bestseller?: boolean;
  screensLabel?: string;
  badgeOffer?: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'accent';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  imageUrl: string;
  rating: number;
  text: string;
  author: string;
  country: string;
}

export interface DeviceItem {
  id: string;
  name: string;
  iconType: string; // Used to identify svg or text label details
  logoUrl?: string; // Optional logo image
}

export interface MoviePoster {
  id: string;
  title: string;
  imageUrl: string;
  badge?: string;
}
