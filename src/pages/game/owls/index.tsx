import { NextPage } from 'next';
import Image from 'next/image';

import * as BasicOwl from '@/image/owls/basic-owl.svg';
import * as BlueOwl from '@/image/owls/blue-owl.svg';
import * as PinkOwl from '@/image/owls/pink-owl.svg';
import * as GoldOwl from '@/image/owls/gold-owl.svg';
import { GameLayout } from '@/components';

import styles from './Owls.module.scss';

type Props = {};

const Owls: NextPage<Props> = () => (
  <GameLayout>
    <div className={styles.container}>
      <div className={styles.owlsList}>
        <Image src={BlueOwl} alt="Basic Owl" />
        <Image src={PinkOwl} alt="Basic Owl" />
        <Image src={BasicOwl} alt="Basic Owl" />
        <Image src={BasicOwl} alt="Basic Owl" />
        <Image src={BasicOwl} alt="Basic Owl" />
      </div>
      <Image src={GoldOwl} alt="Basic Owl" />
    </div>
  </GameLayout>
);

export default Owls;
