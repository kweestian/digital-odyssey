/* eslint-disable max-len */
import * as BasicOwl from '@/image/owls/basic-owl.svg';

export const creativityCoastGames: Experience[] = [
  {
    name: 'Recommandation of the Future',
    key: 'toto',
    description:
      'Welcome to the Recommandation of the Future.\n\n' +
      'Go to Chat GPT and search for an outfit for a specific occasion\n' +
      '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
      'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
      'by Kering-owned brands for (this occasion)."\n\n' +
      "Once you've received your outfit recommandation,\n" +
      'share it here to unlock your next experience on Creativity Coast!',
    icon: BasicOwl,
    card: '/static/image/cards/card.svg',
    interaction: {
      type: 'text',
      label: 'Copy text here',
    },
    bonus: {
      type: 'attachment',
      label: 'join attachment',
      description: 'BONUS: Post a photo of the outfit',
    },
    keyLearning: {
      text: 'AI is accelerating our growth',
      additionalRessources: [{ text: 'Vogue Business', link: 'https://vogue.com' }],
    },
    coordinates: { x: 290, y: 370 },
  },
  {
    name: 'The Future Of Virtual Assistants',
    key: 'toto2',
    description:
      'Welcome to the Recommandation of the Future.\n\n' +
      'Go to Chat GPT and search for an outfit for a specific occasion\n' +
      '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
      'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
      'by Kering-owned brands for (this occasion)."\n\n' +
      "Once you've received your outfit recommandation,\n" +
      'share it here to unlock your next experience on Creativity Coast!',
    icon: BasicOwl,
    card: '/static/image/cards/card.svg',

    interaction: {
      type: 'attachment',
      label: 'JOIN ATTACHMENT',
    },
    bonus: undefined,
    keyLearning: {
      text: 'AI is accelerating our growth',
      additionalRessources: [{ text: 'Another resource: check it out', link: 'https://vogue.com' }],
    },
    coordinates: { x: 310, y: 180 },
  },
  {
    name: 'Recommandation of the Future 2',
    key: 'toto3',
    description:
      'Welcome to the Recommandation of the Future.\n\n' +
      'Go to Chat GPT and search for an outfit for a specific occasion\n' +
      '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
      'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
      'by Kering-owned brands for (this occasion)."\n\n' +
      "Once you've received your outfit recommandation,\n" +
      'share it here to unlock your next experience on Creativity Coast!',
    icon: BasicOwl,
    card: '/static/image/cards/card.svg',

    interaction: {
      type: 'text',
      label: 'Copy text here',
    },
    bonus: undefined,
    keyLearning: {
      text: 'AI is accelerating our growth',
      additionalRessources: [],
    },
    coordinates: { x: 250, y: 260 },
  },
];

