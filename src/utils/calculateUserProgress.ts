import { CustomMap } from '@/data/regions';

export type UserExperience = {
  experienceKey: string | null;
  answer: unknown;
  bonus: string | null;
  attachment: string | null;
};

export type RegionProgress = {
  regionKey: string;
  isComplete: boolean;
};

export type UserProgress = {
  regionProgress: RegionProgress[];
  owlsCollected: number; // 0-6 silver owls (one per completed region)
  hasGoldenOwl: boolean; // true when all 6 regions complete
  totalOwls: number; // owlsCollected + 1 golden = max 7
  progressPercent: number;
};

const OASIS_REGION_KEY = 'learning-agility-oasis';
const REGULAR_REGIONS = CustomMap.filter(({ regionKey }) => regionKey !== OASIS_REGION_KEY);
const OASIS_REGION = CustomMap.find(({ regionKey }) => regionKey === OASIS_REGION_KEY);

// 5 regular regions x 3 answers + 1 oasis answer = 16
const REGULAR_STEPS_PER_REGION = 3;
const TOTAL_PROGRESS_STEPS = REGULAR_REGIONS.length * REGULAR_STEPS_PER_REGION + 1;

/**
 * Calculates a user's progress across all regions given their completed experiences.
 *
 * Owl logic:
 *  - 1 silver owl per completed region (max 6)
 *  - Regular regions complete = all 3 answers submitted (no bonus required)
 *  - Learning Agility Oasis complete = 1 answer submitted
 *  - 1 golden owl when all 6 regions complete (total max = 7)
 *
 * Progress logic:
 *  - Regular regions: each answer = 1 step (max 3 per region = 15)
 *  - Oasis: answer = 1 step (max 1)
 *  - Total = 16 steps
 */
export const calculateUserProgress = (userExperiences: UserExperience[]): UserProgress => {
  const regularRegionProgress: RegionProgress[] = REGULAR_REGIONS.map((region) => {
    const allExperienceKeys = region.experiences.map(({ key }) => key);
    const completedExperiences = userExperiences.filter(
      ({ experienceKey, answer }) => experienceKey && allExperienceKeys.includes(experienceKey) && answer,
    );
    const isComplete = completedExperiences.length >= allExperienceKeys.length;
    return { regionKey: region.regionKey, isComplete };
  });

  const oasisProgress: RegionProgress = (() => {
    if (!OASIS_REGION) return { regionKey: OASIS_REGION_KEY, isComplete: false };
    const allExperienceKeys = OASIS_REGION.experiences.map(({ key }) => key);
    const completedExperiences = userExperiences.filter(
      ({ experienceKey, answer }) => experienceKey && allExperienceKeys.includes(experienceKey) && answer,
    );
    const isComplete = completedExperiences.length >= 1;
    return { regionKey: OASIS_REGION_KEY, isComplete };
  })();

  const regionProgress = [...regularRegionProgress, oasisProgress];
  const owlsCollected = regionProgress.filter(({ isComplete }) => isComplete).length;
  const hasGoldenOwl = owlsCollected === 6;
  const totalOwls = owlsCollected + (hasGoldenOwl ? 1 : 0);

  const regularSteps = REGULAR_REGIONS.reduce((regionAcc, region) => {
    const allExperienceKeys = region.experiences.map(({ key }) => key);
    return (
      regionAcc +
      userExperiences.filter(
        ({ experienceKey, answer }) => experienceKey && allExperienceKeys.includes(experienceKey) && answer,
      ).length
    );
  }, 0);

  const oasisSteps = (() => {
    if (!OASIS_REGION) return 0;
    const allExperienceKeys = OASIS_REGION.experiences.map(({ key }) => key);
    return userExperiences.filter(
      ({ experienceKey, answer }) => experienceKey && allExperienceKeys.includes(experienceKey) && answer,
    ).length;
  })();

  const progressPercent = Math.round(((regularSteps + oasisSteps) / TOTAL_PROGRESS_STEPS) * 100);

  return { regionProgress, owlsCollected, hasGoldenOwl, totalOwls, progressPercent };
};
