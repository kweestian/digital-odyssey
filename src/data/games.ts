import * as BasicOwl from '@/image/owls/basic-owl.svg';

const RecommandationOfTheFuture: Game = {
  title: 'Recommandation of the future',
  description: 'Welcome to the recommandation of the future.',
  icon: BasicOwl,
  coordinates: {
    lat: 0,
    lng: 0,
  },
  type: { hasDocumentToUpload: false, ctaText: 'copy here' },
  bonus: { hasDocumentToUpload: true, ctaText: 'join attachment' },
};

export const CreativityCoasts: Region = {
  title: 'creativity coasts',
  color: 'orange',
  games: [RecommandationOfTheFuture],
  available: true,
};
