import React, { useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import RulesIcon from '@/image/navbar/rules-icon.svg';
import MapIcon from '@/image/navbar/map-icon.svg';
import CardIcon from '@/image/navbar/card-icon.svg';
import OwlIcon from '@/image/navbar/owl-icon.svg';
import LeaderboardIcon from '@/image/navbar/leaderboard-icon.svg';

import { popinAtom } from '@/contexts/atom';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useRegionData, useUrlParams } from '@/hooks';

import Navbar from '../components/Navbar/Navbar';
import MainScreen from '../components/MainScreen/MainScreen';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import PopupVideo from '../../PopupVIdeo/PopupVideo';

import styles from './GameLayout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [hasLogguedIn, setItem] = useLocalStorage('HAS_LOGGED_IN', false);
  // const [hasLogguedIn, sethasLogguedIn] = useState(false);
  const [videoPopinOpen, setVideoPopinOpen] = useAtom(popinAtom);

  const { asPath } = useRouter();
  const { t } = useTranslation('common');

  const menuItems = useMemo(
    () => [
      { title: t('menuTitles.rules'), href: '/game/rules', icon: RulesIcon },
      { title: t('menuTitles.map'), href: '/game/map', icon: MapIcon },
      { title: t('menuTitles.cards'), href: '/game/cards', icon: CardIcon },
      { title: t('menuTitles.owls'), href: '/game/owls', icon: OwlIcon },
      { title: t('menuTitles.leaderboard'), href: '/game/leaderboard', icon: LeaderboardIcon },
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
  //   // console.log(hasLogguedIn);
  //   if (hasLogguedIn) {
  //     setVideoPopinOpen(false);
  //   } else {
  //     setVideoPopinOpen(true);
  //   }
  // }, [setVideoPopinOpen, hasLogguedIn]);

  const handleClick = () => {
    setVideoPopinOpen(false);
    setItem(true);
  };

  const showPoppin = hasLogguedIn === false || videoPopinOpen;

  return (
    <main className={styles.container}>
      <div className={styles.mobileContainer}>
        <p>Please turn your screen on landscape to access the game.</p>
      </div>
      <Navbar menuItems={menuItems} />
      <MainScreen titleColor={color} title={title}>
        {showPoppin && (
          <PopupVideo videoUrl="/static/video/teaser_kering_serious_game_2023.mp4" onClick={handleClick} />
        )}
        {children}
      </MainScreen>
      <ProgressBar />
    </main>
  );
};

export default Layout;
