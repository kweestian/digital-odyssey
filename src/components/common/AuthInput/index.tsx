import { HTMLInputTypeAttribute, useState } from 'react';
import classNames from 'classnames';

import styles from './AuthInput.module.scss';

type Props = {
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  name: string;
  label: string;
  onChange?: (val: string) => void;
};

const AuthInput = ({ required, type = 'input', name, label, onChange }: Props) => {
  const [value, setValue] = useState('');

  return (
    <div className={classNames(styles.form__group, styles.field)}>
      <input
        value={value}
        id={name}
        type={type}
        className={styles.form__field}
        placeholder="Email"
        required={required}
        onInput={(evt) => {
          if (evt.target instanceof HTMLInputElement) {
            setValue(evt.target.value);

            if (onChange) {
              onChange(evt.target.value);
            }
          }
        }}
      />
    </div>
  );
};

export default AuthInput;
