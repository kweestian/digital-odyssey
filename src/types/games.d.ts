type Answer = { key: string; value: string; error?: boolean };

type AdditionalResources = {
  text: string;
  link: string;
};

type Question = {
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
  isCompleted?: boolean;
  key: string;
  name: string;
  description: string;
  icon: typeof import('*.svg');
  interaction: Interaction;
  bonus?: Interaction;
  keyLearning: { text: string; additionalRessources: AdditionalResources[] };
  card: string;
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
  regionKey:
    | 'seaOfSustainability'
    | 'playfulPlains'
    | 'loyaltyLagoon'
    | 'creativityCoast'
    | 'virtualValleys'
    | 'timelessTundra';
  // blue | purple | pink | orange | green | grey
  color: '#00ACFF' | '#936EF1' | '#FF3FA0' | '#FF704E' | '#00B16E' | '#B3B3B3' | 'transparent' | '#c09b45f0';
  customElement?: React.FC;
  filColour: 'black' | 'transparent';
  drawing?: string;
  regionOwl: {
    regionOwl: string;
    regionOwlGif: string;
    x: string;
    y: string;
  };
  experiences: Experience[];
  available: boolean;
};

type CustomMap = Region[];
