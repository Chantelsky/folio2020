import React, { useState, useEffect } from 'react'
import styles from './footer.module.scss'
import dots from '../images/dotBackground.svg'
import SocialLinks from './socialLinks'

export default function Footer(){
    const [date, setDate] = useState();
    const getYear =() => setDate(new Date().getFullYear())

    useEffect(() =>{
        getYear();
    }, [])
    return (
            <footer className= {styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.contactMe}>
                        <h4>Lets work together?</h4>
                        <p>Based in Brisbane, Australia.
                            <div>Open to freelance, remote and fulltime positions</div>
                        </p>
                        <a href="#!">Contact Me</a>
                    </div>
                    <div className={styles.credit}>
                    <p>&copy; {date} Designed and developed with coffee by Chantel Laver</p>
                    </div>
                    <SocialLinks text ="white"/>
                </div>
                <img src={dots}/>
            </footer>
    )
}