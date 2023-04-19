import { NextPage } from 'next';

import { CreativityCoasts } from '@/data/games';
import { GameCard } from '@/components';

const Map: NextPage = () => (
  <>
    {CreativityCoasts.experiences.map((experience) => {
      const { name, description, icon, coordinates, interaction, bonus } = experience;

      return (
        <GameCard
          name={name}
          description={description}
          icon={icon}
          coordinates={coordinates}
          interaction={interaction}
          bonus={bonus}
          key={name}
        />
      );
    })}
  </>
);

export default Map;
