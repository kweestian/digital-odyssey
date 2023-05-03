import { KeyboardEventHandler, UIEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { useUser } from '@supabase/auth-helpers-react';

import { Button } from '@/components/common';
import { useUpdateUserExperience } from '@/hooks';

import useWindowSize from '@/hooks/useWindowSize';
import QuestionCard from '../QuestionCard';

import styles from './StepFormCarousel.module.scss';
import { scoreAtom, stepFormAtom } from '../QuestionCard/atom';

type Props = {
  questions: Question[];
  experienceKey: string;
};

const StepFormCarousel = ({ questions, experienceKey }: Props) => {
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

  // const handleKeyDown: KeyboardEventHandler = useCallback(
  //   (e) => {
  //     switch (e.code) {
  //       case 'ArrowRight':
  //         slideTo(currentPageNumber + 1);
  //         break;
  //       case 'ArrowLeft':
  //         slideTo(currentPageNumber - 1);
  //         break;
  //       default:
  //     }
  //   },
  //   [slideTo, currentPageNumber],
  // );

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
  const [stepFormState] = useAtom(stepFormAtom);
  const [, setScore] = useAtom(scoreAtom);

  const { trigger, isMutating } = useUpdateUserExperience();
  const user = useUser();

  const submit = useCallback(async () => {
    const rightAnswers = questions.filter(({ correctAnswer, key }) => stepFormState[key] === correctAnswer);
    const answers: Answer[] = questions.map(({ key }) => ({ key, value: stepFormState[key] || '' }));
    const newScore = rightAnswers.length || 1;
    await trigger({ experience_key: experienceKey, answer: answers, user_id: user?.id });
    setScore(newScore);
  }, [stepFormState, questions, setScore, trigger, experienceKey, user?.id]);

  const currentQuestionKey = questions[currentPageNumber].key;

  const currentAnswer = stepFormState[currentQuestionKey];

  const isLastQuestion = currentPageNumber === pagesArray.length - 1;
  const isFirstQuestion = currentPageNumber === 0;

  return (
    <div className={styles.carousel}>
      <div role="button" tabIndex={0} className={styles.carouselMainContainer}>
        <div className={styles.carouselSlider}>
          <div onScroll={handleCarouselScroll} ref={carouselSlidesContainter} className={styles.carouselSlides}>
            {questions.map((item, key) => (
              <div ref={carouselSlide} className={styles.carouselSlide} key={item.key} id={`slide_${key}`}>
                <QuestionCard question={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.carouselNavigationContainer}>
        <div className={styles.buttonContainer} style={{ marginRight: 5 }}>
          <Button
            disabled={isFirstQuestion}
            customStyles={{ width: '100%' }}
            text="Previous"
            onClick={() => slideTo(currentPageNumber - 1)}
          />
        </div>
        <div className={styles.buttonContainer} style={{ marginLeft: 5 }}>
          <Button
            disabled={!currentAnswer || isMutating}
            customStyles={{ width: '100%' }}
            text={isLastQuestion ? 'Submit' : 'Next'}
            onClick={() => (isLastQuestion ? submit() : slideTo(currentPageNumber + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default StepFormCarousel;
