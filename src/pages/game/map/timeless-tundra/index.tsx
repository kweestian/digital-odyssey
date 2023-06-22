import { useCallback, useEffect, useState } from 'react';
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Image from 'next/image';

import { Button, GameLayout, Loader, PopupVideo } from '@/components';

import GoldenOwl from '@/image/rules/gold-owl-rules.gif';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import classNames from 'classnames';
import styles from './TimelessTundra.module.scss';

const TimelessTundraPage: NextPage = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [hasLogguedIn, setItem] = useLocalStorage('HAS_VIEWED_FINAL', false);
  const [videoPopinOpen, setVideoPopinOpen] = useState(false);

  // const [loading, setLoading] = useState(false);
  const [downloadUrl, setDowloadUrl] = useState('');
  const emailWithoutDomain = user?.email?.split('@')[0];
  const emailSplit = emailWithoutDomain?.split('.');
  const [firstName, lastName] = emailSplit || [];

  const fileName = lastName ? `${firstName}-${lastName}` : `${firstName}`;

  // const { data, isLoading } = useGetPublicUrl(
  //   firstName ? `${user?.id}/certificate/digital-odyssey-certificate_${fileName}.pdf` : undefined,
  // );

  // const { data: fileData } = useDownloadFile(
  //   `${user?.id}/certificate/digital-odyssey-certificate_${fileName}.pdf`,
  // );
  const downloadFile = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch('/api/generatePdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ record: { email: user?.email, user_id: user?.id } }),
      });
      if (result) {
        const { data: downloadLink } = await supabase.storage
          .from('kering')
          .download(`${user?.id}/certificate/digital-odyssey-certificate_${fileName}.pdf`);

        if (downloadLink) {
          const url = URL.createObjectURL(downloadLink);
          setDowloadUrl(url);
          setLoading(false);
        }
      }
    } catch (e) {
      setLoading(false);
    }
  }, [fileName, user?.id, supabase, user?.email]);

  const handleCloseVideo = useCallback(() => {
    setVideoPopinOpen(false);
    setItem(true);
  }, [setVideoPopinOpen, setItem]);

  useEffect(() => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `digital-odyssey-certificate_${fileName}.pdf`; // or any other filename you want
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [downloadUrl, fileName]);

  if (!user || !user.email) {
    return <Loader />;
  }

  const showPoppin = hasLogguedIn === false || videoPopinOpen;
  return (
    <GameLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>
            <Image
              className={classNames(styles.goldenOwl, styles.firstOwl)}
              src={GoldenOwl}
              alt="Golden owl decoration 1"
            />
            <Image
              className={classNames(styles.goldenOwl, styles.secondOwl)}
              src={GoldenOwl}
              alt="Golden owl decoration 2"
            />
            <Image
              className={classNames(styles.goldenOwl, styles.thirdOwl)}
              src={GoldenOwl}
              alt="Golden owl decoration 3"
            />
            <Image
              className={classNames(styles.goldenOwl, styles.fourthOwl)}
              src={GoldenOwl}
              alt="Golden owl decoration 4"
            />
            <Image
              className={classNames(styles.goldenOwl, styles.fifthOwl)}
              src={GoldenOwl}
              alt="Golden owl decoration 5"
            />
            <p>CONGRATULATIONS</p>
          </div>
          <p className={styles.description}>
            Congratulations, you’ve conquered this year’s Imagination Odyssey! Download your certificate and share{' '}
            <br />
            it with the Kering community on our internal network Workplace.
          </p>

          <Image
            className={styles.certificateImageBlank}
            alt="certificate"
            src="https://jtefeyxtvoloibgobpss.supabase.co/storage/v1/object/public/digital-odyssey-public/blank.png"
            width={500}
            height={1200}
          />
          <Button
            loading={loading}
            customStyles={{ textDecoration: 'underline', fontWeight: 400 }}
            bare
            className={styles.downloadButton}
            onClick={() => downloadFile()}
          >
            DOWNLOAD YOUR CERTIFICATE
          </Button>
          {showPoppin && (
            <PopupVideo videoUrl="/static/video/video_outro_serious_game.mp4" onClick={handleCloseVideo} />
          )}
        </div>
      )}
    </GameLayout>
  );
};

export default TimelessTundraPage;
