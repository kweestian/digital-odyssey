import {} from '@/components/common';
import { useExperience } from '@/contexts/experiences';

type Props = {
  experience: Experience;
};

const ExperienceGameCard = ({ experience }: Props) => {
  const { dispatch } = useExperience();

  const { name, coordinates } = experience;
  return (
    <image
      onClick={() => dispatch({ type: 'SET_EXPERIENCE', payload: experience })}
      key={name}
      x={coordinates.x}
      y={coordinates.x}
      width="50"
      height="50"
      xlinkHref="/static/image/map/picto/PICTO_POSITION.svg"
    />
  );
};

export default ExperienceGameCard;
