import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import style from "../components/index.module.scss"
import Img from 'gatsby-image'
import Header from "../components/Header"
import Landing from "../components/Landing"
import SocialLinks from "../components/SocialLinks"
import Footer from "../components/Footer"

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