import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Navbar.module.scss';

type Props = {
  menuItems: Array<{ href: string; title: string; icon: typeof import('*.svg') }>;
};

const Navbar = ({ menuItems }: Props) => {
  const { asPath } = useRouter();

  return (
    <div className={styles.container}>
      {menuItems.map((menuItem) => (
        <Link key={menuItem.title} href={menuItem.href} className={styles.menuItem}>
          <Image src={menuItem.icon} alt="" className={styles.menuImage} />
          <div>
            <h1>{menuItem.title}</h1>
            {asPath === menuItem.href ? <div className={styles.activeLink} /> : null}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
