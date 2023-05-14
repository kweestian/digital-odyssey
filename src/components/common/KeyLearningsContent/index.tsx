import Image from 'next/image';
import RenderHtml from '../RenderHtml';

import styles from './KeyLearningsContent.module.scss';
import Button from '../Button';

interface Props {
  content: string;
  cardUrl: string;
  additionalRessources?: AdditionalResources[];
}

const KeyLearningsContent = ({ cardUrl, additionalRessources, content }: Props) => (
  <>
    <Image src={cardUrl} alt={content} className={styles.cardImg} width={238.59} height={421.74} />
    <div className={styles.contentContainer}>
      <h3 className={styles.keyLearningTitle}>KEY LEARNINGS : </h3>
      <RenderHtml htmlContent={content} />
      <h4 className={styles.additionalResourcesTitle}>Additional Resources :</h4>
      <div className={styles.additionalResourcesContainer}>
        {additionalRessources?.map(({ text, link }) => (
          <>
            <p key={link}>{text}</p>
            <Button external as="a" href={link} skin="ghost" text="Read" />
          </>
        ))}
      </div>
    </div>
  </>
);

export default KeyLearningsContent;
