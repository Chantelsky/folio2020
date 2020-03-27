import React from 'react'
import styles from './Header.module.scss'
import { Location } from '@reach/router'
import { Link } from "gatsby"

const Header = (props) => {
    
    return (
        <div className={styles.header}>
            <nav>
            {props.path === "/" ? 
             <Link to="ProjectList">Projects</Link> : 
             <Link to="/">Home</Link>}
            </nav>
        </div>
    )
}

export default Header