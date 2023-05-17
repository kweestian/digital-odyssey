import { UIEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { useUser } from '@supabase/auth-helpers-react';

import { Button } from '@/components/common';
import { useUpdateUserExperience } from '@/hooks';

import useWindowSize from '@/hooks/useWindowSize';
import QuestionCard from '../QuestionCard';

import styles from './StepFormCarousel.module.scss';
import { stepFormAtom } from '../QuestionCard/atom';
import { interactionAtom } from '../../../GamePoppinContent/atom';

type Props = {
  questions: Question[];
  experienceKey: string;
  interactionType: 'quiz' | 'boolean';
};

const StepFormCarousel = ({ questions, experienceKey, interactionType }: Props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(1);
  // const [currentDirection, setCurrentDirection] = useState('left');
  const carouselSlidesContainter = useRef<HTMLDivElement>(null);
  const carouselSlide = useRef<HTMLDivElement>(null);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (carouselSlidesContainter.current?.clientWidth && carouselSlide.current?.clientWidth) {
      const numberOfquestionsInView = Math.round(
        carouselSlidesContainter.current.offsetWidth / carouselSlide.current.offsetWidth,
      );
      setNumberOfPages(Math.ceil(questions.length / numberOfquestionsInView));
    }
  }, [questions.length, carouselSlidesContainter, width, height]);

  const slideTo = useCallback(
    (newIndex: number) => {
      if (newIndex >= 0 && newIndex < questions.length && carouselSlidesContainter.current && carouselSlide.current) {
        const displacement = carouselSlidesContainter.current.clientWidth * newIndex;
        carouselSlidesContainter.current.scrollTo({ left: displacement, behavior: 'smooth' });
      }
    },
    [questions.length, carouselSlidesContainter],
  );

  const pagesArray = Array.from(Array(numberOfPages).keys());

  const handleCarouselScroll = useCallback(
    (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
      if (e.target instanceof HTMLDivElement) {
        const totalquestions = numberOfPages;
        const fractions = 100 / totalquestions;
        const currentFraction = (e.target.scrollLeft / e.target.scrollWidth) * 100;
        setCurrentPageNumber(Math.round(currentFraction / fractions));
      }
    },
    [setCurrentPageNumber, numberOfPages],
  );
  const [stepFormState, setStepFormState] = useAtom(stepFormAtom);
  const [, setInteractionType] = useAtom(interactionAtom);

  const { trigger, isMutating } = useUpdateUserExperience();
  const user = useUser();

  const submit = useCallback(async () => {
    const answers: Answer[] = questions.map(({ key }) => ({ key, value: stepFormState[key] || '' }));
    await trigger({ experience_key: experienceKey, answer: answers, user_id: user?.id });
    setInteractionType('keyLearning');
  }, [stepFormState, questions, trigger, experienceKey, user?.id, setInteractionType]);

  const currentQuestion = questions[currentPageNumber];

  const currentQuestionKey = currentQuestion.key;

  const currentAnswer = stepFormState[currentQuestionKey];

  const isLastQuestion = currentPageNumber === pagesArray.length - 1;

  const isImageQuiz = currentQuestion.imageLink;

  return (
    <div className={styles.carousel}>
      <div role="button" tabIndex={0} className={styles.carouselMainContainer}>
        <div className={styles.carouselSlider}>
          <div onScroll={handleCarouselScroll} ref={carouselSlidesContainter} className={styles.carouselSlides}>
            {questions.map((item, key) => (
              <div ref={carouselSlide} className={styles.carouselSlide} key={item.key} id={`slide_${key}`}>
                <QuestionCard
                  question={item}
                  interactionType={interactionType}
                  slide={() => (isLastQuestion ? submit() : slideTo(currentPageNumber + 1))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {interactionType === 'quiz' && (
        <div className={styles.carouselNavigationContainer} style={{ justifyContent: !isImageQuiz ? 'center' : '' }}>
          {isImageQuiz && <div className={styles.column} />}
          <div className={styles.buttonContainer}>
            <Button
              skin="ghost"
              disabled={!currentAnswer || isMutating}
              customStyles={{ width: '80%', minWidth: 150, margin: 'auto' }}
              text="Check Answer"
              onClick={() => {
                setStepFormState({
                  ...stepFormState,
                  [`${currentQuestion.key}_answer`]: currentQuestion.correctAnswer,
                });
                setTimeout(() => {
                  if (isLastQuestion) {
                    submit();
                  } else {
                    slideTo(currentPageNumber + 1);
                  }
                }, 500);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StepFormCarousel;
