/* eslint-disable max-len */
import {
  creativityCoastExperiences,
  loyaltyLagoonExperiences,
  playfulPlainExperiences,
  seaOfSustainabilityExperiences,
  virtualValleysExperiences,
} from './experiences';

/* REGIONS */

export const SeaOfSustainability: Region = {
  title: { textParts: ['Sea Of', 'Sustainability'], coordinates: { x: 595, y: 250 } },
  regionKey: 'sea-of-sustainability',
  color: '#00ACFF',
  filColour: 'transparent',
  customElement: () => (
    <rect id="sea-of-sustainability" x={595} y={250} width="150" height="165" style={{ fill: 'transparent' }} />
  ),
  regionOwl: {
    x: '535',
    y: '330',
  },
  experiences: seaOfSustainabilityExperiences,
  available: true,
  regionalResources: [
    {
      source: 'Book',
      resources: [
        {
          text: '‘Doughnut Economics’',
          link: '',
          author: 'Kate Raworth',
          description:
            'A great book to get a new model of what sustainability is, through a visual framework explaining upper - and lower - limits to development.',
        },
        {
          text: '‘To save everything, click here’',
          link: '',
          author: 'Harvard researcher’s Evgeny Morozov',
          description: 'On the risk of thinking uniquely through the prism of problems and tech solutions.',
        },
      ],
    },
    {
      source: 'Podcast',
      resources: [
        {
          text: '‘Degrowth: Slow is the New Cool’',
          link: 'https://www.youtube.com/watch?v=DHpTNtRCk5U',
          author: 'Timothée Parrique',
          description:
            'An interview with a leading expert on the economy of degrowth, and a researcher at the School of Economics and Management of Lund University in Sweden. How can this idea of ‘Degrowth: Slow is the New Cool’ apply to Kering?',
        },
        {
          text: '‘How Future Thinking Can Drive Sustainability’ from Scandinavian Mind',
          link: 'https://scandinavianmind.com/podcast/how-future-thinking-can-help-drive-sustainability-with-charlotte-sundaker',
          author: 'Scandinavian Mind',
          description:
            'A thought-provoking interview with Charlotte Sundåker, CEO and co-founder of Planethon, a future and transformation agency.',
        },
      ],
    },
    {
      source: 'Article',
      resources: [
        {
          text: '‘Expanding Digital Sufficiency’',
          link: 'https://theshiftproject.org/en/article/implementing-digital-sufficiency/',
          author: 'The Shift Project',
          description: 'A report diving into the implementation of digital sufficiency.',
        },
      ],
    },
    {
      source: 'Video',
      resources: [
        {
          text: "‘The future of fashion: Sustainable brands and ‘circular’ business models'",
          link: 'https://www.youtube.com/watch?v=pRf0X3xETCc',
          author: 'McKinsey',
          description: '',
        },
      ],
    },
  ],
};

