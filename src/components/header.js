// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <p>ChantelSky</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
