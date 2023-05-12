import { CSSProperties } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import classNames from 'classnames';
import { getNodeText } from '@/lib';
import Loader from '../Loader';

import styles from './Button.module.scss';

// credit: https://uiverse.io/profile/satyamchaudharydev

type BaseProps = {
  /**
   * Required for accessiblity
   */
  ariaLabel?: string;
  text?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  customStyles?: CSSProperties;
  skin?: 'normal' | 'ghost';
  /**
   * For buttons that dont need styling, eg event listenser on big divs
   */
  bare?: boolean;
  variant?: 'ghost';
  children?: React.ReactNode;
};

type LinkType = BaseProps & {
  as?: 'button';

  onClick?: () => void;
  href?: undefined;
  type?: 'button' | 'reset' | 'submit';
};

type AnchorType = BaseProps & {
  as?: 'a';
  href: string;
  onClick?: undefined;
  type?: undefined;
};

type Props = LinkType | AnchorType;

const Button = ({
  as = 'button',
  text,
  href,
  onClick,
  type,
  customStyles,
  loading,
  bare,
  children,
  disabled,
  skin = 'normal',
  ariaLabel: overrideAriaLabel,
}: Props) => {
  const Component = as === 'a' ? Link : 'button';

  const { lang } = useTranslation();

  const display = text || children;
  const ariaLabel = text || getNodeText(children) || overrideAriaLabel;

  if (!ariaLabel) {
    // eslint-disable-next-line no-console
    console.warn(
      // eslint-disable-next-line max-len
      'There is no aria label deducted from children and text, add one via ariaLabel prop. Here is the component at fault:',
      children,
    );
  }
  const skins = {
    normal: styles.button,
    ghost: styles.ghost,
  };

  return (
    <Component
      disabled={loading || disabled}
      aria-label={ariaLabel}
      type={type}
      className={classNames({ [skins[skin]]: !bare, 'ignore-click': true })}
      onClick={onClick}
      href={href || '/'}
      locale={lang}
      role={as === 'a' ? 'navigation' : 'button'}
      style={customStyles}
    >
      <div className={styles.loader__container}>{loading ? <Loader /> : display}</div>
    </Component>
  );
};

export default Button;
