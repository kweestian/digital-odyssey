import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useTranslation from 'next-translate/useTranslation';

import styles from './Navbar.module.scss';

type MenuCardProps = {
  icon: typeof import('*.svg'),
  title: string,
  url: string,
}

type NavbarProps = MenuCardProps[]

const Navbar = ({ menu }: {menu: NavbarProps}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {menu.map((menuItem) => (
        <Link key={menuItem.title} href={menuItem.url} className={styles.menuItem}>
          <Image src={menuItem.icon} alt="" className={styles.menuImage} />
          <h1>{t(menuItem.title)}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
