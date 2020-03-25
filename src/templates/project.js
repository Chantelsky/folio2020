import React from 'react'
import styles from "../components/project.module.scss"
import Img from 'gatsby-image'

import Header from "../components/Header"

const Project = (props, {data}) => {
  return (
    <main>
      <Header />
      <div className={styles.images}>
        {props.path === "/devsound" ?
        <><Img fluid={props.data.devsound.childImageSharp.fluid}/>
        <Img fluid={props.data.devsoundProfile.childImageSharp.fluid}/></>
        : null}
        {props.path === "/crownstudio" ?
        <Img fluid={props.data.crownstudio.childImageSharp.fluid}/> : null}
        {props.path=== "/bookmark" ? <Img fluid={props.data.bookmark.childImageSharp.fluid}/> :null}
        </div>

      <div className={styles.project}>
        <h1>{props.pathContext.title}</h1>
        <p>{props.pathContext.description}</p>
        <ul>
            {props.pathContext.techstack[0].map(stack => {
              return(<li>{stack}</li>)
            })}
        </ul>
          <a href={props.pathContext.link}>GITHUB</a>
        {console.log(props)}
      </div>
      <div className={styles.next}>
        <a href={props.pathContext.next}><h1>next project next project next project</h1></a>
      </div>
    </main>
  )
}

export default Project

export const Image = graphql`
query {
    devsound: file(relativePath:{eq: "devsound.png"}) {
        ...FullImage
    }
    devsoundProfile: file(relativePath:{eq: "devsoundProfile.png"}) {
        ...FullImage
    }
    crownstudio: file(relativePath:{eq: "crownstudiofull.png"}) {
        ...FullImage
    }
    baseapparel: file(relativePath: {eq: "baseapparel.jpg"}) {
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
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
    }
}
`