export const PlayfulPlains: Region = {
  title: { textParts: ['Playful', 'Plains'], coordinates: { x: 580, y: 530 } },
  regionKey: 'playful-plains',
  color: '#936EF1',
  filColour: 'black',
  drawing:
    'm843.84,466.82c0-1.81.81-2.12.71-6.65s-.5-6.15,1.51-8.67,7.66-6.85,11.29-9.47c3.63-2.62,6.25-4.33,8.47-7.66s3.83-7.46,3.83-7.46c.2-3.73-2.82-7.96-5.34-11.09-2.42-3.12-10.48-3.63-14.51-2.72s-11.29,10.58-15.22,12.2c-3.93,1.61-20.66-8.87-22.88-10.99-2.22-2.12-.1-17.74-1.51-21.57s-6.65-3.23-11.79-4.84-9.17-8.77-10.08-9.07-5.44.4-7.06.5c-1.71.1-4.64-.4-6.45-2.42s-3.53-2.42-5.64-2.42-4.03,2.02-6.95,2.72c-3.02.81-6.75,1.61-10.18.1s-9.07-11.99-9.78-12.3-4.23.1-5.44,0c-1.21-.1-2.42,1.41-3.53,2.92-1.11,1.41-9.58,10.18-14.31,10.48-4.74.3-9.88-.71-14.82-6.05-4.94-5.44-5.34-5.44-6.85-5.64-1.51-.2-3.63,3.43-5.34,3.53s-6.75-.3-8.57,0-6.65,6.55-10.18,9.58c-3.53,3.12-3.23,8.57-2.82,22.07s-18.04,21.47-18.65,22.18c-.71.81-4.54,3.12.2,12.1,4.74,8.97.81,10.28-.81,11.59-1.51,1.31-1.21,7.76,1.41,11.19,2.62,3.43,4.23,10.89,1.41,18.55-2.82,7.66-24.59,22.68-28.12,25.6-3.53,2.92-10.08.1-12.1-2.12s-4.33-2.32-6.65-2.32-5.75,3.02-9.37,4.94c-3.63,2.02-18.14-1.11-22.78-3.23-4.64-2.12-7.76-8.37-8.67-11.49-.91-3.12-1.51-3.53-3.02-4.44-1.41-.91-9.98.71-13.61-.1-3.63-.81-12.3-12.1-14.62-13.2-2.32-1.11-31.15,0-31.15,0-3.63.3-9.58,12.3-11.29,13.91-1.61,1.61-8.67,7.96-10.28,10.28-1.61,2.32-.3,12.9,0,18.24s-9.98,13.61-12.3,15.22c-2.32,1.61-16.23-.3-22.18,0-5.95.3-8.97,9.68-8.97,9.68,0,0,.5,11.09,0,13.41s-3.83,4.13-4.13,6.25.1,3.93.71,4.44c.81.71,1.81-.3,3.43,2.52s2.52,6.15,3.63,6.45,11.99-3.63,14.11,0c0,0-.5,6.95.2,10.18s7.66,8.57,9.07,10.99c1.41,2.42,3.53,7.26,4.54,8.67,1.01,1.41,6.95,3.83,10.18,4.64,3.23.81,8.27,1.11,10.08,1.81,1.81.71,5.64,3.43,7.86,5.75,2.22,2.32,1.61,2.32,3.23,3.53,1.51,1.21,3.23,1.51,4.44,1.51s15.72-.6,17.34,0c1.61.6,3.63.91,5.34,2.62s7.46,6.95,7.46,9.27-1.31,3.33-1.81,4.33-.71,4.03-.2,4.64,1.81,3.33,1.51,4.64-5.44,2.32-6.25,3.33c-.81,1.01-1.61,3.63-.71,5.64s2.62,4.74,1.61,8.77-8.16,6.65-9.78,7.66-2.62,2.52-2.52,4.23.3,3.33,2.52,4.94c2.22,1.61,3.02,3.23,3.63,8.06s-1.51,14.11,4.94,14.82c6.35.71,9.88-1.71,12.4,1.21,2.52,2.82,2.42,8.27,4.33,10.48s3.93,2.62,4.94,2.62,4.74-2.12,6.35-3.02,5.34-.71,6.35,0,7.76,10.99,11.19,12.3c3.43,1.31,8.27.71,9.27,0,1.11-.71,4.74-4.44,5.44-4.94s4.54-6.25,6.55-5.95,3.23,1.92,4.94,2.12c1.71.2,4.94-.71,4.94-.71,0,0,6.85-3.53,7.76-3.23.91.2,1.31,1.61,2.52,3.02,1.21,1.41,4.84,4.23,7.26,4.13,0,0,4.03.1,5.14,1.21,1.11,1.11,4.54.3,4.54.3,0,0,22.68-3.83,29.03-17.94,6.35-14.01,10.48-17.94,6.05-30.84-4.44-12.9-11.29-25.6-8.27-37.5,3.02-11.89,8.27-17.94,11.89-21.47.2-.2.5-.4.71-.71,3.53-3.02,8.67-3.02,12.5-.5,3.83,2.52,8.97,5.54,12.2,4.74,5.24-1.41,12.7-10.99,19.25-16.23,6.65-5.24,18.14-4.64,22.88-5.54,4.64-.81,24.19,4.13,33.87,4.94,9.68.81,16.23-5.24,26.21-5.54,9.98-.3,10.18,2.72,20.06,0,9.88-2.72,26.41-19.25,27.82-26.21s5.24-10.99,1.11-17.64c-4.13-6.65-10.18-10.99-13.2-18.75-3.02-7.66-5.24-22.88-4.94-27.01.3-4.13-2.52-8.27-2.72-16.03s1.41-7.96,4.64-10.99,9.68-8.57,9.68-8.57l1.92-2.52h0Z',
  regionOwl: {
    x: '660',
    y: '500',
  },
  experiences: playfulPlainExperiences,
  available: true,
  regionalResources: [
    {
      source: 'Podcast',
      resources: [
        {
          text: '‘Why Phygital is the Future of Fashion’',
          link: 'https://scandinavianmind.com/podcast/why-phygital-is-the-future-of-fashion',
          author: 'Scandinavian Mind',
          description: '',
        },
      ],
    },
    {
      source: 'Article',
      resources: [
        {
          text: '‘Product returns are wasteful for companies and the planet’ ',
          link: 'https://www.fastcompany.com/90756025/product-returns-are-wasteful-for-companies-and-the-planet-heres-how-to-change-that',
          author: 'Fast Company',
          description: 'Detailing the huge financial and environmental stakes of product returns for brands today.',
        },
        {
          text: '‘Augmented reality is the future of online shopping’ ',
          link: 'https://time.com/6138147/augmented-reality-shopping/',
          author: 'TIME Magazine',
          description: '',
        },
        {
          text: '‘How Luxury is Using Augmented Reality’ the Business of Fashion',
          link: '',
          author: 'Business of Fashion',
          description: 'A great up-to-date read on the space today.',
        },
      ],
    },
    {
      source: 'Video',
      resources: [
        {
          text: '‘Will You Be Wearing Digital Fashion in the Near Future?’',
          link: 'https://www.youtube.com/watch?v=44p44FnOKE8',
          author: 'i-D Magazine',
          description:
            'A thought-provoking quick video from i-D Magazine on the use cases and potential future of digital fashion.',
        },
        {
          text: '‘Authentic Branding for a Global Audience: Angela Ahrendts’',
          link: 'https://www.youtube.com/watch?v=krQG2Hceov4',
          author: 'Future of Storytelling',
          description:
            'At the first major pivot of luxury into digital in the late 2000s, then Burberry CEO Angela Ahrendts spoke about the brand’s innovations across digital immersive experiences. Her words remain equally relevant now as luxury enters an even more evolved, more immersive era of digital.',
        },
      ],
    },
  ],
};

