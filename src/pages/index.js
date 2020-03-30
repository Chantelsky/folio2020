import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import style from "../components/index.module.scss"
import Img from 'gatsby-image'
import Header from "../components/header"
import Landing from "../components/landing"
import SocialLinks from "../components/socialLinks"
import Footer from "../components/footer"
import "../components/layout.css"

const IndexPage = (props) => {
  return (
    <main>
      <SEO title="Home" />
      <Header path={props.location.pathname}/>
      <div className={style.box}></div>
      <div className={style.image}>
        <Img fluid ={props.data.flower.childImageSharp.fluid} />
        </div>
      <Landing />
      <SocialLinks />
      <Footer />
    </main>
  )
}

export default IndexPage

export const query = graphql`
query {
    flower: file(relativePath: {eq: "flower2.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 900, quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`