/* eslint-disable max-len */
import { Button } from '@/components/common';

type Props = {
  color: string;
  checkedValue?: string;
  choiceValue: string;
  onChange: (value: string) => void;
  choiceText: string;
  correctAnswer?: string;
};

const QuizQuestion = ({ color, checkedValue, choiceValue, onChange, choiceText, correctAnswer }: Props) => {
  const hasAnwsered = checkedValue;
  const answerColor = checkedValue && choiceValue === correctAnswer ? color : 'gray';

  return (
    <Button
      skin="ghost"
      onClick={() => onChange(choiceValue)}
      customStyles={{ borderColor: hasAnwsered ? answerColor : 'white' }}
    >
      {choiceText}
    </Button>
  );
};

export default QuizQuestion;
