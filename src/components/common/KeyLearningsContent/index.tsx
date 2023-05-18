import Image from 'next/image';
import RenderHtml from '../RenderHtml';

import styles from './KeyLearningsContent.module.scss';
import Button from '../Button';

interface Props {
  content: string;
  cardUrl: string;
  additionalRessources?: AdditionalResources[];
  blurUrl: string;
}

const KeyLearningsContent = ({ cardUrl, additionalRessources, content, blurUrl }: Props) => (
  <div className={styles.keyLearningsContainer}>
    <Image
      placeholder="blur"
      blurDataURL={blurUrl}
      src={cardUrl}
      alt={content}
      className={styles.cardImg}
      width={238.59}
      height={421.74}
    />
    <div className={styles.contentContainer}>
      <h3 className={styles.keyLearningTitle}>KEY LEARNINGS : </h3>
      <RenderHtml customStyles={{}} htmlContent={content} />
      <h4 className={styles.additionalResourcesTitle}>Additional Resource :</h4>
      <div className={styles.additionalResourcesContainer}>
        {additionalRessources?.map(({ text, link }) => (
          <>
            <RenderHtml customStyles={{}} htmlContent={text} />
            <Button customStyles={{ minWidth: 'fit-content' }} external as="a" href={link} skin="ghost" text="Read" />
          </>
        ))}
      </div>
    </div>
  </div>
);

export default KeyLearningsContent;