export const LoyaltyLagoon: Region = {
  title: { textParts: ['COMMUNITY', 'LAGOON'], coordinates: { x: 780, y: 620 } },
  regionKey: 'loyalty-lagoon',
  color: '#FF3FA0',
  filColour: 'black',

  drawing:
    'm836.85,479.16c2.2,4.9-.1,16.3,8,22.8,4,3.2,1.2,5.1,1.7,8.7s1.3,4.4,1.3,4.4l.5.3c.5.3,1.3,1,3.6,1.3,2.3.3,3.6-.2,6.1,2s3,6.4,3.1,8.1,1.2,1.6,6.9,6.4c5.8,4.8,19.1,3.6,22.5,1.8,3.5-1.8,6.6-11.4,9.2-11.9s10.5,1.6,17.9-1c7.4-2.6,10.9-15.5,13.2-19.4,2.3-4,7.2-3.3,11.5-3s17.5,9.7,19.3,11,.5,5.9-.3,7.7-3.8,1.1-4.4,7.1c-.7,5.9,4.8,6.1,5.6,7.9s-.2,3.3-2.3,4.3-5.1,6.4-5.3,10.9c-.2,4.4,8.7,25.5,11.7,28s11.5,2.1,16.3,3.3c4.8,1.2,4.1,7.9,4.9,11.7.8,3.8,2.5,4.9,4.9,6.8,2.5,1.8,16,1.3,18.3.8s1.5-2.2,5.3-7.1c2.8-3.6,7.8-4.2,7.8-4.2,0,0,12.3,12.8,10.1,16.1-2.2,3.3-5.2,12.3-3.8,23,1.4,10.7,9,10.9,7.1,16.9-1.9,6-6.8,8.5-15.8,7.4-9-1.1-10.4-5.2-29.2,1.4-13,4.5-10.4,13-7.5,17.8,1.9,3.2,3.7,6.5,5.3,9.9,2.2,4.7,3,6.3,4.4,20.4.07,14.97-.65,19.87-4.01,23.45s-3.07,5.36-18.86-.69c-9.12-3.5-26.03-1.26-26.03-1.26-3.5-.1-18.9-1.2-25.7-2.8-4.5-1.1-9-4.5-11.4-6.6-1.2-1.1-2.5-2.1-3.7-3.1-3.9-3-11.6-9.8-13-10.7-1.8-1.1-8.3-3-15.9-3s-16.7,7.8-19.1,8.9-5.3,2.1-9.7,1c-4.4-1.1-6.4-4.8-15.1-6.4-8.7-1.6-17.8,5.6-24.2,9.6-6.4,4-5.6,11.5-4.6,13.5s10.5,9.2,11.3,11.3-2.6,5.6.8,14.6,17.8,13.3,22.3,12.8,8.5-7.1,10.3-9.1c1.9-2,7.5-2.5,10.2,0s-.5,10.3-.9,11.5-.9,3.7.7,5.6c1.6,1.9,5.8,4.1,8.5,8.2,2.7,4.1.7,10.5,0,12.7s-.8,8.8-2.3,10.3c-.4.4-1,.9-1.6,1.3-2.4,1.8-4.6,3.8-6.8,5.9-4.9,4.9-11.1,9.3-12.1,9.4-1.2.1-5.8.9-11.5,1.5-5.7.6-21.8,3.2-24.1,2.8s-15.4-1.6-18.4-2.2c-3-.5-4.7-3.8-8.7-8.3-3.1-3.5-8.1-4-10.1-4-.9,0-1.8-.1-2.6-.1-3.2-.3-10-.7-12.8-.3-3.8.5-7.7,11.5-12.2,13.7s-7.4,3.8-21.6,0c-9.2-2.5-15.2-10-18.2-15-3.5-5.7-7.8-10.9-12.7-15.5-3.5-3.2-7.2-6.3-10.6-8.4-7.7-4.9-10.4-4.9-15.3-5.5s-7.7-2.7-8.7-9.3,4.4-14.8,6-17.5-1.6-7.7-3.8-9.8c-2.2-2.1-11.8-.7-16.5-3.5-.3-.2-.6-.5-.7-.9-.8-2-6.9-10.3-4.9-11.1,2.7-1.1,4.3-.8,10.2-3.3,8.8-3.7,9.9-4.5,15-9.2,2-1.9,4.2-4.9,7.5-11.5,2-3.9,4.8-10.9,5.1-12.3.6-3.4.7-4.5.8-7,.1-3.5-1.2-7.1-2.4-10.5-2.4-6.6-7.4-20.1-7.9-23.5-1-7.1-.2-16.4,5.2-23.5,5.5-7.1,7.5-10.5,13-8.3,5,2.1,10.2,6.5,15.4,5.9,6.5-.7,12.6-9.6,19-15.1,0,0,4.8-4.6,14.8-5.7,8-.9,12.8-1.1,22.2.9,16.3,3.4,24.2,3.2,27.5,2.3,3.6-1,12.4-5.2,20.6-4.4,8.2.8,12.4.9,17.3.1s11.3-6,18-11.6c5.6-4.6,10.5-11.8,12.4-16.5s4.5-14,3-17.8c-2.7-6.3-8.7-11.1-10.7-14-4.6-6.6-4.8-7.8-7-17.4-1.8-7.7-2-21.5-3.3-25.4-.6-1.7-1.4-5.3-1.3-7.5.2-3.1,1.2-5.6,3.7-7.4l2.3-1.9h0Z',
  regionOwl: {
    x: '850',
    y: '600',
  },
  experiences: loyaltyLagoonExperiences,
  available: true,
  regionalResources: [
    {
      source: 'Podcast',
      resources: [
        {
          text: '‘The Power of Passion Economy’',
          link: 'https://scandinavianmind.com/podcast/the-power-of-passion-economy-with-gustaf-lundberg-toresson',
          author: 'Scandinavian Mind',
          description: 'An eye-opening dive into the next evolution of what we currently call the ‘creator economy’.',
        },
      ],
    },
    {
      source: 'Article',
      resources: [
        {
          text: '‘web3 beyond the hype’',
          link: 'https://www.mckinsey.com/industries/financial-services/our-insights/web3-beyond-the-hype',
          author: 'McKinsey',
          description: 'A great read particularly for those less familiar with the web3 space.',
        },
        {
          text: '‘Social Networks Are Going Much, Much Smaller’ from Slate',
          link: 'https://slate.com/technology/2022/11/mastodon-discord-small-social-networks.html',
          author: 'Slate',
          description:
            'Small social networks are increasingly emerging as a new kind of online community - we can see this with the rise of platforms like Discord or Mastodon.',
        },
      ],
    },
    {
      source: 'Video',
      resources: [
        {
          text: '‘Competing Visions for the Future of Social Media’ with Ethan Zuckerman',
          link: 'https://youtu.be/tHnhowjiYi0?t=219',
          author: 'Ethan Zuckerman',
          description: 'He envisions the future of social media, and of the communities that form through it.',
        },
      ],
    },
    {
      source: 'Other',
      resources: [
        {
          text: 'New kind of communities: creation communities.',
          link: 'https://www.chaos.build/',
          author: 'Chaos',
          description:
            'Chaos is a headless band consisting of 80 artists including musicians, visual artists, engineers, writers, operatives + more.',
        },
      ],
    },
  ],
};

