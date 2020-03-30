import React from 'react'
import styles from './header.module.scss'
import { Link } from "gatsby"

const Header = (props) => {
    
    return (
        <div className={styles.header}>
            <nav>
            {props.path === "/" ? 
             <Link to="projectList">Projects</Link> : 
             <Link to="/">Home</Link>}
            </nav>
        </div>
    )
}

export default Header