import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import { useUpdateUserExperience } from '@/hooks';

import InteractionForm from '../InteractionForm';

import PopinCard from '../PopinCard';

import styles from './GameCard.module.scss';

type Props = {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
};

const GameCard = ({ experience: { name, description, icon, interaction, bonus, key }, isOpen, onClose }: Props) => {
  const [error, setError] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const fieldId = `${key}_text`;
  const user = useUser();
  const { trigger, isMutating: isUpdatingUser } = useUpdateUserExperience();
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      [fieldId: string]: { value: string };
    };
    await trigger({
      experience_key: key,
      answer: [{ key: fieldId, value: target[fieldId].value }],
      user_id: user?.id,
    });
  };

  const supabase = useSupabaseClient();

  const onDrop = useCallback(
    async (acceptedFiles: File[], isBonus?: boolean) => {
      setIsUploadingImage(true);
      setError('');
      acceptedFiles.forEach(async (file) => {
        const reader = new FileReader();

        reader.onabort = () => setError('there was an error uploading the file');
        reader.onerror = () => setError('there was an erro uploading the file');
        reader.onload = async () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result;

          const newFile = binaryStr;

          const uploadPath = isBonus ? `${user?.id}/${key}/bonus/${file.name}` : `${user?.id}/${key}/${file.name}`;

          if (newFile) {
            if (isBonus && interaction.bonus) {
              try {
                const { error: deleteError } = await supabase.storage.from('kering').remove([interaction.bonus]);
                if (deleteError) {
                  throw new Error(deleteError?.message);
                }
              } catch (e) {
                // eslint-disable-next-line no-console
                console.error(e);
              }
            }
            const { data, error: supbaBaseError } = await supabase.storage.from('kering').upload(uploadPath, newFile, {
              cacheControl: '3600',
              upsert: true,
            });

            if (supbaBaseError) {
              setError('there was an error uploading the file');
              setIsUploadingImage(false);
            }

            if (data) {
              const field = isBonus ? 'bonus' : 'attachment';

              await trigger({
                experience_key: key,
                [field]: data.path,
                user_id: user?.id,
                ...(!isBonus && { answer: [{ key, value: 'attachment' }] }),
              });

              setIsUploadingImage(false);
            }
          }
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [supabase, key, user?.id, trigger, interaction.bonus],
  );

  if (isOpen) {
    return (
      <PopinCard onClick={() => onClose()}>
        <div className={styles.cardContainer}>
          <h1>{name}</h1>
          <Image src={icon} alt={`${name} owl icon`} className={styles.owlImage} />
          <div className={styles.descriptionContainer}>
            <p>{description}</p>
          </div>
          <div className={styles.answerContainer}>
            {interaction.type === 'text' && (
              <InteractionForm
                value={interaction.answer && interaction.answer[0].value}
                fieldType={interaction.type}
                onChange={handleSubmit}
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
                label="Uplaod Image here"
              />
            )}
            {bonus && (
              <div>
                <InteractionForm
                  fieldType="attachment"
                  onChange={(files) => onDrop(files, true)}
                  isLoading={isUploadingImage}
                  value={interaction.bonus}
                  label="Bonus Experience"
                />
                {error && <p className={styles.errorText}>{error}</p>}
              </div>
            )}
          </div>
        </div>
      </PopinCard>
    );
  }

  return null;
};

export default GameCard;
