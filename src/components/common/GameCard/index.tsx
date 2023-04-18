import { useState } from 'react';
import Image from 'next/image';

import * as Check from '@/image/submit-check.svg';

import PopinCard from '../PopinCard';
import Button from '../Button';

import styles from './GameCard.module.scss';

const GameCard = ({ title, description, icon, type, coordinates }: Game) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isExperience = (x: Experience | Quiz): x is Experience => (x as Experience).hasDocument !== undefined;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(e);
  };

  return (
    <>
      {isOpen && (
        <PopinCard onClick={() => setIsOpen(false)}>
          <div className={styles.cardContainer}>
            <h1>{title}</h1>
            <Image src={icon} alt={`${title} owl icon`} className={styles.owlImage} />
            <div className={styles.descriptionContainer}>
              <p>{description}</p>
            </div>
            <form onSubmit={handleSubmit}>
              {isExperience(type) && (
                <div className={styles.inputContainer}>
                  <input placeholder={type.ctaText} />
                  <button type="submit">
                    <Image src={Check} alt="On Submit Button" className={styles.submitButtonImage} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </PopinCard>
      )}
      <Button onClick={() => setIsOpen(true)} type="button" text="dummy" />
    </>
  );
};

export default GameCard;
