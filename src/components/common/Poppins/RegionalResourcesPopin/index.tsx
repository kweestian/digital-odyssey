import { useRegionData } from '@/hooks';
import Image from 'next/image';
import PopinCard from '../../PopinCard';

import styles from './RegionalResourcesPopin.module.scss';

type Props = {
  regionalResources: RegionalResource[];
  onClose: () => void;
  regionKey: RegionKey;
};

const Anchor = ({ link, children }: { link: string; children: React.ReactNode }) =>
  link ? (
    <a className={styles.resourceTitle} href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <span className={styles.resourceTitle}>{children}</span>
  );

const RegionalResourcesPopin = ({ regionalResources, onClose, regionKey }: Props) => {
  const { title } = useRegionData(regionKey);

  return (
    <PopinCard onClick={() => onClose()}>
      <div className={styles.parentContainer}>
        <h1>{title} - REGIONAL RESOURCES</h1>
        <div className={styles.linksContainer}>
          {regionalResources.map(({ source, resources }) => (
            <div key={`regional_resource_${source}`} className={styles.resourceContainer}>
              <div className={styles.titleContainer}>
                <Image
                  alt={`regionalResources_${regionKey}`}
                  src={`/static/image/owls/3d/${regionKey}.svg`}
                  width={30}
                  height={30}
                />
                <h4>{source}</h4>
              </div>
              <div className={styles.resourcesContainer}>
                {resources.map(({ text, link, author, description }) => (
                  <div key={text}>
                    <div>
                      <div>
                        <Anchor link={link}>{text}</Anchor>
                        by {author}
                      </div>
                    </div>

                    <div className={styles.resourceDescriptionContainer}>{description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PopinCard>
  );
};

export default RegionalResourcesPopin;
