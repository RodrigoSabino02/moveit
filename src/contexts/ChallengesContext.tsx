import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface challengeProps {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesContextData {
    level: number
    currentExperience: number
    experienceToNextLevel: number
    challengesCompleted: number
    activeChallenge: challengeProps
    resetChallenges: () => void
    startNewChallenge: () => void
    levelUp: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider( { children }: ChallengesProviderProps ) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(1)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const challengeRandomIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[challengeRandomIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenges() {
        setActiveChallenge(null)
    }

    return(
        <ChallengesContext.Provider 
            value={{
                level,
                levelUp,
                currentExperience,
                challengesCompleted, 
                startNewChallenge,
                activeChallenge,
                resetChallenges,
                experienceToNextLevel
                }}>
            {children}
        </ChallengesContext.Provider>
    )
}