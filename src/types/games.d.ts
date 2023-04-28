type Interaction = {
  type: 'text' | 'quiz' | 'attachment';
  label: string;
  description?: string;
  choices?: Array<{ imageLink: string; value: string; label: string }>;
};

type Experience = {
  key: string;
  name: string;
  description: string;
  icon: typeof import('*.svg');
  interaction: Interaction;
  bonus?: Interaction;
  keyLearning?: string;
  additionalResources?: Link[];
};

type Region = {
  regionKey:
    | 'seaOfSustainability'
    | 'playfulPlains'
    | 'loyaltyLagoon'
    | 'creativityCoast'
    | 'virtualValleys'
    | 'timelessTundra';
  // blue | purple | pink | orange | green | grey
  color: '#00ACFF' | '#936EF1' | '#FF3FA0' | '#FF704E' | '#00B16E' | '#B3B3B3' | 'transparent';
  drawing: string;
  regionOwl: {
    regionOwlGif: string;
    x: string;
    y: string;
  };
  experiences: Experience[];
  available: boolean;
};

type CustomMap = Region[];
