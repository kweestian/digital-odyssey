import { useGlobalState } from '@/contexts/global';
import { useUrlParams } from '@/hooks';

type Props = {
  experiences: Experience[];
  regionKey: Region['regionKey'];
};

const ExperiencePictos = ({ experiences, regionKey }: Props) => {
  const { setItems } = useUrlParams();

  return (
    <>
      {experiences.map((experience) => (
        <image
          onClick={() =>
            setItems([
              { key: 'regionKey', value: regionKey },
              { key: 'experienceKey', value: experience.key },
            ])
          }
          key={experience.name}
          x={experience.coordinates.x}
          y={experience.coordinates.y}
          style={{ cursor: 'pointer' }}
          width="50"
          height="50"
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
