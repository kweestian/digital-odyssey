import React from 'react';

import styles from './ProgressBar.module.scss';

const ProgressBar = ({ percentage }: { percentage: number }) => (
  <div className={styles.container}>
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ height: `${percentage * 100}%` }} />
      </div>
      <h2>{percentage * 100}%</h2>
    </div>
  </div>
);

export default ProgressBar;
