import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import DescriptiveCard from '../../components/DescriptiveCard';

import * as GoldOwl from '../../../public/static/image/owls/gold-owl.svg';

import styles from '../../styles/Rules.module.scss';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation('common');
  const title = t('menuTitles.rules');

  return (
    <div className={styles.container}>
      <DescriptiveCard isSmall title="Introduction" description="Blablablablabla" icon={GoldOwl} />
      <DescriptiveCard isSmall title="Introduction" description="Blablablablabla" icon={GoldOwl} />
      <DescriptiveCard isSmall title="Introduction" description="Blablablablabla" icon={GoldOwl} />
      <DescriptiveCard isSmall title="Introduction" description="Blablablablabla" icon={GoldOwl} />
      <div />
    </div>
  );
};

export default Rules;
