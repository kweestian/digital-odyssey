import React from 'react';

import { useMapData } from '@/hooks';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const { data } = useMapData();
  const allExperiences = data.flatMap(({ experiences }) => experiences);
  const completedCount = allExperiences.filter(({ isCompleted }) => isCompleted).length;
  const percentage = allExperiences.length > 0 ? Math.round((completedCount / allExperiences.length) * 100) : 0;

  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ height: `${percentage}%` }} />
        </div>
      </div>
      <h2 className={styles.percentage}>{percentage}%</h2>
    </div>
  );
};

export default ProgressBar;
