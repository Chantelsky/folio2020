import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/index.module.scss"
import Dot from '../images/dotBackground.svg'
import Photo from '../images/chantel.jpg'
import Arrow from '../images/arrowRight.svg'
import SocialLinks from '../components/socialLinks'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.intro}>
      <h1>Hi, I'm <span>Chantel Laver.</span>
      <div>A front-end web developer & designer</div></h1>
    </div>

    <div className={styles.about}>
      <h1>I am passionate about building fast, responsive, minimalistic & bold websites with ReactJS</h1>
    </div>

    <div className={styles.lfwork}>
      <img src={Arrow}/>
        <p>Currently looking for a full-time position
        <div>that enables me to code using a modern tech stack</div></p>
      </div>

    <div className={styles.social}><SocialLinks text="black"/></div>

    <div className={styles.images}>
      <img className={styles.selfie} src={Photo} alt="Chantel Laver"/>
      <img className={styles.background} src={Dot}/>
      </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
    devsound: file(relativePath:{eq: "devsound.png"}) {
        ...projectImage
    }
    crownstudio: file(relativePath:{eq: "crownstudiolanding.png"}) {
        ...projectImage
    }
    baseapparel: file(relativePath: {eq: "baseapparel.jpg"}) {
        ...projectImage
    }
}
`
export const projectImage = graphql`
fragment  projectImage on File {
    childImageSharp{
        fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
        }
    }
}
`

