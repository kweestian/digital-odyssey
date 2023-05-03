import { useGlobalState } from '@/contexts/global';

type Props = {
  experiences: Experience[];
  regionKey: Region['regionKey'];
};

const ExperiencePictos = ({ experiences, regionKey }: Props) => {
  const { dispatch } = useGlobalState();

  return (
    <>
      {experiences.map((experience) => (
        <image
          onClick={() => dispatch({ type: 'SET_EXPERIENCE', payload: experience })}
          key={experience.name}
          x={experience.coordinates.x}
          y={experience.coordinates.y}
          style={{ cursor: 'pointer' }}
          width="50"
          height="50"
          xlinkHref={
            experience.isCompleted
              ? '/static/image/owls/basic-owl.svg'
              : `/static/image/map/picto/picto_position_${regionKey}.svg`
          }
        />
      ))}
    </>
  );
};

export default ExperiencePictos;