export const CreativityCoasts: Region = {
  title: { textParts: ['Creativity', 'Coast'], coordinates: { x: 1140, y: 620 } },
  regionKey: 'creativity-coast',
  color: '#FF704E',
  filColour: 'black',
  drawing:
    'm1034.25,595.16c1.85,3.75,4.59,5.99,2.6,10.3-3.53,6.08-6.96,21.19.9,30.1,4.53,5.57,4.09,8.48,0,14.6-4.57,6.04-16.51,4.86-22.6,2.9-5.29-1.73-11.14-1.66-17,.5-5.02,2.05-12.44,4.47-12.5,9.6,3.01,10.29,9.64,17.28,10.7,26,1.21,12.45,5.54,32.49-7.42,40.41,14.38,10.88,32.18,22.36,28.12,44.99-1.8,13.8-4.9,23.4-.9,29.5,4.1,6.1,7.8,5.6,10.4,13.4,2.9,8.7,4.2,11,12.6,10.3,3.7-.3,7.5.5,10.7,2.3,19.54,9.5-.07,30.92,12.4,42.6,6,5.3,20.6,21.5,24,26.1s25.3,4.6,28.9,3.5c10.09-1.86,6.1-17.1,12.6-22.4,24.3-13.69,39.03,8.63,58.5,16,2.8.4,19.3-3.5,24.9-5,5.6-1.5,15.6.3,17.1-.3,1.5-.7,8.4-9.1,10.3-11.6,1.9-2.5,8.8-6.1,9.7-7.7.9-1.6,5.7-11.4,8.2-14.7,13.32-14.77-2.45-19.23-12.2-25.2-7.81-8.31-14.07-2.44-22.9-4-3.8-1.4-6.5-11.6-9.8-14.8-3.3-3.2-15.5-13.7-16.2-24.1-.8-10.4-5.1-35.1-2.8-39.7,2.2-4.6,12.7-15.5,15.8-20,3.1-4.5,1.8-16,3.4-20.6,1.6-4.6,9.1-14.2,11-14.6s8.7-.3,11.1-1.7c2.1-1.2,9.4-6.4,9.7-8.6.2-2.2.2-17.8,3.4-25.1,3.2-7.3,0-13.3-2.1-15.2s-18.8-13.7-17.4-18.8c1.3-5,4.4-6.6,4.2-9.5-.2-3-12.4-10.5-10.1-15.7,6.94-13.53,11.05-10.04,16.9-24.8,5.43-16.11,47.44-14.11,57.8-29.7,3.66-8.14,2.39-21.25,11.6-24.6-22.15-16.22-35.54-10.72-35.8,17.5-.3,4.1-5.8,4.4-12.3,5.2-6.8.8-7.1-1.1-17.8-7.6-28.12-21.64,1.15-36.59-52.1-39.6-10.7-1.1-11.2,21.6-11.5,24s-7.4,10.1-7.7,13.7c-.3,3.6,1.1,15.4.5,16.8-.6,1.4-3,2.6-12.5,2.9s-15.4-3.5-25.5-4.6c-10.1-1.1-15,6.3-27.6,6-24.48.79-32.65-46.22-35.5-60.1-4.82-18.7-35.12-13.18-42.3-5.8,2.2,3.5,10,10.3,10,10.3,9.2,6.1,6.4,7.7,6.4,9.9s.7,4,1.3,4.6,3.9-1.3,6.1.3c2.2,1.6,6.6,6.4,4.3,11.4-5.99,9.91-13.7,4.69-9.2,21.9,5.39,20.62,1.55,30.74-19.8,39.9l7.4,8.6h0Z',
  regionOwl: {
    x: '1020',
    y: '720',
  },
  experiences: creativityCoastExperiences,
  available: true,
  regionalResources: [
    {
      source: 'Book',
      resources: [
        {
          author: 'Marcus du Sautoy',
          text: '‘The Creativity Code: Art and Innovation in the Age of AI’',
          description:
            'A brilliant book about the type of creativity brought by machines - and how it redefines our own creativity.',
          link: '',
        },
      ],
    },
    {
      source: 'Podcast',
      resources: [
        {
          text: '‘OpenAI CEO Sam Altman on GPT’',
          link: 'https://podcasts.apple.com/us/podcast/openai-ceo-sam-altman-on-gpt-4-the-a-i-arms-race/id1643307527?i=1000605522804',
          author: 'New York Magazine',
          description:
            'A fascinating interview with Open AI CEO & ChatGPT creator Sam Altman on a leading technology journalist’s podcast on the power and risks associated with this hyper-evolving AI.',
        },
        {
          text: '‘The ethical dilemmas of AI’',
          link: 'https://scandinavianmind.com/podcast/the-ethical-dilemmas-of-ai ',
          author: 'Scandinavian Mind',
          description: 'To be aware of in the creative industries, from diversity-washing to best use practices.',
        },
      ],
    },
    {
      source: 'Article',
      resources: [
        {
          text: '‘Generative AI: Unlocking the future of fashion’',
          link: 'https://www.mckinsey.com/industries/retail/our-insights/generative-ai-unlocking-the-future-of-fashion',
          author: 'McKinsey',
          description:
            'Deep dive from a leading consulting firm on how generative AI can unlock the future of fashion.',
        },
        {
          text: '‘Zegna’s Made-to-Measure Business is Getting a Tech Upgrade’ from Business of Fashion diving into a brand making innovative strides into this fashion model.',
          link: 'https://www.businessoffashion.com/articles/technology/zegnas-made-to-measure-business-is-getting-a-tech-upgrade/',
          author: 'Business of Fashion',
          description: 'Diving into a brand making innovative strides into this fashion model.',
        },
      ],
    },
    {
      source: 'Video',
      resources: [
        {
          text: '‘Introducing Chat GPT-4’ from Open AI',
          link: '',
          author: 'Open AI',
          description:
            'A strong overview of the potential of the groundbreaking technology, produced by those who are making it.',
        },
      ],
    },
  ],
};

