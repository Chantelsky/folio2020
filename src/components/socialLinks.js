import React from 'react'
import styles from './Social.module.scss'
const SocialLinks = (props) => {

  var links = [
    { endpoint: 'https://github.com/Chantelsky', text: "github" },
    { endpoint: 'https://codepen.io/chantel-sky/pens/showcase', text: "codepen" },
    { endpoint: 'https://www.behance.net/chantelsky', text: "behance" },
    { endpoint: 'https://www.linkedin.com/in/chantel-laver-2805a9189/', text: "linkedin" },
    { endpoint: 'https://twitter.com/Chantel_sky', text: "twitter" }
  ];

  const lightLink = (link) => {
    return (
      <a href={link.endpoint} className={styles.lightLink}>{link.text}</a>
    )
  }
  const darkLink = (link) => {
    return (
      <a href={link.endpoint} className={styles.darkLink}>{link.text}</a>
    )
  }

  return (
    <ul className={styles.socialLinks}>
      {links.map((link, key) => (
        <li key={link.endpoint}>
          {props.text === "white" ? lightLink(link) : darkLink(link)}
        </li>
      ))}
    </ul>
  )
}
export default SocialLinks