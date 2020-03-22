// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <AniLink cover to="/" direction="down" bg="#000"><p>ChantelSky</p></AniLink>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
