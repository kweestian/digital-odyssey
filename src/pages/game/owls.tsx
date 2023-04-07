import { NextPage } from 'next';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import styles from '../../styles/Owls.module.scss';

import * as GreyOwl from '../../../public/static/image/owls/grey-owl.svg';

type Props = {};

const Owls: NextPage<Props> = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <div className={styles.owlsList}>
        <Image src={GreyOwl} alt="Grey Owl" />
        <Image src={GreyOwl} alt="Grey Owl" />
        <Image src={GreyOwl} alt="Grey Owl" />
        <Image src={GreyOwl} alt="Grey Owl" />
        <Image src={GreyOwl} alt="Grey Owl" />
      </div>
      <Image src={GreyOwl} alt="Grey Owl" />
    </div>
  );
};

export default Owls;
