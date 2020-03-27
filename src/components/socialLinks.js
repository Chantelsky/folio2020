import React from 'react'
import styles from "./Socials.module.scss"

const SocialLinks = () => {
    return(
        <div className={styles.social}>
            <ul>
                <li>
                    <a href="https://github.com/Chantelsky">GIT</a>
                    <a href="https://codepen.io/chantel-sky">Codepen</a>
                    <a href="https://www.behance.net/chantelsky">Behance</a>
                    <a href="https://www.linkedin.com/in/chantel-laver-2805a9189/">Linkedin</a>
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks