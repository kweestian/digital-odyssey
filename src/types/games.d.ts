type Experience = {
  hasDocument: boolean;
  ctaText: string;
  description?: string;
};

type Quiz = {
  checkboxNb: number;
  ctaText: string;
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
