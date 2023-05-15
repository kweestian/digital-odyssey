import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { GameLayout } from '@/components';
import { useMapData } from '@/hooks';

import BasicOwl from '@/image/owls/3d/basic-owl.svg';
import GoldOwl from '@/image/owls/3d/gold-owl.svg';

import styles from './Owls.module.scss';

type Props = {};

const Owls: NextPage<Props> = () => {
  const { data } = useMapData();
  const timelessTundra = data.find(({ regionKey }) => regionKey === 'timeless-tundra');

  return (
    <GameLayout>
      <div className={styles.container}>
        <div className={styles.owlsList}>
          {data
            .filter(({ regionKey }) => regionKey !== 'timeless-tundra')
            .map(({ color, hasCompletedBonus, regionKey, isComplete, experiences }) => {
              const bonusExperienceKey = experiences.find(({ bonus }) => bonus)?.key;
              if (isComplete) {
                <Image
                  key={color}
                  src={`/static/image/owls/gif/${regionKey}.gif`}
                  width={219}
                  height={130}
                  alt={regionKey}
                />;
              }

              return (
                <Link
                  key={color}
                  href={{ pathname: '/game/map', query: { regionKey, experienceKey: bonusExperienceKey } }}
                >
                  <Image
                    src={hasCompletedBonus ? `/static/image/owls/gif/${regionKey}.gif` : BasicOwl}
                    width={219}
                    height={130}
                    alt={regionKey}
                    style={{ height: '130px', width: '219px' }}
                  />
                </Link>
              );
            })}
        </div>
        {timelessTundra?.available ? <Image src={GoldOwl} alt="Gold Owl" /> : <Image src={BasicOwl} alt="Basic Owl" />}
      </div>
    </GameLayout>
  );
};

export default Owls;
