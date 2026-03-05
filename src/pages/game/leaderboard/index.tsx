import { NextPage } from 'next';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import { GameLayout } from '@/components';
import useLeaderboardData from '@/hooks/useLeaderboardData';
import OwlIcon from '@/image/navbar/owl-icon.svg';
import styles from './Leaderboard.module.scss';

type Region = 'Asia Pacific' | 'Europe & Middle East' | 'Americas';
const REGIONS: ('All' | Region)[] = ['All', 'Asia Pacific', 'Europe & Middle East', 'Americas'];
const WINNER_THRESHOLD = 10;

type Props = {};

const Leaderboard: NextPage<Props> = () => {
  const [activeRegion, setActiveRegion] = useState<'All' | Region>('All');
  const { players, isLoading } = useLeaderboardData();
  const currentUser = useUser();
  const currentUserId = currentUser?.id;

  const filtered = useMemo(() => {
    const list = activeRegion === 'All' ? players : players.filter((p) => p.region === activeRegion);
    return list.map((p, i) => ({ ...p, rank: i + 1 }));
  }, [players, activeRegion]);

  const rankLabel = (rank: number) => `${rank}`;
  const isWinner = (rank: number) => activeRegion !== 'All' && rank <= WINNER_THRESHOLD;

  const renderTableContent = () => {
    if (isLoading) {
      return Array.from({ length: 8 }, (_, i) => (
        <div key={`ghost-${i}`} className={styles.ghostRow}>
          <div className={`${styles.ghostCell} ${styles.ghostRank}`} />
          <div className={`${styles.ghostCell} ${styles.ghostName}`} />
          <div className={`${styles.ghostCell} ${styles.ghostRegion}`} />
          <div className={`${styles.ghostCell} ${styles.ghostOwls}`} />
        </div>
      ));
    }

    if (filtered.length === 0) {
      return (
        <div className={styles.emptyState}>
          <p className={styles.emptyText}>No explorers in this region yet</p>
        </div>
      );
    }

    return filtered.map((player) => {
      const isCurrentUser = player.userId === currentUserId;
      return (
        <div
          key={player.userId}
          className={[
            styles.row,
            isWinner(player.rank) ? styles.winner : '',
            isCurrentUser ? styles.currentUser : '',
          ].join(' ')}
        >
          <span className={styles.rank}>{rankLabel(player.rank)}</span>

          <div className={styles.player}>
            <span className={styles.name}>
              {player.displayName}
              {isCurrentUser && <span className={styles.youBadge}>You</span>}
            </span>
          </div>

          <span className={styles.region}>{player.region}</span>

          <span className={styles.owls}>
            {Array.from({ length: player.totalOwls }, (_, i) => {
              const isGolden = player.hasGoldenOwl && i === 0;
              return (
                <Image
                  key={`owl-${i}`}
                  src={OwlIcon}
                  alt=""
                  width={40}
                  height={40}
                  className={[styles.owlIcon, isGolden ? styles.owlGolden : styles.owlFilled].join(' ')}
                />
              );
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <GameLayout>
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <div className={styles.header}>
            <h1 className={styles.title}>Explorer Rankings</h1>
            <p className={styles.subtitle}>Kering Learning Odyssey</p>
          </div>

          <div className={styles.toggle}>
            {REGIONS.map((r) => (
              <button
                type="button"
                key={r}
                className={`${styles.toggleBtn} ${activeRegion === r ? styles.toggleActive : ''}`}
                onClick={() => setActiveRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>

          {activeRegion !== 'All' && (
            <p className={styles.prizeNote}>🏆 Top {WINNER_THRESHOLD} explorers unlock an exclusive House Experience</p>
          )}

          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>Rank</span>
              <span>Explorer</span>
              <span>Region</span>
              <span>Owls</span>
            </div>
            {renderTableContent()}
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default Leaderboard;
