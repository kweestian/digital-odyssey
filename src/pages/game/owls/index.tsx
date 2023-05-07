import { NextPage } from 'next';
import Image from 'next/image';

import * as BasicOwl from '@/image/owls/basic-owl.svg';
import * as GoldOwl from '@/image/owls/gold-owl.svg';
import { GameLayout, OwlIcon } from '@/components';
import { useMapData } from '@/hooks';

import styles from './Owls.module.scss';

type Props = {};

const Owls: NextPage<Props> = () => {
  const { data } = useMapData();
  const timelessTundra = data.find(({ regionKey }) => regionKey === 'timelessTundra');
  return (
    <GameLayout>
      <div className={styles.container}>
        <div className={styles.owlsList}>
          {data
            .filter(({ regionKey }) => regionKey !== 'timelessTundra')
            .map(({ color, hasCompletedBonus, regionKey, regionOwl: { regionOwl } }) => (
              <Image
                key={color}
                src={hasCompletedBonus ? regionOwl : BasicOwl}
                width={219}
                height={130}
                alt={regionKey}
              />
            ))}
        </div>
        {timelessTundra?.available ? <Image src={GoldOwl} alt="Gold Owl" /> : <Image src={BasicOwl} alt="Basic Owl" />}
      </div>
    </GameLayout>
  );
};

export default Owls;
