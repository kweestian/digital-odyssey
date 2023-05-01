import {} from '@/components/common';
import { useGlobalState } from '@/contexts/global';

type Props = {
  experience: Experience;
};

const ExperienceGameCard = ({ experience }: Props) => {
  const { dispatch } = useGlobalState();

  const { name, coordinates } = experience;
  return (
    <image
      onClick={() => dispatch({ type: 'SET_EXPERIENCE', payload: experience })}
      key={name}
      x={coordinates.x}
      y={coordinates.y}
      style={{ cursor: 'pointer' }}
      width="50"
      height="50"
      xlinkHref={
        experience.isCompleted ? '/static/image/owls/basic-owl.svg' : '/static/image/map/picto/PICTO_POSITION.svg'
      }
    />
  );
};

export default ExperienceGameCard;
