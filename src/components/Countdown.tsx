import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.05 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.05 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time == 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
            
        }
    }, [isActive, time])

    return(
        <div>
            <div className={styles.CountdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
                    <button 
                        disabled
                        className={styles.CountdownButton}
                        >
                        ciclo encerrado
                    </button>
        ) : (
            <>
        {isActive ? (
                    <button 
                    type="button"
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                    abandonar ciclo
                </button>
        ) 
        :
        (
            <button 
            type="button"
            className={styles.CountdownButton}
            onClick={startCountdown}
            >
            Iniciar um ciclo
        </button>
        )}
            </>
        )}



        </div>
    )
}