import { NextPage } from 'next';
import Image from 'next/image';

import { GameLayout } from '@/components';
import { useMapData } from '@/hooks';

import * as BasicOwl from '@/image/owls/3d/basic-owl.svg';
import * as GoldOwl from '@/image/owls/3d/gold-owl.svg';

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
            .map(({ color, hasCompletedBonus, regionKey, isComplete }) => {
              const test = 'test';
              return isComplete ? (
                <Image
                  key={color}
                  src={`/static/image/owls/gif/${regionKey}.gif`}
                  width={219}
                  height={130}
                  alt={regionKey}
                />
              ) : (
                <Image
                  key={color}
                  src={hasCompletedBonus ? `/static/image/owls/3d/${regionKey}.svg` : BasicOwl}
                  width={219}
                  height={130}
                  alt={regionKey}
                />
              );
            })}
        </div>
        {timelessTundra?.available ? <Image src={GoldOwl} alt="Gold Owl" /> : <Image src={BasicOwl} alt="Basic Owl" />}
      </div>
    </GameLayout>
  );
};

export default Owls;
