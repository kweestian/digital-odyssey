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
        <h2>{percentage * 100}%</h2>
      </div>
    </div>
  );
};

export default ProgressBar;
