import { useCallback, useEffect, useRef, useState } from 'react';
import { assertIsNode } from '../utils';
import Button from './Button';

export type OptionComponent<T = {}> = React.JSXElementConstructor<{
  value: string;
  label: string;
  active: boolean;
  props?: T;
}>;

export type Option<T = {}> = {
  label: string;
  value: string;
  props?: T;
  optionComponent?: OptionComponent<T>;
};

type Props<T> = {
  options: Array<Option<T>>;
  label?: React.ReactNode;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  valueAsLabel?: boolean;
  ariaLabel?: string;
};

/* UNTIL WE FIX */
// eslint-disable-next-line comma-spacing
const Dropdown = <T,>({ options, label, value, size = 'sm', valueAsLabel = false, ariaLabel }: Props<T>) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside: EventListener = useCallback((e) => {
    assertIsNode(e.target);
    if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const menuSizes = {
    sm: 'px-4 py-4 text-md',
    md: 'px-4 py-4 text-lg',
    lg: 'px-8 py-4 text-2xl text-center',
  };

  const optionSizes = {
    sm: '',
    md: '',
    lg: 'my-4',
  };

  return (
    <div ref={menuRef} className="relative">
      <Button ariaLabel={ariaLabel || value} onClick={() => setIsMenuVisible(!isMenuVisible)} bare>
        {valueAsLabel ? <div className="font-semibold text-2xl uppercase">{value}</div> : label}
      </Button>
      <div
        className={` 
        text-black  bg-white 
        text-lg
        transition-all duration-300 
        absolute top-[25px] 
        mt-3 
        shadow-xl 
        ${menuSizes[size]}
        rounded-md 
        left-1/2 -translate-x-1/2
         ${isMenuVisible ? 'translate-y-0 visible opacity-100' : '-translate-y-6 invisible opacity-0'}`}
      >
        {options.map((option) => (
          <Button
            ariaLabel={option.label}
            bare
            onClick={() => setIsMenuVisible(false)}
            className={`pl-2 ${optionSizes[size]} ${value === option.value ? 'font-semibold border-l-2' : ''}`}
            key={option.value}
          >
            {option.optionComponent ? (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <option.optionComponent
                active={value === option.value}
                label={option.label}
                value={option.value}
                props={option.props}
              />
            ) : (
              option.label
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
