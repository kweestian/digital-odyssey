import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useTranslation from 'next-translate/useTranslation';

import styles from './Navbar.module.scss';

import * as RulesIcon from '../../../public/static/image/navbar/rules-icon.svg';
import * as MapIcon from '../../../public/static/image/navbar/map-icon.svg';
import * as CardIcon from '../../../public/static/image/navbar/card-icon.svg';
import * as ChatIcon from '../../../public/static/image/navbar/chat-icon.svg';

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('');

  const menuTitles = [
    { title: t('common:rulesPageTitle'), icon: RulesIcon },
    { title: t('common:mapPageTitle'), icon: MapIcon },
    { title: t('common:cardsPageTitle'), icon: CardIcon },
    { title: t('common:chatPageTitle'), icon: ChatIcon },
  ];

  return (
    <div className={styles.container}>
      {menuTitles.map((menuItem) => (
        <Link
          key={menuItem.title}
          href={menuItem.title.toLowerCase()}
          className={styles.menuItem}
        >
          <Image src={menuItem.icon} alt="" className={styles.menuImage} />
          <div>
            <h1>{menuItem.title}</h1>
            {router.pathname === `/${menuItem.title.toLowerCase()}` ? <div className={styles.activeLink} /> : null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
