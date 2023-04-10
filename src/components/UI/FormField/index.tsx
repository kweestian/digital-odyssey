import { FormEventHandler, useCallback, useState } from 'react';

type Props = {
  required?: boolean;
  type: 'textarea' | 'text';
  name: string;
  label: string;
  width?: string;
};

const FormField = ({ required, type, name, label, width: overrideWidth }: Props) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const Component = type === 'text' ? 'input' : 'textarea';
  const isActiveClass = value || focused ? 'form-field--is-active' : '';

  const handleOnInput: FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (e) => {
      setValue(e.currentTarget.value);
    },
    [setValue],
  );

  const width = overrideWidth ?? 'full';

  return (
    <>
      <div className={`relative text-black w-${width}`}>
        <div className={`form-field ${isActiveClass}`}>
          <div className="form-field__control">
            <label htmlFor={name} className="form-field__label">
              {label} {required && '*'}
            </label>
            <Component
              autoComplete={name}
              required={required}
              id={name}
              type="text"
              className="form-field__input"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onInput={handleOnInput}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .form-field {
            display: block;
            margin-bottom: 16px;
            padding: 20px 0;
          }
          .form-field--is-active .form-field__control::after {
            border-bottom: 2px solid var(--color-green-army);
            transform: scaleX(150);
          }
          .form-field--is-active .form-field__label {
            color: var(--color-green-army);
            font-size: 1.1rem;
            font-weight: bold;
            transform: translateY(-25px);
          }
          .form-field__label {
            display: block;
            font-size: 1.1rem;
            font-weight: normal;
            left: 0;
            margin: 0;
            padding-top: 25px;
            position: absolute;
            top: 0;
            transition: all 0.2s;
            width: 100%;
            cursor: text;
          }
          .form-field__control {
            background: transparent;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          .form-field__control::after {
            border-bottom: 2px solid var(--color-green-army);
            bottom: 0;
            content: '';
            display: block;
            left: 0;
            margin: 0 auto;
            position: absolute;
            right: 0;
            transform: scaleX(0);
            transition: all 0.2s;
            width: 1%;
          }
          .form-field__input {
            appearance: none;
            background: transparent;
            border: 0;
            border-bottom: 1px solid #999;
            color: #333;
            display: block;
            font-size: 1.1rem;
            margin-top: 24px;
            outline: 0;
            padding: 4px 0;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default FormField;
