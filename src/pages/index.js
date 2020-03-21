import React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/index.module.scss"
import Dot from '../images/dotBackground.svg'
import Arrow from '../images/arrowRight.svg'
import SocialLinks from '../components/socialLinks'
import Img from 'gatsby-image'
import ProjectCard from "../components/projectCard"

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
      <img src={Arrow} alt="arrow svg"/>
        <p>Currently looking for a full-time position
        <div>that enables me to code using a modern tech stack</div></p>
      </div>

    <div className={styles.social}><SocialLinks text="black"/></div>

    <div className={styles.images}>
      <Img className={styles.selfie} fixed={data.chantel.childImageSharp.fixed} alt="A photo of Chantel" />
      <img className={styles.background} src={Dot}alt=" "/>
      </div>
      
      <div className={styles.row}>
      <ProjectCard path={data.devsound.childImageSharp.fixed} title="DevSound - February | In Progress" />
      <ProjectCard path={data.crownstudio.childImageSharp.fixed} title="CrownStudio" />
      <ProjectCard path={data.bookmark.childImageSharp.fixed} title="Bookmark" />
      </div>

      <div className={styles.contact}>
        <h1>Contact Me Contact Me Contact Me Contact Me</h1>
      </div>
      {console.log(data)}
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
    bookmark: file(relativePath: {eq: "bookmark.jpg"}) {
      ...projectImage
    }
    chantel: file(relativePath: {eq: "chantel.jpg"}) {
      childImageSharp{
        fixed(width: 600, height:800){
          ...GatsbyImageSharpFixed
        }
      }
    }
}
`
export const projectImage = graphql`
fragment  projectImage on File {
    childImageSharp{
        fixed(width: 800, height: 400) {
          ...GatsbyImageSharpFixed
        }
    }
}
`