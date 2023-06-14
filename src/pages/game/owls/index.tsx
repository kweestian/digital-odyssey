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
            .map(({ color, isComplete, regionKey }) => {
              if (isComplete) {
                return (
                  <Image
                    key={color}
                    src={`/static/image/owls/gif/${regionKey}.gif`}
                    width={219}
                    height={130}
                    alt={regionKey}
                    style={{
                      paddingBottom: 14,
                      marginLeft: 28,
                    }}
                  />
                );
              }

              return <Image key={regionKey} src={BasicOwl} width={219} height={130} alt={regionKey} />;
            })}
        </div>
        <div className={styles.bigOwl}>
          {timelessTundra?.available ? (
            <Image src={GoldOwl} alt="Gold Owl" />
          ) : (
            <Image src={BasicOwl} alt="Basic Owl" />
          )}
        </div>
        <p className={styles.textBox}>
          You win a collectible owl once you have completed the four experiences of a region including the bonuse (one
          in each region!).
          <br /> The Golden Owl will only be caught once you have completed all the experiences, including bonuses.
        </p>
      </div>
    </GameLayout>
  );
};

export default Owls;
