import { useState } from 'react';
import Image from 'next/image';

import * as Check from '@/image/submit-check.svg';

import PopinCard from '../PopinCard';

import styles from './GameCard.module.scss';

type Props = {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
};

const GameCard = ({ experience: { name, description, icon, interaction, bonus }, isOpen, onClose }: Props) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(e);
  };

  if (isOpen) {
    return (
      <PopinCard onClick={() => onClose()}>
        <div className={styles.cardContainer}>
          <h1>{name}</h1>
          <Image src={icon} alt={`${name} owl icon`} className={styles.owlImage} />
          <div className={styles.descriptionContainer}>
            <p>{description}</p>
          </div>
          <form onSubmit={handleSubmit}>
            {interaction.type === 'text' && (
              <div className={styles.inputContainer}>
                <input placeholder={interaction.label} />
                <button type="submit">
                  <Image src={Check} alt="On Submit Button" className={styles.submitButtonImage} />
                </button>
              </div>
            )}
          </form>
        </div>
      </PopinCard>
    );
  }

  return null;
};

export default GameCard;
