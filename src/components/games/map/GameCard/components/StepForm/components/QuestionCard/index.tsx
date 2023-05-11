import { useAtom } from 'jotai';
import styles from './QuestionCard.module.scss';
import { stepFormAtom } from './atom';

type Props = {
  question: Question;
};

const QuestionCard = ({ question: { imageLink, text, title, choices, key } }: Props) => {
  const [stepFormState, setStepFormState] = useAtom(stepFormAtom);

  return (
    <div className={styles.questionCardContainer}>
      <div className={styles.imagePlaceholder}>{imageLink}</div>
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
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
