import { CustomMap } from '@/data/regions';

import useGetUserExperience from './api/user/experience/useUserExperience';

const useMapData = () => {
  const { data: userExperienceData, isLoading } = useGetUserExperience();

  const mapDataWithApiData: CustomMap = CustomMap.map((region) => {
    const allExperiences = region.experiences.map(({ key }) => key);
    const completedExperiences =
      userExperienceData?.data?.filter(
        ({ experience_key: experienceKey, answer }) =>
          answer && experienceKey && allExperiences.includes(experienceKey),
      ) || [];
    const isRegionCompleted = completedExperiences.length === 3;

    const hasCompletedBonus = completedExperiences.some(({ bonus }) => bonus);
    return {
      ...region,
      isComplete: isRegionCompleted,
      hasCompletedBonus,
      experiences: region.experiences.map(({ interaction, ...experience }) => {
        const userExperience = userExperienceData?.data?.find(
          ({ experience_key: experienceKey }) => experience.key === experienceKey,
        );

        const validAnswer = userExperience?.answer as Answer[];
        return {
          ...experience,
          regionKey: region.regionKey,
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

  const regionFullyComplete = mapDataWithApiData.filter(
    ({ isComplete, hasCompletedBonus }) => isComplete && hasCompletedBonus,
  ).length;

  const mapData =
    regionFullyComplete === 5
      ? mapDataWithApiData.map((region) => {
          if (region.regionKey === 'timeless-tundra') {
            return { ...region, available: true, isComplete: true };
          }
          return { ...region };
        })
      : mapDataWithApiData;

  return { data: mapData, isLoading };
};

export default useMapData;
