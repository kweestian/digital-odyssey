type Experience = {
  hasDocumentToUpload: boolean;
  description?: string;
  ctaText: string;
};

type Quiz = {
  checkboxNb: number;
  CTAText: string;
};

type Game = {
  title: string;
  description: string;
  icon: typeof import('*.svg');
  coordinates: { lat: number; lng: number };
  type: Experience | Quiz;
  bonus?: Experience | Quiz;
};

type Region = {
  title: string;
  color: string;
  games: Game[];
  available: boolean;
};
