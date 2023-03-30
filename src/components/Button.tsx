import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { getNodeText } from '../utils';
import Loader from './Loader';

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
  /**
   * For buttons that dont need styling, eg event listenser on big divs
   */
  bare?: boolean;
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
  className,
  loading,
  bare,
  children,
  disabled,
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

  return (
    <>
      <Component
        aria-label={ariaLabel}
        type={type}
        className={`flex justify-center ${bare ? '' : 'button'} ${className}`}
        onClick={onClick}
        href={href || '/'}
        locale={lang}
        role={as === 'a' ? 'navigation' : 'button'}
      >
        <div>{loading ? <Loader /> : display}</div>
        <div className="arrow-wrapper">
          <div className="arrow" />
        </div>
      </Component>
      <style jsx>
        {`
          .button {
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            --primary-color: var(--color-light);
            --secondary-color: var(--color-black);
            --hover-color: #111;
            --arrow-width: 10px;
            --arrow-stroke: 2px;
            box-sizing: border-box;
            border: 0;
            border-radius: 30px;
            color: var(--secondary-color);
            padding: 0.8rem 1rem;
            background: var(--primary-color);
            display: flex;
            transition: 0.2s background;
            align-items: center;
            gap: 0.6em;
            min-width: max-content;
          }

          .button:hover,
          .button:active,
          .button:focus {
            background-color: var(--color-green-army);
            color: var(--color-light);
            font-weight: bold;
          }

          .button .arrow-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .button .arrow {
            margin-top: 1px;
            width: var(--arrow-width);
            background: var(--primary-color);
            height: var(--arrow-stroke);
            position: relative;
            transition: 0.2s;
          }

          .button .arrow::before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            border: solid var(--secondary-color);
            border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
            display: inline-block;
            top: -3px;
            right: 3px;
            transition: 0.2s;
            padding: 3px;
            transform: rotate(-45deg);
          }

          .button:hover .arrow {
            background: var(--primary-color);
          }

          .button:hover .arrow:before,
          .button:active .arrow:before {
            right: 0;
            border-color: var(--primary-color);
          }
        `}
      </style>
    </>
  );
};

export default Button;
