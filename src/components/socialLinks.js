import React from 'react'
import styles from "./Socials.module.scss"

const SocialLinks = () => {
    return(
        <div className={styles.social}>
            <ul>
                <li>
                    <a href="#">GIT</a>
                    <a href="#">Codepen</a>
                    <a href="#">Behance</a>
                    <a href="#">Linkedin</a>
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks