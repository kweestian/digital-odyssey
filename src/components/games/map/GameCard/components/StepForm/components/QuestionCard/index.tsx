/* eslint-disable max-len */
import { useAtom } from 'jotai';
import Image from 'next/image';

import { blurUrls } from '@/data/cards';
import { useUrlParams, useRegionData } from '@/hooks';

import styles from './QuestionCard.module.scss';
import { stepFormAtom } from './atom';
import { Question } from './components';

type Props = {
  question: Question;
  interactionType: 'quiz' | 'boolean';
  slide: () => void;
};

const QuestionCard = ({
  question: { imageLink, text, title, choices, key, correctAnswer },
  interactionType,
  slide,
}: Props) => {
  const [stepFormState, setStepFormState] = useAtom(stepFormAtom);

  const { getUrlParam } = useUrlParams();
  const currentRegionKey = getUrlParam('regionKey') as RegionKey;

  const { color } = useRegionData(currentRegionKey);
  const blurUrl = blurUrls[currentRegionKey];

  const checkedValued = stepFormState[key];

  const isCorrectAnwser = checkedValued === correctAnswer;

  return (
    <div className={styles.questionCardContainer} style={{ justifyContent: imageLink ? 'space-between' : 'center' }}>
      {imageLink && (
        <Image
          placeholder="blur"
          blurDataURL={blurUrl}
          className={styles.questionImage}
          alt="imageLink"
          width={200}
          height={355}
          src={`/static/image/map/quiz/${imageLink}`}
        />
      )}
      <div className={styles.questionContainer}>
        <div>
          <h3>{title}</h3>
        </div>
        <div className={styles.questionContent}>
          <div>{text}</div>
          <div>
            {choices.map(({ value: choiceValue, text: choiceText }) => (
              <div className={styles.choiceContainer} key={`${key}_${choiceValue}`}>
                <Question
                  choiceText={choiceText}
                  choiceValue={choiceValue}
                  color={color}
                  interactionType={interactionType}
                  isCorrectAnswer={isCorrectAnwser}
                  questionKey={key}
                  checkedValue={checkedValued}
                  onChange={(newValue) => {
                    if (interactionType === 'boolean' && newValue === correctAnswer) {
                      setTimeout(() => {
                        slide();
                      }, 500);
                    }
                    setStepFormState({ ...stepFormState, [key]: newValue });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
