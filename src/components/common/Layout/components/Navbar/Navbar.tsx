import React from 'react';

import styles from './Navbar.module.scss';
import MenuItem from '../MenuItem/MenuItem';

type Props = {
  menuItems: Array<{ href: string; title: string; icon: string }>;
};

const Navbar = ({ menuItems }: Props) => (
  <div className={styles.container}>
    <div className={styles.subContainer}>
      {menuItems.map((menuItem) => (
        <MenuItem title={menuItem.title} href={menuItem.href} icon={menuItem.icon} key={menuItem.title} />
      ))}
    </div>
  </div>
);

export default Navbar;
