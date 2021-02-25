import React from 'react'
import { ChallengerBox } from '../components/ChallengerBox'
import { CompletedChalleges } from '../components/CompletedChalleges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <ExperienceBar />

    <section>
      <div className="">
        <Profile />
        <CompletedChalleges />
        <Countdown />
      </div>

      <div className="">
        <ChallengerBox />
      </div>
    </section>
  </div>
  )
}