export const TimelessTundra: Region = {
  title: { textParts: ['TIMELESS', 'TUNDRA'], coordinates: { x: 1200, y: 390 } },
  regionKey: 'timeless-tundra',
  color: '#c09b45f0',
  filColour: 'black',
  drawing:
    'm888.05,427.76c-8.1,8.2-13.2,12-15.2,14.3-2,2.3-5.4,1.4-10.3,4.8-4.9,3.4-7.6,5.5-7.8,9.2-.2,3.7.7,6.4-.1,8.7s-1.4,4.2-3.7,6.6c-2.3,2.4-5.8,2.7-6.8,7.1s-1,5.9.7,7.8c1.7,1.9,5.4,3.5,7.1,6.7,1.8,3.2,3.2,7.1,5.8,10.4s7.6,9.2,11.1,10.2,6.7.3,9.6.5c3,.2,7.1-3,10.6-2.2s3.3,2.6,9.2,3.8c5.9,1.1,12.8-.2,14.3-1.3,1.5-1.1,5.9-13.2,7.2-15.5,1.2-2,8.7-16.8,13.5-18.1,4.8-1.3,30.4-1.3,35.1-.8s12.1,2.1,15.2.4c0,0,2.5-1.5,4.9-2.8s12.7-8.2,15.9-8.9c3.3-.7,6.7-.5,8.6.2,1.8.7,3.5,4.2,6,9.5s5.7,7.6,5.7,7.6c0,0,11.9-6.8,18.8-7.4,3.2-.3,9.9-.5,14.4,1.2,3.8,1.4,10,4.7,12.4,8.2,2.2,3.3,5.2,22.1,7,27.7,2.1,6.6,6.3,18.3,9.7,23.6,3.2,4.9,5.5,9.8,14.3,11.6,8.8,1.8,14.2-2.2,25.5-5.3,2.8-.8,9.6,0,20,2.7,3.6.9,16.2,3.2,19.9.8.9-.6-.6-7.3-.3-12.9.2-3.3.1-5.1,1.4-7.2,1.3-2.1,5.5-6.9,6.1-9.6,1.3-5.9.9-12.5,3.6-17.7,1.3-2.5,3.3-7.1,6.8-8.2,2.7-.9,9-1.1,15.2-.2,2.2.3,12.3,1.2,17.8,4.2,2.4,1.3,6.3,3.5,8.6,7.1,2.3,3.5,5.7,15.1,7.4,18.4,1.7,3.3,5.1,5.9,7.4,8.1,2.3,2.2,10.2,7,12.4,8.4,2.2,1.4,7.7.3,9.9-.1,1.8-.4,4.6,0,4.8-3.2.1-1.4.8-9.5,1.3-12,.6-2.9,2.2-6.9,4.1-10,1.4-2.2,5.2-5.2,6.8-5.7,1.5-.4,7.7-.6,13.2,1,0,0,2.8.6,6.2,2.4,1.4.8,2.7,1.5,4.1,2.6.8.6,3.2,2.3,7.3,2.9,5.8.9,13.8-.7,16-1.3l2.2-.6s4.2-1.2,5.2-3.4c1.5-3.1,3.5-10.1,5.3-11.2,1.8-1.1,8.3-3.8,14.5-5.3s13.7-8.5,16.3-9.7,11.6-3.3,22.5-.5c4.1,1,8-.3,11.3-2.4,7.4-4.7,11.8-13.1,11.4-21.8-.1-1.2-.2-2.4-.5-3.5-1.9-6.7-3.2-8.5-6.8-9.2s-20,2.9-26.7,2.6c-6.7-.2-18.2-1-19.3-5.9-1.1-4.9,3.9-7.4,8.8-7.8,4.8-.4,10.3-3.3,10.5-5.6s-3.2-5-3.6-9.3c-.4-4.3-2.2-7.4-6.4-8.8-4.2-1.4-20.4-3.4-24.8-7.5-4.4-4.1-5.3-9.1-5.5-14.8-.2-5.7-1.7-15.5-6-17.1-4.3-1.6-11.8-2-18.8-8.7-6.9-6.7-10-16-14.3-16.7-4.3-.7-13.8-1.2-22.3,3.2-8.4,4.4-14.4,4.5-16.2,4.4-1.8-.1-8.9-.2-13.4,1.5-4.1,1.6-16.9,4.4-29.6,4.3-4.2,0-8.4,1-12.1,3-2,1.1-4.2,2.7-6.4,4.7-7.3,6.8-8.4,7.2-11.2,7.2s-9.9-4.4-14.6-4.8c-4.7-.4-11.8,2.9-18,2-6.2-.9-24-12.3-32.6-21.5-8.6-9.2-13.6-21.5-17.6-25.2-7.3-6.9-12.1-5.5-12.1-5.5l-.2,8.7s.4,13.5,0,17.5c-.4,4-5.1,6.6-14.2,7.3-9.1.7-13.8-9.5-20.1-10.6-6.3-1.1-11.2,6.9-18.1,9.5-6.9,2.5-14.2,5.8-35-8.4-20.8-14.2-17.6-14.1-25.9-18.9-8.2-4.7-6.5-2.2-29.8,6.2-17.7,6.4-13.3,15.2-10.5,19,.5.7,1,1.5,1.5,2.3,3.8,6.2,4.5,10.4,4.4,13.4-.2,4.9-1.7,10.1-1.7,10.1-2.2,8.4-4.3,20-11.7,23.7-7.2,3.6-12.4,3.3-18.6,1.5-6.2-1.8-12.8-.3-15,.2-.9.2-5.3,1.3-6.5,1.6-1.8.6-3,1.9-2.2,3.6,1.7,3.6,3.8,10.8-4.3,18.9h0Z',
  regionOwl: {
    x: '975',
    y: '370',
  },
  experiences: [],
  available: false,
  regionalResources: [],
};

