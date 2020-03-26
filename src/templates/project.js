import React from 'react'
import style from "../components/project.module.scss"
import Img from 'gatsby-image'

import Header from "../components/Header"

const Project = (props, {data}) => {
  return (
    <main>
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
          <div className={style.imgages}>
            {props.path === "/devsound" ?
            <>
            <div className={style.devsound}><Img fixed={props.data.devsound.childImageSharp.fixed}/>
            <Img fixed={props.data.devsoundProfile.childImageSharp.fixed}/></div>
            </>
            : null}
            {props.path === "/crownstudio" ?
            <Img fixed={props.data.crownstudio.childImageSharp.fixed}/> : null}
            {props.path=== "/bookmark" ? <Img fixed={props.data.bookmark.childImageSharp.fixed}/> :null}
            </div>
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
    bookmark: file(relativePath: {eq: "bookmark.jpg"}) {
      ...FullImage
  }
}
`
export const FullProjectImage = graphql`
fragment FullImage on File {
    childImageSharp{
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
    }
}
`