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
        <div />
        <div className={styles.cardsContainer}>
          <div className={styles.firstRegionsContainer}>
            {firstTwoRegions.map(
              ({ regionKey, regionalResources, experiences, color, isComplete: isRegionComplete, title }) => (
                <div key={regionKey} className={styles.firstRegions}>
                  <div className={styles.regionCards}>
                    {experiences.map(({ isCompleted, key, keyLearning }) => (
                      <RewardCard
                        regionKey={regionKey}
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
                    disabled={!isRegionComplete}
                    onClick={() =>
                      dispatch({
                        type: 'SET_ADDITIONAL_RESOURCES_POPIN',
                        payload: {
                          regionKey,
                          title: title.textParts.join(' ').toUpperCase(),
                          description: 'Ceci est une description',
                          regionalResources,
                        },
                      })
                    }
                  >
                    <span style={{ opacity: isRegionComplete ? 1 : 0.5 }}>
                      {title.textParts.join(' ').toUpperCase()}
                    </span>{' '}
                  </button>
                </div>
              ),
            )}
          </div>
          <div className={styles.lastRegionsContainer}>
            {lastRegions.map(({ regionKey, regionalResources, color, experiences, isComplete, title }) => (
              <div key={regionKey} className={styles.lastRegions}>
                <div className={styles.regionCards}>
                  {experiences.map(({ isCompleted, key, keyLearning }) => (
                    <RewardCard
                      regionKey={regionKey}
                      key={key}
                      additionalRessources={keyLearning.additionalRessources}
                      content={keyLearning.text}
                      isActive={isCompleted}
                      videoUrl={`/static/video/cards/${key}.mp4`}
                      experienceKey={key}
                    />
                  ))}
                </div>
                {/* {console.log(isComplete, regionKey)} */}
                <button
                  type="button"
                  className={styles.regionName}
                  style={{ color }}
                  disabled={!isComplete}
                  onClick={() =>
                    dispatch({
                      type: 'SET_ADDITIONAL_RESOURCES_POPIN',
                      payload: {
                        regionKey,
                        title: title.textParts.join(' ').toUpperCase(),
                        description: 'Ceci est une description',
                        regionalResources,
                      },
                    })
                  }
                >
                  <span style={{ opacity: isComplete ? 1 : 0.5 }}>{title.textParts.join(' ').toUpperCase()}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className={styles.textBox}>
          You win a concept card after each completed experience.
          <br /> Click on any illuminated card to read again the key learnings of the experience.
          <br /> Once you have completed all the experiences of a region, you will be able to click on the
          <br />
          region’s name to access some additional resources - including articles, books, podcasts
          <br /> and videos - to explore further the topic.
        </p>
      </div>
    </GameLayout>
  );
};

export default Cards;
