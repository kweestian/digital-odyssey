import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

import Button from '@/components/common/Button';
import PopinCard from '@/components/common/PopinCard';

import { CreativityCoasts } from '@/data/games';
import Image from 'next/image';

type Props = {};

const Map: NextPage<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {CreativityCoasts.games.map((game) => {
        const { title, description, icon, type } = game;

        return (
          isOpen && (
            <PopinCard onClick={() => setIsOpen(false)} key={game.title}>
              <div>
                <h1>{title}</h1>
                <Image src={icon} alt={`${title} owl icon`} />
              </div>
            </PopinCard>
          )
        );
      })}
      <Button text="dummy" type="button" onClick={() => setIsOpen(true)} />
    </>
  );
};

export default Map;
