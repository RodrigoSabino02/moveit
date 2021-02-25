import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallegerBox.module.css'

export function ChallengerBox() {
    const { activeChallenge, resetChallenges  } = useContext(ChallengesContext)

    return (
        <div className={styles.challegerBoxContainer}>

        { activeChallenge ?
            (
                <div className={styles.challegerActive}>
                    <header>Ganhe {activeChallenge.amount} XP</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Exercicite!</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className="styles.challegerFailedButton"
                            onClick={resetChallenges}
                        >
                            falhei
                        </button>
                        <button 
                            type="button"
                            className="styles.challegerSucceededButton"
                        >
                            completei
                        </button>
                    </footer>
                </div>
            )
                :
            (
                <div className={styles.challegerNotActive}>
                    <strong>
                        Inicie um ciclo
                        para receber desafios a
                        serem completados
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        Complete-os e ganhe
                        experiência e avance de leve.
                    </p>

                </div>
            )
        }



 

        </div>
    )
}