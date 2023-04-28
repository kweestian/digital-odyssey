import { DefaultLayout } from '@/components/common';

import styles from './Form.module.scss';

type Props = {
  children: React.ReactNode;
  success: string;
  error: string;
  title: string;
};

const Form = ({ children, error, success, title }: Props) => (
  <DefaultLayout>
    <div className={styles.form__group}>
      <h4>{title}</h4>
      <div className={styles.message__container}>
        {error && <span className={styles.error}>{error}</span>}
        {success && <span className={styles.success}>{success}</span>}
      </div>
      {children}
    </div>
  </DefaultLayout>
);

export default Form;
