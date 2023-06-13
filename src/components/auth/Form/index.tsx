import classNames from 'classnames';
import Image from 'next/image';

import { DefaultLayout } from '@/components/common';

import * as KeringImaginationLab from '@/../public/static/image/kering-imagination-lab-white.png';

import styles from './Form.module.scss';

type Props = {
  children: React.ReactNode;
  success: string;
  error: string;
  title: string;
  size?: string;
};

const Form = ({ children, error, success, title, size }: Props) => (
  <DefaultLayout>
    <div
      className={classNames(styles.form__group, {
        [styles.medium]: size === 'medium',
      })}
    >
      <Image className={styles.logoImage} src={KeringImaginationLab} alt="Kering Imagination Lab Logo" />
      <h4>{title.toUpperCase()}</h4>
      <div className={styles.message__container}>
        {error && <span className={styles.error}>{error}</span>}
        {success && <span className={styles.success}>{success}</span>}
      </div>
      {children}
    </div>
  </DefaultLayout>
);

export default Form;
