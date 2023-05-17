import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { GameLayout } from '@/components';
import { useMapData } from '@/hooks';

import BasicOwl from '@/image/owls/3d/basic-owl.svg';
import GoldOwl from '@/image/owls/gif/gold-owl.gif';

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
            .map(({ color, hasCompletedBonus, regionKey, experiences }) => {
              const bonusExperienceKey = experiences.find(({ bonus }) => bonus)?.key;
              if (hasCompletedBonus) {
                return (
                  <Image
                    key={color}
                    src={`/static/image/owls/gif/${regionKey}.gif`}
                    width={219}
                    height={130}
                    alt={regionKey}
                    style={{ height: '130px', width: '219px' }}
                  />
                );
              }

              return (
                <Link
                  key={color}
                  href={{ pathname: '/game/map', query: { regionKey, experienceKey: bonusExperienceKey } }}
                  className={styles.normalOwlContainer}
                >
                  <Image src={BasicOwl} width={219} height={130} alt={regionKey} />
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
