import Image from 'next/image';

import Check from '@/image/submit-check.svg';
import Loader from '@/components/common/Loader';

import styles from './InputField.module.scss';

type Props = { label: string; id: string; value?: string | null; isLoading: boolean };

const InputField = ({ label, id, value, isLoading }: Props) => (
  <div className={styles.inputContainer}>
    <input placeholder={label} id={id} defaultValue={value || ''} />
    {isLoading ? (
      <div className={styles.loadingContainer}>
        <Loader />
      </div>
    ) : (
      <button type="submit">
        <Image src={Check} alt="On Submit Button" className={styles.submitButtonImage} />
      </button>
    )}
  </div>
);

export default InputField;
