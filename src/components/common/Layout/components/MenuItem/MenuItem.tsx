import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  title: string;
  href: string;
  icon: string;
}

const MenuItem = ({ title, href, icon }: MenuItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { pathname } = useRouter();

  return (
    <Link key={title} href={href} className={styles.menuItem} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Image src={icon} alt="" className={styles.menuImage} />
      <div className={styles.linkContainer}>
        <h1>{title}</h1>
        {pathname.startsWith(href) || isHovering ? <div className={styles.activeLink} /> : null}
      </div>
    </Link>
  );
};

export default MenuItem;
