import React from 'react';

import styles from './ContactPoppin.module.scss';

interface ContactPoppinProps {
  children: React.ReactNode;
}

const ContactPoppin = ({ children }: ContactPoppinProps) => <div className={styles.container}>{children}</div>;

export default ContactPoppin;
