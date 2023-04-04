import React from 'react';

import styles from './ProgressBar.module.scss';

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const test = 'test';

  return (
    <div className={styles.container}>
      ProgressBar
    </div>
  );
};

export default ProgressBar;
