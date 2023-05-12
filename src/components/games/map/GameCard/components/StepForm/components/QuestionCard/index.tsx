import { useAtom } from 'jotai';
import Image from 'next/image';
import { Button } from '@/components/common';
import styles from './QuestionCard.module.scss';
import { stepFormAtom } from './atom';

type Props = {
  question: Question;
  isDisabled?: boolean;
  onNext: () => void;
};

const QuestionCard = ({ question: { imageLink, text, title, choices, key }, isDisabled, onNext }: Props) => {
  const [stepFormState, setStepFormState] = useAtom(stepFormAtom);

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
          <div>{text}</div>
        </div>
        <div className={styles.choicesContainer}>
          {choices.map(({ value: choiceValue, text: choiceText }) => (
            <div className={styles.choiceContainer} key={`${key}_${choiceValue}`}>
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
          ))}
          <Button
            skin="ghost"
            disabled={isDisabled}
            customStyles={{ width: '100%' }}
            text="Check Answer"
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
