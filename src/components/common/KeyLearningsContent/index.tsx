import { Fragment } from 'react';
import RenderHtml from '../RenderHtml';
import styles from './KeyLearningsContent.module.scss';
import Button from '../Button';

interface Props {
  content: string;
  additionalResources?: AdditionalResources[];
  videoUrl?: string;
}

const KeyLearningsContent = ({ additionalResources, content, videoUrl }: Props) => (
  <div className={styles.keyLearningsContainer}>
    {videoUrl && (
      <div className={styles.videoContainer}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video muted autoPlay loop>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    )}
    <div className={styles.contentContainer}>
      <h3 className={styles.keyLearningTitle}>KEY LEARNINGS</h3>
      <RenderHtml customStyles={{}} htmlContent={content} />
      {additionalResources && additionalResources.length > 0 && (
        <div>
          <h4 className={styles.additionalResourcesTitle}>Additional Resource</h4>
          <div className={styles.additionalResourcesContainer}>
            {additionalResources.map(({ text, link }) => (
              <Fragment key={text}>
                <RenderHtml customStyles={{}} htmlContent={text} />
                <Button
                  customStyles={{ minWidth: 'fit-content', minHeight: 28, width: 86, fontSize: 16 }}
                  external
                  as="a"
                  href={link}
                  skin="ghost"
                  text="Open"
                />
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default KeyLearningsContent;
