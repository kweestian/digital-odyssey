import { useAtom } from 'jotai';

import { Button } from '@/components/common';

import StepFormCarousel from './components/StepFormCarousel';
import { scoreAtom, stepFormAtom } from './components/QuestionCard/atom';

type Props = {
  questions: Question[];
  experienceKey: string;
};

const StepForm = ({ questions, experienceKey }: Props) => {
  const [score, setScore] = useAtom(scoreAtom);
  const [, setStepFormState] = useAtom(stepFormAtom);
  if (score) {
    return (
      <>
        Your score was {score} / {questions.length}
        <Button
          text="Play Again ?"
          onClick={() => {
            setStepFormState({});
            setScore(undefined);
          }}
        />
      </>
    );
  }
  return <StepFormCarousel questions={questions} experienceKey={experienceKey} />;
};

export default StepForm;
