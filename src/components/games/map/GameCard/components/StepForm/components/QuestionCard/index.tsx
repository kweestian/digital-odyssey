/* eslint-disable max-len */
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useUrlParams, useRegionData } from '@/hooks';
import styles from './QuestionCard.module.scss';
import { stepFormAtom } from './atom';

type Props = {
  question: Question;
};

const CheckCircle = ({ checked, color }: { checked: boolean; color: string }) => (
  <svg
    id="Calque_1"
    data-name="Calque 1"
    fill={checked ? color : 'white'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 76.22 76.22"
  >
    <g id="Q7l2n8.tif">
      <g>
        <path d="m0,40.35c0-1.5,0-3,0-4.5.05-.26.12-.52.16-.78.2-1.46.31-2.93.6-4.37,1.62-8.13,5.46-15.07,11.6-20.63C21.19,2.07,31.61-1.15,43.42.36c7.41.95,14.03,3.9,19.59,8.9,10.84,9.74,15.06,21.91,12.48,36.26-1.45,8.07-5.4,14.89-11.41,20.47-5.72,5.32-12.46,8.59-20.2,9.76-1.16.18-2.32.31-3.48.47h-4.51c-1-.12-2.01-.22-3.01-.37-7.49-1.11-14.15-4.07-19.83-9.09C6.13,60.65,1.92,53.03.48,43.91c-.19-1.18-.32-2.38-.48-3.56Zm69.85-2.25c0-17.52-14.13-31.67-31.65-31.71-17.54-.04-31.75,14.12-31.77,31.67-.02,17.55,14.14,31.74,31.69,31.75,17.55.01,31.73-14.16,31.74-31.71Z" />
        {checked && (
          <path d="m31.85,46.43c.25-.34.4-.61.61-.81,7.41-7.41,14.82-14.82,22.22-22.24.94-.94,1.99-1.43,3.33-1.06,2.23.61,3.1,3.27,1.65,5.08-.17.21-.36.39-.55.58-8.23,8.22-16.45,16.45-24.68,24.67-1.79,1.79-3.5,1.8-5.28.01-4.08-4.07-8.15-8.15-12.23-12.22-.92-.91-1.23-2.01-.89-3.23.34-1.24,1.21-2,2.47-2.26,1.18-.24,2.15.18,2.98,1.02,3.2,3.2,6.41,6.4,9.61,9.61.21.21.39.44.76.85Z" />
        )}
      </g>
    </g>
  </svg>
);

const QuestionCard = ({ question: { imageLink, text, title, choices, key, correctAnswer } }: Props) => {
  const [stepFormState, setStepFormState] = useAtom(stepFormAtom);

  const { getItem } = useUrlParams();
  const currentRegionKey = getItem('regionKey') as RegionKey;

  const safeRegionKey = (!Array.isArray(currentRegionKey) && currentRegionKey) || 'creativity-coast';

  const { color } = useRegionData(safeRegionKey);

  const checkedValued = stepFormState[key];

  const isCorrectAnwser = checkedValued === correctAnswer;

  return (
    <div className={styles.questionCardContainer}>
      {imageLink && (
        <Image
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
                <CheckCircle color={isCorrectAnwser ? color : 'gray'} checked={checkedValued === choiceValue} />
                <div className={styles.inputContainer}>
                  <input
                    className={styles.input}
                    name={key}
                    id={`${key}_${choiceValue}`}
                    type="radio"
                    onChange={() => {
                      setStepFormState({ ...stepFormState, [key]: choiceValue });
                    }}
                  />
                  <label htmlFor={`${key}_${choiceValue}`}>{choiceText}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Button
          skin="ghost"
          disabled={isDisabled}
          customStyles={{ width: '100%' }}
          text="Check Answer"
          onClick={() => onNext()}
        /> */}
      </div>
    </div>
  );
};

export default QuestionCard;
