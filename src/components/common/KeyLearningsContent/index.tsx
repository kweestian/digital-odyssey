import { Fragment } from 'react';
// import Image from 'next/image';
import RenderHtml from '../RenderHtml';

import styles from './KeyLearningsContent.module.scss';
import Button from '../Button';

interface Props {
  content: string;
  additionalRessources?: AdditionalResources[];
  videoUrl: string;
}

const KeyLearningsContent = ({ additionalRessources, content, videoUrl }: Props) => (
  <div className={styles.keyLearningsContainer}>
    <div className={styles.videoContainer}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video muted autoPlay loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
    {/* <Image
      placeholder="blur"
      blurDataURL={blurUrl}
      src={cardUrl}
      alt={content}
      className={styles.cardImg}
      width={238.59}
      height={421.74}
    /> */}
    <div className={styles.contentContainer}>
      <h3 className={styles.keyLearningTitle}>KEY LEARNINGS </h3>
      <RenderHtml customStyles={{}} htmlContent={content} />
      <h4 className={styles.additionalResourcesTitle}>Additional Resource:</h4>
      <div className={styles.additionalResourcesContainer}>
        {additionalRessources?.map(({ text, link }) => (
          <Fragment key={text}>
            <RenderHtml customStyles={{}} htmlContent={text} />
            <Button customStyles={{ minWidth: 'fit-content' }} external as="a" href={link} skin="ghost" text="Read" />
          </Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default KeyLearningsContent;
