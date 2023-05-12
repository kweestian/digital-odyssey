import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useAtom } from 'jotai';

import { Button, RenderHtml } from '@/components/common';
import StepForm from '../StepForm';
import InteractionForm from '../InteractionForm';

import styles from './GamePoppinContent.module.scss';
import { stepFormAtom, scoreAtom } from '../StepForm/components/QuestionCard/atom';
import { interactionAtom } from './atom';

type Props = {
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
  experience: Pick<Experience, 'bonus' | 'description' | 'name' | 'interaction' | 'key' | 'bonus'>;
  fieldId: string;
  isUpdatingUser: boolean;
  isUploadingImage: boolean;
  onDrop: (acceptedFiles: File[], isBonus?: boolean) => Promise<void>;
  error?: string;
};

const GamePoppinContent = ({
  onSubmit,
  experience: { interaction, key, name, description, bonus },
  fieldId,
  isUpdatingUser,
  isUploadingImage,
  onDrop,
  error,
}: Props) => {
  const { t } = useTranslation();

  const [currentInteration, setCurrentInteraction] = useAtom(interactionAtom);

  const [, setStepFormState] = useAtom(stepFormAtom);
  const [, setScore] = useAtom(scoreAtom);

  if (currentInteration === 'quiz' && (interaction.type === 'quiz' || interaction.type === 'boolean')) {
    return <StepForm questions={interaction.questions} experienceKey={key} />;
  }

  if (bonus && currentInteration === 'bonus') {
    return (
      <>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionTitle}>BONUS !</p>
          <RenderHtml htmlContent={bonus.description} />
        </div>
        <div className={styles.answerContainer}>
          <InteractionForm
            isBonus
            fieldType="attachment"
            onChange={(files) => onDrop(files, true)}
            isLoading={isUploadingImage}
            value={interaction.bonus}
            label="Bonus Experience"
          />
          {error && <p className={styles.errorText}>{error}</p>}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionTitle}>
          {t('common:game-card-subtitle')} {name}!
        </p>
        <RenderHtml htmlContent={description} />
      </div>
      <div className={styles.answerContainer}>
        {interaction.type === 'text' && (
          <InteractionForm
            value={interaction.answer && interaction.answer[0].value}
            fieldType={interaction.type}
            onChange={onSubmit}
            id={fieldId}
            label="Copy text here"
            isLoading={isUpdatingUser}
          />
        )}
        {interaction.type === 'attachment' && (
          <InteractionForm
            fieldType="attachment"
            onChange={(files) => onDrop(files, false)}
            isLoading={isUploadingImage}
            value={interaction.attachment}
            label="Upload Screenshot"
          />
        )}

        {interaction.type === 'boolean' ||
          (interaction.type === 'quiz' && (
            <Button
              skin="ghost"
              customStyles={{ marginTop: 20 }}
              text={interaction.answer ? 'ReDo Quiz' : 'Start Quiz'}
              onClick={() => {
                setStepFormState({});
                setScore(undefined);
                setCurrentInteraction('quiz');
              }}
            />
          ))}

        {bonus && (
          <div className={styles.bonusContainer}>
            <Button
              skin="ghost"
              text={interaction.bonus ? 'Completed Bonus' : 'Bonus Experience'}
              onClick={() => setCurrentInteraction('bonus')}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GamePoppinContent;
