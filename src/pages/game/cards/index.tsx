/* eslint-disable max-len */
import { NextPage } from 'next';

import { RewardCard, GameLayout, RegionalResourcesPopin } from '@/components';
import { useMapData } from '@/hooks';
import { useGlobalState } from '@/contexts';

import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => {
  const {
    state: { regionalResourcesPopinState },
    dispatch,
  } = useGlobalState();
  const { data } = useMapData();
  const firstTwoRegions = data.slice(0, 2);
  const lastRegions = data.slice(2, 5);

  return (
    <GameLayout>
      <div className={styles.container}>
        {regionalResourcesPopinState && (
          <RegionalResourcesPopin
            regionKey={regionalResourcesPopinState.regionKey}
            regionalResources={regionalResourcesPopinState.regionalResources}
            onClose={() => dispatch({ type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' })}
          />
        )}
        <div className={styles.firstRegionsContainer}>
          {firstTwoRegions.map(({ regionKey, regionalResources, experiences, color }) => (
            <div key={regionKey} className={styles.firstRegions}>
              <div className={styles.regionCards}>
                {experiences.map(({ isCompleted, key, keyLearning }) => (
                  <RewardCard
                    additionalRessources={keyLearning.additionalRessources}
                    content={keyLearning.text}
                    isActive={isCompleted}
                    videoUrl={`/static/video/cards/${key}.mp4`}
                    key={key}
                    experienceKey={key}
                  />
                ))}
              </div>
              <button
                type="button"
                className={styles.regionName}
                style={{ color }}
                onClick={() =>
                  dispatch({
                    type: 'SET_ADDITIONAL_RESOURCES_POPIN',
                    payload: {
                      regionKey,
                      title: regionKey.replace('-', ' ').toUpperCase(),
                      description: 'Ceci est une description',
                      regionalResources,
                    },
                  })
                }
              >
                {regionKey.replace('-', ' ').toUpperCase()}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.lastRegionsContainer}>
          {lastRegions.map(({ regionKey, regionalResources, color, experiences }) => (
            <div key={regionKey} className={styles.lastRegions}>
              <div className={styles.regionCards}>
                {experiences.map(({ isCompleted, key, keyLearning }) => (
                  <RewardCard
                    key={key}
                    additionalRessources={keyLearning.additionalRessources}
                    content={keyLearning.text}
                    isActive={isCompleted}
                    videoUrl={`/static/video/cards/${key}.mp4`}
                    experienceKey={key}
                  />
                ))}
              </div>
              <button
                type="button"
                className={styles.regionName}
                style={{ color }}
                onClick={() =>
                  dispatch({
                    type: 'SET_ADDITIONAL_RESOURCES_POPIN',
                    payload: {
                      regionKey,
                      title: regionKey.replace('-', ' ').toUpperCase(),
                      description: 'Ceci est une description',
                      regionalResources,
                    },
                  })
                }
              >
                {regionKey.replace('-', ' ').toUpperCase()}
              </button>
            </div>
          ))}
        </div>
        <p className={styles.textBox}>
          You win a concept card after each completed experience. Click on any illuminated card to read again the key
          learnings of the experience. Once you have completed all the experiences of a region, you will be able to
          click on the region’s name to access some additional resources - including articles, books, podcasts and
          videos - to explore further the topic.
        </p>
      </div>
    </GameLayout>
  );
};

export default Cards;
