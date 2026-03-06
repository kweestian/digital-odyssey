type Answer = { key: string; value: string; error?: boolean };

type RegionKey =
  | 'leadership-lighthouse'
  | 'collaboration-horizon'
  | 'efficiency-valley'
  | 'craft-canyon'
  | 'adaptability-dunes'
  | 'learning-agility-oasis';

type AdditionalResources = {
  text: string;
  link: string;
};

type RegionalResource = {
  resources: { text: string; link: string; author: string; description: string }[];
  source: 'Book' | 'Podcast' | 'Article' | 'Video' | 'Other';
};

type Question = {
  title: string;
  imageLink?: string;
  title?: string;
  text: string;
  key: string;
  correctAnswer?: string;
  choices: Array<{ value: string; text: string }>;
};

type QuestionType = { type: 'quiz' | 'boolean'; questions: Array<Question> } | { type: 'text' | 'attachment' };

type Interaction = {
  label: string;
  description?: string;
  answer?: Answer[] | null;
  attachment?: string | null;
  bonus?: string | null;
} & QuestionType;

type Experience = {
  // injected when getting data
  regionKey?: RegionKey;
  isCompleted?: boolean;
  key: string;
  name: string;
  description: string;
  interaction: Interaction;
  bonus?: { description: string } & Interaction;
  coordinates: {
    x: number;
    y: number;
  };
};

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export const titleColor: string;
  export default classes;
}

type Region = {
  isComplete?: boolean;
  hasCompletedBonus?: boolean;
  title: { textParts: string[]; coordinates: { x: number; y: number } };
  regionKey: RegionKey;
  // blue | purple | pink | orange | green | grey
  color: '#00ACFF' | '#936EF1' | '#FF3FA0' | '#FF704E' | '#00B16E' | '#B3B3B3' | 'transparent' | '#c09b45f0';
  customElement?: React.FC;
  filColour: 'black' | 'transparent';
  drawing?: string;
  regionOwl: {
    x: string;
    y: string;
  };
  experiences: Experience[];
  available: boolean;
  keyLearning: {
    text: string;
    additionalResources?: AdditionalResources[];
  };
  regionalResources: RegionalResource[];
};

type CustomMap = Region[];
