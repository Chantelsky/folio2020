import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Header from "../components/header"
import style from "../components/projectList.module.scss"
import Img from 'gatsby-image'

const ProjectList =(props) => {
    return(
        <main>
            <SEO title="Projects" />
            <Header path={props.location.pathname}/>
            <div className={style.projectContainer}>
                
                <div className={style.project}>
                    <h1>01</h1>
                    <div className={style.title}>
                    <h3>Devsound</h3>
                    <p>Fullstack developer & Designer</p>
                    </div>
                    <div className={style.imageWrapper}><a href="/devsound"><Img fluid={props.data.devsound.childImageSharp.fluid} /></a></div>
                    <div className={style.date}><p>2020.02.21 In Progress</p></div>
                </div>

                <div className={style.project}>
                    <h1>02</h1>
                    <div className={style.title}>
                    <h3>CrownStudio</h3>
                    <p>Frontend developer & Designer</p>
                    </div>
                    <div className={style.imageWrapper}><a href="/crownstudio"><Img fluid={props.data.crownstudio.childImageSharp.fluid} /></a></div>
                    <div className={style.date}><p>2019.10.15</p></div>
                </div>

                <div className={style.project}>
                    <h1>03</h1>
                    <div className={style.title}>
                    <h3>Bookmark</h3>
                    <p>Frontend developer</p>
                    </div>
                    <div className={style.imageWrapper}><a href="/bookmark"><Img fluid={props.data.bookmark.childImageSharp.fluid} /></a></div>
                    <div className={style.date}><p>2019.10.11</p></div>
                </div>
            </div>
        </main>
    )
}

export default ProjectList

export const project = graphql`
query {
    devsound: file(relativePath:{eq: "devsound.png"}) {
        ...projectImage
    }
    crownstudio: file(relativePath:{eq:"crownstudiolanding.png"}) {
        ...projectImage
    }
    bookmark: file(relativePath:{eq:"bookmarkpreview.jpg"}) {
        ...projectImage
    }
}
`

export const projectImage = graphql`
fragment  projectImage on File {
    childImageSharp{
        fluid(maxWidth: 900, quality:100) {
          ...GatsbyImageSharpFluid
        }
    }
}
`