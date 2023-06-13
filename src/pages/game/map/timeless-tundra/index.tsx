/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Image from 'next/image';

import { Button, GameLayout, Loader } from '@/components';

import { useGetPublicUrl } from '@/hooks';

import GoldenOwl from '@/image/rules/gold-owl-rules.gif';
import { useUser } from '@supabase/auth-helpers-react';

import classNames from 'classnames';
import styles from './TimelessTundra.module.scss';

const TimelessTundraPage: NextPage = () => {
  const user = useUser();
  // const [loading, setLoading] = useState(false);

  const emailWithoutDomain = user?.email?.split('@')[0];
  const emailSplit = emailWithoutDomain?.split('.');
  const [firstName, lastName] = emailSplit || [];
  console.log(firstName);
  const { data, isLoading } = useGetPublicUrl(
    firstName ? `${user?.id}/certificate/digital-odyssey-certificate_${firstName}-${lastName}.pdf` : undefined,
  );
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
              <iframe title="test" src={currentImage} />
              <Button bare className={styles.downloadButton} onClick={() => ''}>
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
