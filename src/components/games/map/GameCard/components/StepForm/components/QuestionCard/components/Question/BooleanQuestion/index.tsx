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
  // const otherAnswer = checkedValue === correctAnswer && checkedValue !== choiceValue ? 'white' : 'gray';
  // const answerColor = choiceValue === correctAnswer && checkedValue === choiceValue ? color : 'white';
  let answerColor = 'white';
  if (choiceValue === checkedValue) {
    // is in current answer
    if (checkedValue === correctAnswer) {
      // is correct answer
      answerColor = color;
    } else {
      answerColor = 'gray';
    }
  } else if (choiceValue === correctAnswer) {
    answerColor = color;
  }

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
