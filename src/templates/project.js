import React from 'react'
import style from "../components/project.module.scss"
import Img from 'gatsby-image'
import SEO from "../components/seo"
import Header from "../components/header"
import { graphql } from 'gatsby'

const Project = (props, {data}) => {
  return (
    <main>
      <SEO title="Project"/>
      <Header />
      <div className={style.close}><a href="/ProjectList">Close</a></div>

      <div className={style.pageContainer}>
        <div className={style.projectInfo}>
        <h1>{props.pageContext.number}</h1>

        <div className={style.heading}>
        <p>project</p>
          <h2>{props.pageContext.title}</h2>
        </div>

          <p>{props.pageContext.description}</p>
          
          <div className={style.stack}>
            <ul>
              <p>Tech Stack</p>
              {props.pageContext.techstack[0].map(stack => {
                return(<li>{stack}</li>)
              })}
            </ul>
          </div>
          <a href={props.pageContext.link}>GITHUB</a>
          </div>
           
          <div className={style.images}>
            {props.path === "/devsound" ?
            <Img fluid={props.data.devsoundfullimage.childImageSharp.fluid}/>
            : null}
            {props.path === "/crownstudio" ?
            <Img fluid={props.data.crownstudiofullimage.childImageSharp.fluid}/> : null}
            {props.path=== "/bookmark" ? <Img fluid={props.data.bookmark.childImageSharp.fluid}/> :null}
            </div>
      </div>
    </main>
  )
}

export default Project

export const Image = graphql`
query {
    devsoundfullimage: file(relativePath:{eq: "devsoundfull.png"}) {
        ...FullImage
    }
    crownstudiofullimage: file(relativePath:{eq: "crownstudiofull.png"}) {
        ...FullImage
    }
    bookmark: file(relativePath: {eq: "bookmark.jpg"}) {
      ...FullImage
  }
}
`
export const FullProjectImage = graphql`
fragment FullImage on File {
    childImageSharp{
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
    }
}
`