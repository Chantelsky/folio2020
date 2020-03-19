import React, { useState, useEffect } from 'react'
import styles from './footer.module.scss'
import { dots } from '../images/dotBackground.svg'

export default function Footer(){
    const [date, setDate] = useState();
    const getYear =() => setDate(new Date().getFullYear())

    useEffect(() =>{
        getYear();
    }, [])
    return (
        <footer className={styles.footer}>
            <div className="footerContainer">
            <div className="contactMe">
                <h4>Lets work together?</h4>
                <p>Based in Brisbane, Australia
                    Open to Freelance, remote and full-time positions
                </p>
                <a href="#!">Contact Me</a>
            </div>
            <div className="credit">
                <p>&copy; {date} Designed and Developed with coffee by Chantel Laver</p>
            </div>
            </div>
            <img src={ dots }/>
        </footer>
    )
}