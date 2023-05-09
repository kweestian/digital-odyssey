import Background from './Background';
import Halo from './Halo';
import Rayures from './Rayures';

/* eslint-disable max-len */
const BackGroud = ({ children }: { children: React.ReactNode }) => (
  <svg id="backgroundAnchor" viewBox="0 0 1931.11 1143.41">
    <defs>
      <filter id="blur" width="1000%" height="1000%" x="-500%" y="-500%" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="10 10" radius={20} />
      </filter>
      <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
        <feOffset dx="0" dy="0" />
        <feGaussianBlur result="blur" stdDeviation="47" />
        <feFlood floodColor="#ef2a92" floodOpacity="1" />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="contour">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
    </defs>
    <Rayures />
    <Halo />
    <Background />
    {children}
  </svg>
);

export default BackGroud;
