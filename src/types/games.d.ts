type Interaction = {
  type: 'text' | 'quiz' | 'attachment';
  label: string;
  description?: string;
  choices?: Array<{ imageLink: string; value: string; label: string }>;
};

type Experience = {
  name: string;
  description: string;
  icon: typeof import('*.svg');
  coordinates: { lat: number; lng: number };
  interaction: Interaction;
  bonus?: Interaction;
  keyLearning?: string;
  additionalResources?: Link[];
};

type Region = {
  regionKey:
    | 'sea_of_sustainability'
    | 'playful_plains'
    | 'loyalty_lagoon'
    | 'creativity_coast'
    | 'virtual_valleys'
    | 'timeless_tundra';
  color: 'blue' | 'purple' | 'pink' | 'orange' | 'yellow' | 'grey';
  experiences: Experience[];
  available: boolean;
};
