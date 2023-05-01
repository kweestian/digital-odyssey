import { CustomMap } from '@/data/regions';

import useGetUserExperience from './api/user/experience/useGetUserExperiences';

const useMapData = () => {
  const { data, isLoading } = useGetUserExperience();

  const mapDataWithApiData: typeof CustomMap = CustomMap.map((region) => {
    const completedRegionExperiences = region.experiences.map(({ key }) => key);
    const isRegionCompleted =
      data?.data?.filter(
        ({ experience_key: experienceKey }) => experienceKey && completedRegionExperiences.includes(experienceKey),
      ).length === 3;

    return {
      ...region,
      isComplete: isRegionCompleted,
      experiences: region.experiences.map(({ interaction, ...experience }) => {
        const userExperience = data?.data?.find(
          ({ experience_key: experienceKey }) => experience.key === experienceKey,
        );

        const validAnswer = userExperience?.answer as Answer[];
        return {
          ...experience,
          isCompleted: !!userExperience?.answer,
          interaction: {
            ...interaction,
            answer: validAnswer,
            attachment: userExperience?.attachment,
            bonus: userExperience?.bonus,
          },
        };
      }),
    };
  });

  const regionsCompleted = mapDataWithApiData.filter(({ isComplete }) => isComplete).length;

  const mapData =
    regionsCompleted === 5 ? mapDataWithApiData.map((region) => ({ ...region, available: true })) : mapDataWithApiData;

  return { data: mapData, isLoading };
};

export default useMapData;
