import { CustomMap } from '@/data/regions';
import { calculateUserProgress } from '@/utils/calculateUserProgress';
import useGetUserExperience from './api/user/experience/useUserExperience';

const OASIS_REGION_KEY = 'learning-agility-oasis';

/**
 * Sequential unlock order:
 * 1. Leadership Lighthouse  - always available
 * 2. Collaboration Horizon  - always available
 * 3. Efficiency Valley      - unlocks when 1 + 2 are complete
 * 4. Craft Canyon           - unlocks when 3 is complete
 * 5. Adaptability Dunes     - unlocks when 4 is complete
 * 6. Learning Agility Oasis - unlocks when all 5 others are complete
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

  // First pass: compute isComplete for all regions
  const mapDataWithApiData: CustomMap = CustomMap.map((region) => {
    const allExperienceKeys = region.experiences.map(({ key }) => key);
    const completedExperiences = allUserExperiences.filter(
      ({ experience_key: experienceKey }) => experienceKey && allExperienceKeys.includes(experienceKey),
    );

    const isRegionCompleted = completedExperiences.filter(({ answer }) => answer).length >= allExperienceKeys.length;

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

  const isComplete = (key: string) => mapDataWithApiData.find((r) => r.regionKey === key)?.isComplete ?? false;

  // Second pass: apply sequential unlock rules
  const mapData: CustomMap = mapDataWithApiData.map((region) => {
    let isAvailable = region.available;

    switch (region.regionKey) {
      case 'efficiency-valley':
        isAvailable = isComplete('leadership-lighthouse') && isComplete('collaboration-horizon');
        break;
      case 'craft-canyon':
        isAvailable = isComplete('efficiency-valley');
        break;
      case 'adaptability-dunes':
        isAvailable = isComplete('craft-canyon');
        break;
      case OASIS_REGION_KEY:
        isAvailable = owlsCollected >= 5;
        break;
      default:
        break;
    }

    return { ...region, available: isAvailable };
  });

  return { data: mapData, isLoading };
};

export default useMapData;
