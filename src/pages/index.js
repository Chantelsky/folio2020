import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
// import styles from "../components/index.module.scss"
// import Img from 'gatsby-image'
// import AniLink from "gatsby-plugin-transition-link/AniLink"

// import { Location } from "@reach/router"
import Header from "../components/Header"
import SocialLinks from "../components/SocialLinks"
import Footer from "../components/Footer"
import "../components/layout.css"

const IndexPage = (props) => (
  <main>
    <SEO title="Home" />
    <Header path={props.location.pathname}/>
    <SocialLinks />
    <Footer />
  </main>
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