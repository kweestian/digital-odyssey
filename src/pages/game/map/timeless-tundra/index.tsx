import { useCallback, useEffect, useState } from 'react';
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Image from 'next/image';

import { Button, GameLayout, Loader } from '@/components';

import { useGetPublicUrl } from '@/hooks';

import GoldenOwl from '@/image/rules/gold-owl-rules.gif';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import classNames from 'classnames';
import styles from './TimelessTundra.module.scss';

const TimelessTundraPage: NextPage = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  // const [loading, setLoading] = useState(false);
  const [downloadUrl, setDowloadUrl] = useState('');
  const emailWithoutDomain = user?.email?.split('@')[0];
  const emailSplit = emailWithoutDomain?.split('.');
  const [firstName, lastName] = emailSplit || [];
  const { data, isLoading } = useGetPublicUrl(
    firstName ? `${user?.id}/certificate/digital-odyssey-certificate_${firstName}-${lastName}.pdf` : undefined,
  );

  // const { data: fileData } = useDownloadFile(
  //   `${user?.id}/certificate/digital-odyssey-certificate_${firstName}-${lastName}.pdf`,
  // );
  const downloadFile = useCallback(async () => {
    const { data: downloadLink } = await supabase.storage
      .from('kering')
      .download(`${user?.id}/certificate/digital-odyssey-certificate_${firstName}-${lastName}.pdf`);

    if (downloadLink) {
      const url = URL.createObjectURL(downloadLink);
      setDowloadUrl(url);
    }
  }, [firstName, lastName, user?.id, supabase]);

  useEffect(() => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `digital-odyssey-certificate_${firstName}-${lastName}.pdf`; // or any other filename you want
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [downloadUrl, firstName, lastName]);
  // const saveAsPdf = useCallback(async () => {
  //   setLoading(true);
  //   const container = document.getElementById('certificateContainer');
  //   const svgElement = document.getElementById('certificate');

  //   if (container && svgElement) {
  //     const width = 540; // Set the desired width
  //     const height = 380; // Set the desired height

  //     svgElement.setAttribute('width', width.toString());
  //     svgElement.setAttribute('height', height.toString());

  //     const options = {
  //       width,
  //       height,
  //     };

  //     // Combine the font URLs with the SVG content

  //     const pngBlob = await domtoimage.toPng(container, options);
  //     saveAs(pngBlob, `certificate-digital-odyssey-${firstName}_${lastName}.png`);

  //     svgElement.setAttribute('width', '100%');
  //     svgElement.setAttribute('height', '100%');
  //     setLoading(false);

  //     // If you prefer to save as PDF:
  //     // const pdfBlob = await domtoimage.toBlob(svgElement, { quality: 1, bgcolor: 'white' });
  //     // saveAs(pdfBlob, 'certificate.pdf');
  //   }
  // }, [firstName, lastName]);

  if (!user || !user.email) {
    return <Loader />;
  }

  const currentImage = data?.data?.signedUrl || '';

  return (
    <GameLayout>
      {isLoading ? (
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
            Congratulations, you're now part of the Digital Odyssey community of finishers. Download your <br />
            certificate and share it with the Kering community on our internal network Workplace.
          </p>
          {currentImage && (
            <>
              {/* eslint-disable-next-line max-len */}
              <Image
                alt="certificate"
                src="https://jtefeyxtvoloibgobpss.supabase.co/storage/v1/object/public/digital-odyssey-public/blank.png"
                width={300}
                height={800}
              />
              <Button bare className={styles.downloadButton} onClick={() => downloadFile()}>
                DOWNLOAD YOUR CERTIFICATE
              </Button>
            </>
          )}
        </div>
      )}
    </GameLayout>
  );
};

export default TimelessTundraPage;
