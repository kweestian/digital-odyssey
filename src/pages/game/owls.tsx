import { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/Owls.module.scss';

import * as BasicOwl from '../../../public/static/image/owls/basic-owl.svg';

type Props = {};

const Owls: NextPage<Props> = () => (
  <div className={styles.container}>
    <div className={styles.owlsList}>
      <Image src={BasicOwl} alt="Basic Owl" />
      <Image src={BasicOwl} alt="Basic Owl" />
      <Image src={BasicOwl} alt="Basic Owl" />
      <Image src={BasicOwl} alt="Basic Owl" />
      <Image src={BasicOwl} alt="Basic Owl" />
    </div>
    <Image src={BasicOwl} alt="Basic Owl" />
  </div>
);

export default Owls;
