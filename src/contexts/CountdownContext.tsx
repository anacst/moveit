import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengeContext } from './ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    timeProgress: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ChallengesProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext);

    const [totalTime, setTotalTime] = useState(0.05);
    const [time, setTime] = useState(totalTime * 60);
    const [timeProgress, setTimeProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);

        setTime(totalTime * 60);
        setHasFinished(false);
        setTimeProgress(0);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
                setTimeProgress((time * 100) / totalTime);
            }, 1000);
        } else if (isActive && time === 0) {
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
    }, [isActive, time]);

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            timeProgress,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    );
}