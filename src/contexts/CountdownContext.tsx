import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallegesContext";

interface CountdownContextData{
  minutes: number,
  seconds:number,
  hasFinish: boolean,
  isActive: boolean,
  startCountDown: () => void,
  resetCountDown:() => void
}

interface CountdownProviderProps{
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);


  function startCountDown(){
    setIsActive(true);
  }

  function resetCountDown(){
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setHasFinish(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0){
      setHasFinish(true);
      setIsActive(false);
      startNewChallenge();
    }

  },[isActive, time]);


  return (
    <CountdownContext.Provider 
      value={{
          minutes,
          seconds,
          hasFinish,
          isActive,
          startCountDown,
          resetCountDown
          }}
      >
      {children}
    </CountdownContext.Provider>
  );
}
