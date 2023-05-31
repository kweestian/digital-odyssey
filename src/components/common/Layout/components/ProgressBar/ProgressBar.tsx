import React from 'react';

import { useMapData } from '@/hooks';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const { data } = useMapData();
  const answers = [];
  const allExperiences = data.map(({ experiences }) => experiences).flat();

  allExperiences.forEach(({ interaction: { answer, bonus } }) => {
    if (bonus) {
      answers.push({});
    }

    if (answer) {
      answers.push({});
    }
  });

  // const completedRegions = data.filter(({ experiences }) => isComplete && regionKey !== 'timeless-tundra').length;

  const percentage = answers.length > 0 ? answers.length / 20 : 0;

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
