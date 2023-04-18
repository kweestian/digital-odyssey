import * as BasicOwl from '@/image/owls/basic-owl.svg';

const RecommandationOfTheFuture: Game = {
  title: 'Recommandation of the Future',
  description:
    'Welcome to the Recommandation of the Future.\n\n' +
    'Go to Chat GPT and search for an outfit for a specific occasion\n' +
    '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
    'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
    'by Kering-owned brands for (this occasion)."\n\n' +
    "Once you've received your outfit recommandation,\n" +
    'share it here to unlock your next experience on Creativity Coast!',
  icon: BasicOwl,
  coordinates: {
    lat: 0,
    lng: 0,
  },
  type: { hasDocument: false, ctaText: 'copy here' },
  bonus: {
    hasDocument: true,
    description: 'BONUS: Post a photo of the outfit',
    ctaText: 'join attachment',
  },
};

export const CreativityCoasts: Region = {
  title: 'creativity coasts',
  color: 'orange',
  games: [RecommandationOfTheFuture],
  available: true,
};
