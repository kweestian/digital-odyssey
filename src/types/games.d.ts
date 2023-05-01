type Answer = { key: string; value: string; error?: boolean };

type AdditionalResources = {
  text: string;
  link: string;
};

type Interaction = {
  type: 'text' | 'attachment' | 'quiz';
  label: string;
  description?: string;
  choices?: Array<{ imageLink?: string; value?: string; label: string; key: string; correctAnswer?: string }>;
  answer?: Answer[] | null;
  attachment?: string | null;
  bonus?: string | null;
};

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
    regionOwlGif: string;
    x: string;
    y: string;
  };
  experiences: Experience[];
  available: boolean;
};

type CustomMap = Region[];
