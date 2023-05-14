import { useAtom } from 'jotai';

import { Button } from '@/components/common';

import StepFormCarousel from './components/StepFormCarousel';

type Props = {
  questions: Question[];
  experienceKey: string;
  interactionType: 'boolean' | 'quiz';
};

const StepForm = ({ questions, experienceKey, interactionType }: Props) => (
  <StepFormCarousel questions={questions} experienceKey={experienceKey} interactionType={interactionType} />
);

export default StepForm;
