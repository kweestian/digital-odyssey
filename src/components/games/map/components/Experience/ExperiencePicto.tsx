import ExperienceGameCard from './ExperienceGameCard';

type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => (
  <>
    {experiences.map((experience) => (
      <ExperienceGameCard key={experience.key} experience={experience} />
    ))}
  </>
);

export default Experience;
