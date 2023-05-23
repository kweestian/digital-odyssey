import { useState } from 'react';
import { useGetPublicUrl } from '@/hooks';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useAtom } from 'jotai';

import CloseIcon from '@/image/map/picto/PICTO_CROIX.svg';
import Eye from '@/image/map/picto/PICTO_EYE.svg';

import { Button, Loader, RenderHtml } from '@/components/common';

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
};

const GamePoppinContent = ({
  onSubmit,
  experience: { interaction, key, name, description, bonus },
  fieldId,
  isUpdatingUser,
  isUploadingImage,
  onDrop,
}: Props) => {
  const { t } = useTranslation();

  const [currentInteration, setCurrentInteraction] = useAtom(interactionAtom);
  const [zoomImage, setZoomImage] = useState(false);
  const { data, isLoading: loadingImageUrl } = useGetPublicUrl(interaction.bonus);

  const [, setStepFormState] = useAtom(stepFormAtom);
  const [, setScore] = useAtom(scoreAtom);

  if (currentInteration === 'quiz' && (interaction.type === 'quiz' || interaction.type === 'boolean')) {
    return <StepForm questions={interaction.questions} experienceKey={key} interactionType={interaction.type} />;
  }

  if (bonus && currentInteration === 'bonus') {
    return (
      <>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionTitle}>BONUS !</p>
          <div className={styles.descriptionParagraph}>
            <RenderHtml htmlContent={bonus.description} customStyles={{}} />
          </div>
        </div>
        <div className={styles.answerContainer}>
          <InteractionForm
            isBonus
            fieldType="attachment"
            onChange={(files) => onDrop(files, true)}
            isLoading={isUploadingImage}
            value={interaction.bonus}
            label="Upload Screenshot"
          />
        </div>
      </>
    );
  }

  const showQuizButton = ['boolean', 'quiz'].includes(interaction.type);

  const currentImage = data?.data?.signedUrl && [data?.data?.signedUrl];

  return (
    <>
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionTitle}>
          {t('common:game-card-subtitle')} {name}!
        </p>
        <div className={styles.descriptionParagraph}>
          <RenderHtml htmlContent={description} />
        </div>
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

        {showQuizButton && (
          <Button
            skin="ghost"
            customStyles={{ marginTop: 5 }}
            text={interaction.answer ? 'ReDo Quiz' : 'Enter Quiz'}
            onClick={() => {
              setStepFormState({});
              setScore(undefined);
              setCurrentInteraction('quiz');
            }}
          />
        )}

        {bonus && (
          <div className={styles.bonusContainer}>
            <Button
              skin="ghost"
              text={interaction.bonus ? 'Completed Bonus' : 'Bonus Experience'}
              onClick={() => setCurrentInteraction('bonus')}
              customStyles={{ marginTop: 0 }}
            />
            {currentImage && currentImage.length > 0 && (
              <>
                <div className={styles.attachmentIconContainer}>
                  <Button
                    ariaLabel="on submit attachment"
                    loading={isUploadingImage || loadingImageUrl}
                    bare
                    onClick={() => {
                      if (currentImage && currentImage.length > 0) {
                        setZoomImage(true);
                      }
                    }}
                  >
                    <Image
                      src={Eye}
                      alt="On Submit Button"
                      className={styles.submitButtonImage}
                      width={40}
                      height={40}
                    />
                  </Button>
                </div>
                <div className={zoomImage ? styles.imageContainerZoomed : styles.imageContainer}>
                  {isUploadingImage || loadingImageUrl ? (
                    <Loader />
                  ) : (
                    <Button
                      ariaLabel="image zoom in"
                      bare
                      onClick={() => setZoomImage(!zoomImage)}
                      customStyles={{ width: '100%', height: '100%' }}
                    >
                      <Image
                        className={styles.closeZoomIn}
                        width={30}
                        height={30}
                        src={CloseIcon}
                        alt="Close Popup Button"
                      />
                      {currentImage
                        .filter((path) => path !== '')
                        .map((path) => (
                          <Image
                            key={path}
                            src={path}
                            alt={path}
                            width={50}
                            height={50}
                            unoptimized
                            placeholder="blur"
                            // eslint-disable-next-line max-len
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk/Q8AAQ8BBubT3LQAAAAASUVORK5CYII="
                          />
                        ))}
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default GamePoppinContent;
