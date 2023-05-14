import Image from 'next/image';
import PopinCard from '../../PopinCard';

import styles from './AdditionalResourcesPopin.module.scss';

type Props = {
  additionalResources: AdditionalResources[];
  onClose: () => void;
  title?: string;
  regionKey: RegionKey;
};

const AdditionalInfoPopin = ({ additionalResources, onClose, title, regionKey }: Props) => (
  <PopinCard onClick={() => onClose()}>
    <div className={styles.parentContainer}>
      <h1>{title}</h1>
      <div className={styles.linksContainer}>
        {additionalResources.map(({ text, link }) => (
          <div key={`regional_resource_${regionKey}`} className={styles.resourceContainer}>
            <Image
              alt={`regionalresources_${regionKey}`}
              src={`/static/image/owls/3d/${regionKey}.svg`}
              width={30}
              height={30}
            />
            <a target="_blank" rel="noreferrer" key={text} href={link}>
              {text}
            </a>
          </div>
        ))}
      </div>
    </div>
  </PopinCard>
);

export default AdditionalInfoPopin;
