import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useTranslation from 'next-translate/useTranslation';

import { useUpdateUserExperience } from '@/hooks';
import { PopinCard, Button } from '@/components/common';

import styles from './GameCard.module.scss';
import GamePoppinContent from './components/GamePoppinContent';

type Props = {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
};

const GameCard = ({
  experience: { name, description, interaction, bonus, key, regionKey },
  isOpen,
  onClose,
}: Props) => {
  const { t } = useTranslation();
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
          <h1>{name.toUpperCase()}</h1>
          <Image
            src={`/static/image/owls/flat/${regionKey}.svg`}
            alt={`${name} owl icon`}
            width={210}
            height={130}
            className={styles.owlImage}
          />
          <GamePoppinContent
            onDrop={onDrop}
            error={error}
            onSubmit={handleSubmit}
            fieldId={fieldId}
            isUpdatingUser={isUpdatingUser}
            isUploadingImage={isUploadingImage}
            experience={{ name, description, interaction, bonus, key }}
          />
        </div>
      </PopinCard>
    );
  }

  return null;
};

export default GameCard;
