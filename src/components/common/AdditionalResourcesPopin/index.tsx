import PopinCard from '../PopinCard';

import styles from './AdditionalResourcesPopin.module.scss';

type Props = {
  additionalResources: AdditionalResources[];
  onClose: () => void;
  title?: string;
  description?: string;
};

const AdditionalInfoPopin = ({ additionalResources, onClose, title, description }: Props) => (
  <PopinCard onClick={() => onClose()}>
    <div className={styles.parentContainer}>
      <h1>{title}</h1>
      <div className={styles.descriptionContainer}>{description}</div>
      <div className={styles.linksContainer}>
        {additionalResources.map(({ text, link }) => (
          <a key={text} href={link}>
            {text}
          </a>
        ))}
      </div>
    </div>
  </PopinCard>
);

export default AdditionalInfoPopin;
