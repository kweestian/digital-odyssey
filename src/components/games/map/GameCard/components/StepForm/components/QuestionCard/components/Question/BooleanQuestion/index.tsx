/* eslint-disable max-len */
import { Button } from '@/components/common';

type Props = {
  isCorrectAnswer: boolean;
  color: string;
  checkedValue?: string;
  choiceValue: string;
  onChange: (value: string) => void;
  choiceText: string;
};

const QuizQuestion = ({ isCorrectAnswer, color, checkedValue, choiceValue, onChange, choiceText }: Props) => {
  const answerColor = isCorrectAnswer ? color : 'gray';
  return (
    <Button
      skin="ghost"
      onClick={() => onChange(choiceValue)}
      customStyles={{ borderColor: checkedValue === choiceValue ? answerColor : 'white' }}
    >
      {choiceText}
    </Button>
  );
};

export default QuizQuestion;
