import BooleanQuestion from './BooleanQuestion';
import QuizQuestion from './QuizQuestion';

type Props = {
  isCorrectAnswer: boolean;
  color: string;
  checkedValue: string | undefined;
  choiceValue: string;
  onChange: (value: string) => void;
  choiceText: string;
  questionKey: string;
  interactionType: 'boolean' | 'quiz';
};

const Question = ({ interactionType, questionKey, ...passProps }: Props) => {
  if (interactionType === 'boolean') {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <BooleanQuestion {...passProps} />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <QuizQuestion questionKey={questionKey} {...passProps} />;
};

export default Question;
