/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallegesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level} = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img 
        src="http://github.com/AlexandrePatob.png" 
        alt="Alexandre Borges" 
      />
      <div>
        <strong>Alexadre Borges</strong>
        <p>
          <img src="icons/level.svg" alt="Nivel do usuario" /> 
          Level {level}</p>
      </div>
    </div>
  );
}