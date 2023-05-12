import { useCallback, useState } from 'react';
import { useDropzone, DropzoneOptions, DropEvent, FileRejection } from 'react-dropzone';
import Image from 'next/image';

import { useGetPublicUrl } from '@/hooks';
import * as Check from '@/image/submit-check.svg';
import * as Eye from '@/image/eye-icon.svg';

import { Loader, Button } from '@/components/common';
import styles from './AttachmentField.module.scss';

type Props = {
  onDrop: DropzoneOptions['onDrop'];
  label: string;
  value?: string | null;
  isMutating?: boolean;
  isBonus?: boolean;
};

const AttachmentField = ({ onDrop, value, label, isMutating, isBonus }: Props) => {
  const [paths, setPaths] = useState<Array<string>>([]);
  const [zoomImage, setZoomImage] = useState(false);
  const { data, isLoading: loadingImageUrl } = useGetPublicUrl(value);

  const onDropWithFileShow: DropzoneOptions['onDrop'] = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[], event: DropEvent) => {
      setPaths(acceptedFiles.map((file) => URL.createObjectURL(file)));
      if (onDrop) {
        onDrop(acceptedFiles, rejectedFiles, event);
      }
    },
    [setPaths, onDrop],
  );
  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    onDrop: onDropWithFileShow,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const currentImage = paths.length === 0 && value && data?.data?.signedUrl ? [data?.data?.signedUrl] : paths;

  const isLoading = loadingImageUrl || isMutating;

  const text = isDragActive ? <p>+</p> : <p>{label.toUpperCase()}</p>;

  const hasAnImage = currentImage && currentImage.length > 0;

  const completedText = 'Completed Experience';

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...(!hasAnImage && getRootProps())} className={styles.attachmentContainer}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <div {...(hasAnImage && getRootProps())} className={styles.attachmentInputContainer}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input id="ignore-click" {...getInputProps()} />
          {hasAnImage ? completedText : text}
        </div>
        <Button
          ariaLabel="on submit attachment"
          loading={isLoading || isMutating}
          bare
          onClick={() => {
            if (currentImage && currentImage.length > 0) {
              setZoomImage(true);
            }
          }}
        >
          <Image
            src={currentImage && currentImage.length > 0 ? Eye : Check}
            alt="On Submit Button"
            className={styles.submitButtonImage}
            width={40}
            height={40}
          />
        </Button>
      </div>
      <div className={zoomImage ? styles.imageContainerZoomed : styles.imageContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            ariaLabel="image zoom in"
            bare
            onClick={() => setZoomImage(!zoomImage)}
            customStyles={{ width: '100%', height: '100%' }}
          >
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
  );
};

export default AttachmentField;
