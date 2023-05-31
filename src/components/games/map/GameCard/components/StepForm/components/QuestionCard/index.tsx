/* eslint-disable max-len */
import { useAtom } from 'jotai';
import Image from 'next/image';

import { blurUrls } from '@/data/cards';
import { useUrlParams, useRegionData } from '@/hooks';
import { RenderHtml } from '@/components/common';

import styles from './QuestionCard.module.scss';
import { stepFormAtom } from './atom';
import { Question } from './components';

type Props = {
  question: Question;
  interactionType: 'quiz' | 'boolean';
  slide: () => void;
  isCurrentSlide: boolean;
  experienceKey: string;
};

const QuestionCard = ({
  question: { imageLink, text, title, choices, key, correctAnswer },
  interactionType,
  slide,
  isCurrentSlide,
  experienceKey,
}: Props) => {
  const [stepFormState, setStepFormState] = useAtom(stepFormAtom);

  const { getUrlParam } = useUrlParams();
  const currentRegionKey = getUrlParam('regionKey') as RegionKey;

  const { color } = useRegionData(currentRegionKey);
  const blurUrl = blurUrls[currentRegionKey];

  const checkedValued = stepFormState[key];

  const isCorrectAnwser = checkedValued === correctAnswer;

  const isVideo = imageLink?.endsWith('.mp4');

  return (
    <div className={styles.questionCardContainer} style={{ justifyContent: imageLink ? 'space-between' : 'center' }}>
      {imageLink && (
        <div className={styles.questionImageContainer}>
          {isVideo && isCurrentSlide ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video muted autoPlay loop>
              <source src={`/static/video/${imageLink}`} type="video/mp4" />
            </video>
          ) : (
            <Image
              placeholder="blur"
              blurDataURL={blurUrl}
              className={styles.questionImage}
              alt="imageLink"
              width={200}
              height={355}
              src={`/static/image/map/quiz/${imageLink}`}
              style={
                experienceKey === 'the-future-of-product-traceability'
                  ? { backgroundImage: 'none !important', width: 'auto', height: '100%' }
                  : {}
              }
            />
          )}
        </div>
      )}
      <div
        className={styles.questionContainer}
        style={interactionType === 'boolean' ? { justifyContent: 'center', marginTop: 0 } : {}}
      >
        <div>{title && <h3>{title}:</h3>}</div>
        <div className={styles.questionContent} style={interactionType === 'boolean' ? { marginTop: 0 } : {}}>
          {text && (
            <div>
              <RenderHtml customStyles={{}} htmlContent={text} />
            </div>
          )}
          <div className={styles.choicesContainer}>
            {choices.map(({ value: choiceValue, text: choiceText }) => (
              <div className={styles.choiceContainer} key={`${key}_${choiceValue}`}>
                <Question
                  choiceText={choiceText}
                  choiceValue={choiceValue}
                  color={color}
                  correctAnswer={correctAnswer}
                  interactionType={interactionType}
                  isCorrectAnswer={isCorrectAnwser}
                  questionKey={key}
                  checkedValue={checkedValued}
                  onChange={(newValue) => {
                    setStepFormState({ ...stepFormState, [key]: newValue });
                    if (interactionType === 'boolean' && newValue === correctAnswer) {
                      setTimeout(() => {
                        slide();
                      }, 500);
                    }
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
