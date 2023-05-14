import React, { useEffect, useMemo, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import * as RulesIcon from '@/image/navbar/rules-icon.svg';
import * as MapIcon from '@/image/navbar/map-icon.svg';
import * as CardIcon from '@/image/navbar/card-icon.svg';
import * as OwlIcon from '@/image/navbar/owl-icon.svg';

import { popinAtom } from '@/contexts/atom';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useRegionData, useUrlParams } from '@/hooks';

import Navbar from '../components/Navbar/Navbar';
import MainScreen from '../components/MainScreen/MainScreen';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import PopupVideo from '../../PopupVIdeo/PopupVideo';

import styles from './GameLayout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [hasLoggedIn, setItem] = useLocalStorage('HAS_LOGGED_IN');
  const [videoPopinOpen, setVideoPopinOpen] = useAtom(popinAtom);

  const { asPath } = useRouter();
  const { t } = useTranslation('common');

  const menuItems = useMemo(
    () => [
      { title: t('menuTitles.rules'), href: '/game/rules', icon: RulesIcon },
      { title: t('menuTitles.map'), href: '/game/map', icon: MapIcon },
      { title: t('menuTitles.cards'), href: '/game/cards', icon: CardIcon },
      { title: t('menuTitles.owls'), href: '/game/owls', icon: OwlIcon },
    ],
    [t],
  );

  const { getUrlParam } = useUrlParams();
  const regionKey = getUrlParam('regionKey') as RegionKey;
  const { title: regionTitle, color } = useRegionData(regionKey);

  const title = useMemo(() => {
    if (regionKey) {
      return regionTitle;
    }

    return menuItems.find((menuItem) => menuItem.href === asPath)?.title || 'Lost';
  }, [regionKey, menuItems, asPath, regionTitle]);

  // useEffect(() => {
  //   if (getItem('HAS_LOGGED_IN') === 'true') {
  //     setVideoPopinOpen(false);
  //   } else {
  //     setVideoPopinOpen(true);
  //   }
  // }, [setVideoPopinOpen, getItem]);

  const handleClick = () => {
    setVideoPopinOpen(false);
    setItem('true');
  };

  const isFirstVisit = useMemo(() => hasLoggedIn !== 'true', [hasLoggedIn]);

  const showPoppin = isFirstVisit || videoPopinOpen;

  return (
    <main className={styles.container}>
      <div className={styles.mobileContainer}>
        <p>Please turn your screen on landscape to access the game.</p>
      </div>
      <Navbar menuItems={menuItems} />
      <MainScreen titleColor={color} title={title}>
        {showPoppin && <PopupVideo onClick={handleClick} />}
        {children}
      </MainScreen>
      <ProgressBar />
    </main>
  );
};

export default Layout;
