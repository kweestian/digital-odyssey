import { useCallback } from 'react';
import Image from 'next/image';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useAtom } from 'jotai';

import { useUpdateUserExperience } from '@/hooks';
import { PopinCard } from '@/components/common';

import styles from './GameCard.module.scss';
import GamePoppinContent from './components/GamePoppinContent';
import { interactionAtom } from './components/GamePoppinContent/atom';
import { errorAtom, isUploadingImageAtom } from './context/atom';

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
  const [interactionType, setInteractionType] = useAtom(interactionAtom);
  const [, setError] = useAtom(errorAtom);
  const [isUploadingImage, setIsUploadingImage] = useAtom(isUploadingImageAtom);

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
    onClose();
  };

  const supabase = useSupabaseClient();

  const onDrop = useCallback(
    async (acceptedFiles: File[], isBonus?: boolean) => {
      setIsUploadingImage(true);
      setError('');

      acceptedFiles.forEach(async (file) => {
        const reader = new FileReader();

        reader.onabort = () => setError('there was an error uploading the file');
        reader.onerror = () => setError('there was an error uploading the file');
        reader.onload = async () => {
          const binaryStr = reader.result;
          const newFile = binaryStr;
          const sanitizedFileName = `upload_${regionKey}_${key}_${Date.now()}.${file.type.split('/').pop()}`;
          const uploadPath = isBonus
            ? `${user?.id}/${key}/bonus/${sanitizedFileName}`
            : `${user?.id}/${key}/${sanitizedFileName}`;

          if (newFile) {
            if (isBonus && interaction.bonus) {
              try {
                const { error: deleteError } = await supabase.storage.from('kering').remove([interaction.bonus]);
                if (deleteError) {
                  throw new Error(deleteError?.message);
                }
              } catch (e) {
                setIsUploadingImage(false);
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
              onClose();
            }
          }
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [supabase, key, user?.id, trigger, interaction.bonus, setError, setIsUploadingImage, regionKey, onClose],
  );

  if (isOpen) {
    return (
      <PopinCard onClick={onClose}>
        <div className={styles.cardContainer}>
          {interactionType !== 'quiz' && (
            <>
              <h1>{name.toUpperCase()}</h1>
              <Image
                src={`/static/image/owls/3d/${regionKey}.svg`}
                alt={`${name} owl icon`}
                width={210}
                height={130}
                className={styles.owlImage}
              />
            </>
          )}
          <GamePoppinContent
            onDrop={onDrop}
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
