import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import * as RulesIcon from '@/image/navbar/rules-icon.svg';
import * as MapIcon from '@/image/navbar/map-icon.svg';
import * as CardIcon from '@/image/navbar/card-icon.svg';
import * as OwlIcon from '@/image/navbar/owl-icon.svg';
import * as CloseIcon from '@/image/CloseIcon.svg';

import useLocalStorage from '@/hooks/useLocalStorage';

import Header from '../Header';
import Navbar from '../Navbar/Navbar';
import MainScreen from '../MainScreen/MainScreen';
import ProgressBar from '../ProgressBar/ProgressBar';
import PopupVideo from '../../PopupVIdeo/PopupVideo';

import styles from './Layout.module.scss';

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
      <main className={styles.container}>
        <div className={styles.mobileContainer}>
          <p>Page only accessible on desktop !</p>
        </div>
        <Navbar menuItems={menuItems} />
        <MainScreen title={title}>{children}</MainScreen>
        <ProgressBar percentage={0.2} />
      </main>
    </>
  );
};

export default Layout;