export const loyaltyLagoonExperiences: Experience[] = [
  {
    name: 'The futured of brand communities',
    key: 'brand_communities',
    description:
      'Welcome to the Recommandation of the Future.\n\n' +
      'Go to Chat GPT and search for an outfit for a specific occasion\n' +
      '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
      'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
      'by Kering-owned brands for (this occasion)."\n\n' +
      "Once you've received your outfit recommandation,\n" +
      'share it here to unlock your next experience on Creativity Coast!',
    icon: BasicOwl,
    card: '/static/image/cards/card.svg',

    interaction: {
      type: 'quiz',
      label: 'Copy text here',
      questions: [
        {
          key: 'question_one',
          text: 'Launched for the first time on december 5 ...',
          title: 'Question 1',
          imageLink: '/static/image/cards/card.svg',
          correctAnswer: 'two',
          choices: [
            {
              key: 'one',
              text: 'This NFT drop gets you an invite to the next Prada show',
            },
            {
              key: 'two',
              text: 'This NFT drop is linked to a limited edition physiical ...',
            },
            {
              key: 'three',
              text: 'This NFT drop gets you lifetime free coffee',
            },
          ],
        },
        {
          key: 'question_two',
          text: 'Launched for the first time on december 5 ...',
          title: 'Question 1',
          imageLink: '/static/image/cards/card.svg',
          correctAnswer: 'three',
          choices: [
            {
              key: 'one',
              text: 'This NFT drop gets you an invite to the next Prada show',
            },
            {
              key: 'two',
              text: 'This NFT drop is linked to a limited edition physiical ...',
            },
            {
              key: 'three',
              text: 'This NFT drop gets you lifetime free coffee',
            },
          ],
        },
      ],
    },
    bonus: { label: 'BONUS EXPERIENCE', type: 'attachment' },
    keyLearning: {
      text: 'Key learning around Brand COmmunities',
      additionalRessources: [],
    },
    coordinates: { x: -70, y: 280 },
  },
  {
    name: 'The Future of Consumer Expression',
    key: 'loyaltyLagoon_future_of_consumer_expression',
    description:
      'Welcome to the Recommandation of the Future.\n\n' +
      'Go to <a href="https://toto.com" target="_blank">Chat GPT</a> and search for an outfit for a specific occasion\n' +
      '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
      'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
      'by Kering-owned brands for (this occasion)."\n\n' +
      "Once you've received your outfit recommandation,\n" +
      'share it here to unlock your next experience on Creativity Coast!',
    icon: BasicOwl,
    card: '/static/image/cards/card.svg',

    interaction: {
      type: 'quiz',
      label: 'Copy text here',
      questions: [
        {
          key: 'question_one',
          text: 'Launched for the first time on december 5 ...',
          title: 'Question 1',
          imageLink: '/static/image/cards/card.svg',
          correctAnswer: 'two',
          choices: [
            {
              key: 'one',
              text: 'This NFT drop gets you an invite to the next Prada show',
            },
            {
              key: 'two',
              text: 'This NFT drop is linked to a limited edition physiical ...',
            },
            {
              key: 'three',
              text: 'This NFT drop gets you lifetime free coffee',
            },
          ],
        },
        {
          key: 'question_two',
          text: 'Launched for the first time on december 5 ...',
          title: 'Question 1',
          imageLink: '/static/image/cards/card.svg',
          correctAnswer: 'three',
          choices: [
            {
              key: 'one',
              text: 'This NFT drop gets you an invite to the next Prada show',
            },
            {
              key: 'two',
              text: 'This NFT drop is linked to a limited edition physiical ...',
            },
            {
              key: 'three',
              text: 'This NFT drop gets you lifetime free coffee',
            },
          ],
        },
      ],
    },
    bonus: undefined,
    keyLearning: {
      text: 'AI is accelerating our growth',
      additionalRessources: [],
    },
    coordinates: { x: 0, y: 220 },
  },
  {
    name: 'The Future of Brand Loyalty',
    key: 'loyaltyLagoon_future_of_brand_loyalty',
    description:
      'Welcome to the Recommandation of the Future.\n\n' +
      'Go to <a href="https://toto.com" target="_blank">Chat GPT</a> and search for an outfit for a specific occasion\n' +
      '— maybe you want an outfit to wear at a wedding, or to a party Friday night.\n' +
      'Ask Chat GPT "recommend me an outfit made up of pieces\n' +
      'by Kering-owned brands for (this occasion)."\n\n' +
      "Once you've received your outfit recommandation,\n" +
      'share it here to unlock your next experience on Creativity Coast!',
    icon: BasicOwl,
    card: '/static/image/cards/card.svg',

    interaction: {
      type: 'quiz',
      label: 'Copy text here',
      questions: [
        {
          key: 'question_one',
          text: 'Launched for the first time on december 5 ...',
          title: 'Question 1',
          imageLink: '/static/image/cards/card.svg',
          correctAnswer: 'two',
          choices: [
            {
              key: 'one',
              text: 'This NFT drop gets you an invite to the next Prada show',
            },
            {
              key: 'two',
              text: 'This NFT drop is linked to a limited edition physiical ...',
            },
            {
              key: 'three',
              text: 'This NFT drop gets you lifetime free coffee',
            },
          ],
        },
        {
          key: 'question_two',
          text: 'Launched for the first time on december 5 ...',
          title: 'Question 1',
          imageLink: '/static/image/cards/card.svg',
          correctAnswer: 'three',
          choices: [
            {
              key: 'one',
              text: 'This NFT drop gets you an invite to the next Prada show',
            },
            {
              key: 'two',
              text: 'This NFT drop is linked to a limited edition physiical ...',
            },
            {
              key: 'three',
              text: 'This NFT drop gets you lifetime free coffee',
            },
          ],
        },
      ],
    },
    bonus: undefined,
    keyLearning: {
      text: 'AI is accelerating our growth',
      additionalRessources: [],
    },
    coordinates: { x: 100, y: 220 },
  },
];
