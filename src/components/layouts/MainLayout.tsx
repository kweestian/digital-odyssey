import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import Header from '../Header';
import Navbar from './Navbar';
import MainScreen from './MainScreenLayout';

import styles from './MainLayout.module.scss';

import * as RulesIcon from '../../../public/static/image/navbar/rules-icon.svg';
import * as MapIcon from '../../../public/static/image/navbar/map-icon.svg';
import * as CardIcon from '../../../public/static/image/navbar/card-icon.svg';
import * as ChatIcon from '../../../public/static/image/navbar/chat-icon.svg';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();
  const { t } = useTranslation('common');

  // const {map, cards, } = t('common:menu', { returnObjects: true });

  const menuItems = [
    { title: t('menuTitles.rules'), href: '/rules', icon: RulesIcon },
    { title: t('menuTitles.map'), href: '/map', icon: MapIcon },
    { title: t('menuTitles.cards'), href: '/cards', icon: CardIcon },
    { title: t('menuTitles.chat'), href: '/chat', icon: ChatIcon },
  ];

  const title = menuItems.find((menuItem) => menuItem.href === asPath)?.title || 'Home';

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Navbar menuItems={menuItems} />
        <MainScreen title={title}>{children}</MainScreen>
      </main>
    </>
  );
};

export default Layout;
