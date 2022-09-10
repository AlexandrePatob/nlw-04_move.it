/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallegesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completedChallenge();
    resetCountDown();
  }

  function handleChallegeFailed(){
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
        <header>Ganhe {activeChallenge.amount} xp</header>
        <main>
          <img src={`icons/${activeChallenge.type}.svg`} alt="Level Up" />
          <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
        </main>
          
        <footer>
          <button 
            type='button'
            className={styles.challengeFailedButton}
            onClick={handleChallegeFailed}
          >
            Falhei
          </button>
          <button 
            type='button'
            className={styles.challengeSucceededButton}
            onClick={handleChallengeSucceeded}
          >
            Completei
          </button>
        </footer>
      </div>
        ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
      
    </div>
  );
}