export const VirtualValleys: Region = {
  title: { textParts: ['Virtual', 'Valleys'], coordinates: { x: 860, y: 290 } },
  regionKey: 'virtual-valleys',
  color: '#00B16E',
  filColour: 'black',
  drawing:
    'm1090.55,319.26c1.2-.1,2,1,1.7,2.1h0c-.3,1-.7,15.2-.6,16.6.1,1.4,1,8-.3,10s-9.2,3.9-12.5,3.3c-4.1-.7-10-6.9-15.9-10-2.2-1.2-5.7-.3-7.6.2-1.9.5-10.1,7.6-13.2,9.1-3.1,1.5-7,2.6-11.6,1.9-4.6-.7-11.2-4.2-15.4-6.4-4.2-2.2-23.3-16.7-27.7-20-4.3-3.3-8.8-4.9-12.4-4.9-3.9,0-10.3,3-12.5,3.8-2.3.8-10,3.6-12.5,4.5-2.7,1-8.1,4-9.2,5-1.6,1.5-3.9,4.3-4.8,5.9-.9,1.7-1.6,5.1-.1,8.8,1.1,2.7,6.7,11.7,7.2,13.2,1,2.9,1,5.7.7,8.5-.5,3.7-4,14.6-4.6,16.1-.5,1.3-2.9,7.7-5.4,10-1.1,1-8,4.4-11.9,3.4-10.1-2.4-13.3-2-16.1-1.9-6.3.3-15.5,3.8-15.5,3.8,0,0-3.7-1.7-4.8-3-1.1-1.3-5.3-3.5-7.1-4-1.8-.5-6.8,3.7-6.8,3.7-3.6,4-9.1,3.5-9.1,3.5-2.7.1-5.2-4.6-7.5-6.1s-7-1-12.2-1.5-4.6-2.3-7.5-3.5c-2.8-1.2-7.5.1-11.1,1.2-3.6,1.1-6.2.9-9-.5-2.8-1.4-8.2-14-11.7-18s-11.1-4.4-16.8-6.5c-5.7-2.1-7.1-5.6-7.8-8.7s.9-23.6,1.7-29.7-11.2-14.5-13-16.7c-1.8-2.2-7.7-5.5-5.2-10.8s4.7-4.4,10.1-4.7c5.4-.3,3.6-5.7,5.2-8,1.5-2.3,5.7-4.8,11.8-6.8s26.5-8.3,26.5-8.3c4.4-.2,7.6,3.6,17.1,5.1,9.5,1.4,19.8-5.6,24.1-7.9,4.4-2.3,10.8-10.2,12.1-14s-.1-4.1-1.1-7.2c-1-3.2-.9-6.8-.7-7.8.1-.7,1.4-5.4,3.1-8.2,1.7-2.9,5.3-5.3,8.1-6.9s9.3-4.4,13.8-5.5,8.3-.8,13.8-1.9,4.5-1.6,8.1-4.6c3.4-2.8,6-5.4,8.3-6.5s5.5.1,10.9.7c5.4.6,9.4-.2,13.7-.9,4.3-.7,7.5-3.7,9.7-3.9,2.2-.2,3.1.2,6.2,2.3,3.1,2.1,7.1,4.4,11.3,5.2s10,1.1,15.6.8c5.6-.3,5.4-3.2,9.3-4.6,4-1.4,8.7-.3,11.5.9,2.8,1.2,5.2,4.4,8.5,9.3,3.3,4.9,11.4,18.3,12.6,21.3,1.2,3,5.9,13.9,12.4,21.4s10.9,11.9,11.3,15.7c.4,3.8-3.9,10.6-4.6,12.5-.7,1.9-7,10.7-6,21.2s15.4,15.4,21.7,15.8c4.4.3,6.4-.3,8.1-1.6,2.1-1.6,4.4-2.9,6.9-3.6,2-.6,2.8-.8,5.5-1.2,1.1-.5,2.2-.4,3.2-.5h0Z',
  regionOwl: {
    x: '890',
    y: '240',
  },
  experiences: virtualValleysExperiences,
  available: true,
  regionalResources: [
    {
      source: 'Book',
      resources: [
        {
          text: '‘Doughnut Economics’',
          link: '',
          author: 'Kate Raworth',
          description:
            'A great book to get a new model of what sustainability is, through a visual framework explaining upper - and lower - limits to development.',
        },
        {
          text: '‘To save everything, click here’',
          link: '',
          author: 'Harvard researcher’s Evgeny Morozov',
          description: 'On the risk of thinking uniquely through the prism of problems and tech solutions.',
        },
      ],
    },
    {
      source: 'Podcast',
      resources: [
        {
          text: '‘Degrowth: Slow is the New Cool’',
          link: 'https://www.youtube.com/watch?v=DHpTNtRCk5U',
          author: 'Timothée Parrique',
          description:
            'An interview with a leading expert on the economy of degrowth, and a researcher at the School of Economics and Management of Lund University in Sweden. How can this idea of ‘Degrowth: Slow is the New Cool’ apply to Kering?',
        },
        {
          text: '‘How Future Thinking Can Drive Sustainability’ from Scandinavian Mind',
          link: 'https://scandinavianmind.com/podcast/how-future-thinking-can-help-drive-sustainability-with-charlotte-sundaker',
          author: 'Scandinavian Mind',
          description:
            'A thought-provoking interview with Charlotte Sundåker, CEO and co-founder of Planethon, a future and transformation agency.',
        },
      ],
    },
    {
      source: 'Article',
      resources: [
        {
          text: '‘Expanding Digital Sufficiency’',
          link: 'https://theshiftproject.org/en/article/implementing-digital-sufficiency/',
          author: 'The Shift Project',
          description: 'A report diving into the implementation of digital sufficiency.',
        },
      ],
    },
    {
      source: 'Video',
      resources: [
        {
          text: "‘The future of fashion: Sustainable brands and ‘circular’ business models'",
          link: 'https://www.youtube.com/watch?v=pRf0X3xETCc',
          author: 'McKinsey',
          description: '',
        },
      ],
    },
  ],
};

export const CustomMap: CustomMap = [
  CreativityCoasts,
  LoyaltyLagoon,
  SeaOfSustainability,
  VirtualValleys,
  PlayfulPlains,
  TimelessTundra,
];
