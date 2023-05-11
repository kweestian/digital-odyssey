import React from 'react';

import { useMapData } from '@/hooks';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const { data } = useMapData();

  const completedRegions = data.filter(({ isComplete }) => isComplete).length;

  const percentage = completedRegions ? completedRegions / 5 : 0;

  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ height: `${percentage * 100}%` }} />
        </div>
      </div>
      <h2 className={styles.percentage}>{percentage * 100}%</h2>
    </div>
  );
};

export default ProgressBar;
