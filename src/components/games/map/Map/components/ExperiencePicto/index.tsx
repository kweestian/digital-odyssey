import { useUrlParams } from '@/hooks';

import styles from './ExperiencePicto.module.scss';

type Props = {
  experiences: Experience[];
  regionKey: Region['regionKey'];
};

const ExperiencePictos = ({ experiences, regionKey }: Props) => {
  const { setUrlParams } = useUrlParams();

  return (
    <>
      {experiences.map((experience) => (
        <image
          className={experience.isCompleted ? styles.completedExperiencePicto : styles.experiencePicto}
          onClick={() => {
            setUrlParams({ experienceKey: experience.key, regionKey });
          }}
          key={experience.name}
          x={experience.isCompleted ? experience.coordinates.x - 5 : experience.coordinates.x}
          y={experience.isCompleted ? experience.coordinates.y - 5 : experience.coordinates.y}
          // style={{ cursor: 'pointer' }}
          // width={experience.isCompleted ? '75' : '50'}
          // height={experience.isCompleted ? '75' : '50'}
          xlinkHref={
            experience.isCompleted
              ? `/static/image/owls/3d/${regionKey}.svg`
              : `/static/image/map/picto/picto_position_${regionKey}.svg`
          }
        />
      ))}
    </>
  );
};

export default ExperiencePictos;
