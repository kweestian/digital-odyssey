import { useState } from 'react';
import Image from 'next/image';

import * as Check from '@/image/submit-check.svg';

import PopinCard from '../PopinCard';
import Button from '../Button';

import styles from './GameCard.module.scss';

const GameCard = ({ name, description, icon, coordinates, interaction, bonus }: Experience) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(e);
  };

  return (
    <>
      {isOpen && (
        <PopinCard onClick={() => setIsOpen(false)}>
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
      )}
      <Button onClick={() => setIsOpen(true)} type="button" text="dummy" />
    </>
  );
};

export default GameCard;
