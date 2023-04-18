import { NextPage } from 'next';

import { CreativityCoasts } from '@/data/games';
import { GameCard } from '@/components';

const Map: NextPage = () => (
  <>
    {CreativityCoasts.games.map((game) => {
      const { title, description, icon, type, coordinates } = game;

      return (
        <GameCard
          title={title}
          coordinates={coordinates}
          description={description}
          icon={icon}
          type={type}
          key={title}
        />
      );
    })}
  </>
);

export default Map;
