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
  const isCurrentAnswer = checkedValue === choiceValue;
  const answerColor = checkedValue === correctAnswer ? color : 'gray';

  console.log(checkedValue, choiceValue, choiceText, correctAnswer);

  return (
    <Button
      skin="ghost"
      onClick={() => onChange(choiceValue)}
      customStyles={{ borderColor: isCurrentAnswer ? answerColor : 'white' }}
    >
      {choiceText}
    </Button>
  );
};

export default QuizQuestion;
