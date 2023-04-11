import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { Header } from '../UI';
import Navbar from '../Navbar';
import MainScreen from '../MainScreen';
import ProgressBar from '../ProgressBar';
import PopupVideo from '../PopupVideo';

import useLocalStorage from '../../hooks/useLocalStorage';

import styles from './MainLayout.module.scss';

import * as RulesIcon from '../../../public/static/image/navbar/rules-icon.svg';
import * as MapIcon from '../../../public/static/image/navbar/map-icon.svg';
import * as CardIcon from '../../../public/static/image/navbar/card-icon.svg';
import * as OwlIcon from '../../../public/static/image/navbar/owl-icon.svg';
import * as CloseIcon from '../../../public/static/image/CloseIcon.svg';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { getItem, setItem } = useLocalStorage();
  const [isOpen, setIsOpen] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const { asPath } = useRouter();
  const { t } = useTranslation('common');

  const menuItems = [
    { title: t('menuTitles.rules'), href: '/game/rules', icon: RulesIcon },
    { title: t('menuTitles.map'), href: '/game/map', icon: MapIcon },
    { title: t('menuTitles.cards'), href: '/game/cards', icon: CardIcon },
    { title: t('menuTitles.owls'), href: '/game/owls', icon: OwlIcon },
  ];

  const title = menuItems.find((menuItem) => menuItem.href === asPath)?.title || 'Lost';

  const videoUrl = 'https://www.youtube.com/embed/Y82uQpMUCCc';

  useEffect(() => {
    if (getItem('HAS_LOGGED_IN') === 'true') {
      setIsFirstVisit(false);
    }
  }, [getItem]);

  const handleClick = () => {
    setIsOpen(false);
    setItem('HAS_LOGGED_IN', 'true');
  };

  return (
    <>
      <Header />
      {isOpen && isFirstVisit && <PopupVideo videoUrl={videoUrl} onClick={handleClick} closeIcon={CloseIcon} />}
      <main className={styles.mobileContainer}>
        <p>Page only accessible on desktop !</p>
      </main>
      <main className={styles.container}>
        <Navbar menuItems={menuItems} />
        <MainScreen title={title}>{children}</MainScreen>
        <ProgressBar percentage={0.2} />
      </main>
    </>
  );
};

export default Layout;
