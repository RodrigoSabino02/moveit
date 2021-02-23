import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.ProfileContainer}>
            <img src="https://github.com/RodrigoSabino02.png" alt="Rpdrigo sabino"/>
            <div>
            <strong>Rodrigo Sabino</strong>
            <p>
                <img src="icons/level.svg" alt="level"/>
                Level 1
            </p>
            </div>
        </div>
    )
}