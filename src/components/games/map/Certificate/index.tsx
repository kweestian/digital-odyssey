/* eslint-disable max-len */
import { useRef, useEffect } from 'react';
import { backgroundImageString, overlay } from './base64Strings';

type Props = {
  firstName: string;
  lastName: string;
};

const Certificate = ({ firstName, lastName }: Props) => {
  const textRef = useRef<SVGTextElement>(null);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const textWidth = textRef.current?.getBBox().width || 0;
    const rectWidth = textWidth + 60; // Adjust the padding as needed

    if (rectRef.current) {
      rectRef.current.setAttribute('width', `${rectWidth}`);
      rectRef.current.setAttribute('x', `calc(50% - ${rectWidth / 2}px)`);
    }
  }, [firstName, lastName]);

  return (
    <svg
      id="certificate"
      width="100%"
      height="100%"
      viewBox="0 0 1677 1196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="1677" height="1196" fill="url(#pattern0)" />
      <rect
        ref={rectRef}
        y="259.25"
        height="108.5"
        rx="54.25"
        fill="url(#pattern1)"
        stroke="#BE85F5"
        strokeWidth="2.5"
      />
      <text
        ref={textRef}
        // className={styles.textAttribute}
        fill="white"
        xmlSpace="preserve"
        // style="white-space: pre"
        // fontFamily="Poppins"
        // fontSize="49"
        // fontWeight="275"
        // letterSpacing="0em"
        style={{
          textTransform: 'uppercase',
          fontFamily: 'Poppins',
          fontWeight: '300',
          fontSize: '49',
        }}
        textAnchor="middle" // Center the text horizontally
        dominantBaseline="middle" // Center the text vertically
        x="50%" // Position the text at the center horizontally
        y="318" // Position the text at the center vertically
      >
        {firstName} {lastName}
      </text>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1358_17" transform="scale(0.000384878 0.000539665)" />
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_1358_17" transform="matrix(0.000663514 0 0 0.00368818 -0.183352 -1.46333)" />
        </pattern>
        <image id="image0_1358_17" width="2599" height="1853" xlinkHref={backgroundImageString} />
        <image id="image1_1358_17" width="2599" height="1853" xlinkHref={overlay} />
      </defs>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,500&display=swap');
        `}
      </style>
    </svg>
  );
};

export default Certificate;
