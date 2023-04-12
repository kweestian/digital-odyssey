import { NextPage } from 'next';
import Image from 'next/image';

import styles from './Owls.module.scss';

import * as BasicOwl from '../../../../public/static/image/owls/basic-owl.svg';
import * as BlueOwl from '../../../../public/static/image/owls/blue-owl.svg';
import * as PinkOwl from '../../../../public/static/image/owls/pink-owl.svg';
import * as GoldOwl from '../../../../public/static/image/owls/gold-owl.svg';

type Props = {};

const Owls: NextPage<Props> = () => (
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
);

export default Owls;
