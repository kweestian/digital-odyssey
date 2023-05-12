import Image from 'next/image';
import RenderHtml from '../RenderHtml';

import styles from './KeyLearningsContent.module.scss';

interface Props {
  content: string;
  cardUrl: string;
  additionalRessources?: AdditionalResources[];
}

const KeyLearningsContent = ({ cardUrl, additionalRessources, content }: Props) => (
  <>
    <Image src={cardUrl} alt={content} className={styles.cardImg} width={238.59} height={421.74} />
    <div className={styles.contentContainer}>
      <h3>KEY LEARNINGS : </h3>
      <RenderHtml htmlContent={content} />
      <h4>Additional Resources :</h4>
      {additionalRessources?.map(({ text, link }) => (
        <p key={link}>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </p>
      ))}
    </div>
  </>
);

export default KeyLearningsContent;
