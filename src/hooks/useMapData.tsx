import { CustomMap } from '@/data/regions';
import { calculateUserProgress } from '@/utils/calculateUserProgress';
import useGetUserExperience from './api/user/experience/useUserExperience';

const OASIS_REGION_KEY = 'learning-agility-oasis';

/**
 * Used by:
 *  - ProgressBar (via GameLayout) -> progressPercent for current user
 *  - Owls page -> owls collected + isComplete per region for current user
 *  - Map page -> region availability + experience completion state
 *
 * Learning Agility Oasis unlocks when all 5 other regions are complete
 * (owlsCollected >= 5). Once unlocked, its completion is determined by
 * the player submitting its single challenge answer.
 */
const useMapData = () => {
  const { data: userExperienceData, isLoading } = useGetUserExperience();
  const allUserExperiences = userExperienceData?.data || [];

  const { owlsCollected } = calculateUserProgress(
    allUserExperiences.map(({ experience_key: experienceKey, answer, bonus, attachment }) => ({
      experienceKey,
      answer,
      bonus,
      attachment,
    })),
  );

  const oasisUnlocked = owlsCollected >= 5;

  const mapDataWithApiData: CustomMap = CustomMap.map((region) => {
    const allExperienceKeys = region.experiences.map(({ key }) => key);
    const completedExperiences = allUserExperiences.filter(
      ({ experience_key: experienceKey }) => experienceKey && allExperienceKeys.includes(experienceKey),
    );

    const isRegionCompleted =
      region.regionKey === OASIS_REGION_KEY
        ? completedExperiences.filter(({ answer }) => answer).length >= 1
        : completedExperiences.filter(({ answer }) => answer).length >= allExperienceKeys.length;

    return {
      ...region,
      isComplete: isRegionCompleted,
      experiences: region.experiences.map(({ interaction, ...experience }) => {
        const userExperience = allUserExperiences.find(
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

  const mapData = oasisUnlocked
    ? mapDataWithApiData.map((region) => {
        if (region.regionKey === OASIS_REGION_KEY) {
          return { ...region, available: true };
        }
        return { ...region };
      })
    : mapDataWithApiData;

  return { data: mapData, isLoading };
};

export default useMapData;
