/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({graphql, actions, reporter}) => {
    const { createPage } = actions
    const ProjectPage = path.resolve("./src/templates/project.js")

    const projects = [
        {
        title: "Devsound - In progress",
        description:"Building a Fullstack application thaat uses the spotify API to connect developers through music.",
        techstack: ["Create React App", "CSS modules", "POSTCSS & SCSS", "NodeJS"],
        path: "devsound",
        link: "https://github.com/Chantelsky/devsound"
        },
        {
            title: "Crown Studio",
            description: "CrownStudio is a digital agency mockup wireframed in Figma based in Brisbane,AU. The landing page is built with industry standard web design & UI/UX trends.",
            techstack: ["ReactJS","JavaScript","HTML5","CSS3","SCSS"],
            path: "crownstudio"
        },
        {
            title: "Bookmark",
            description:"A landing page for a simple bookmark manager.",
            techstack:["JavaScript","HTML5","CSS3","SCSS"],
            path: "bookmark"
        }
    ]

    projects.forEach(project => {
        createPage({
            path:`/${project.path}`,
            component: ProjectPage,
            context: {
                title: project.title,
                description: project.description,
                techstack: [project.techstack],
                link: project.link
            },
        })
    })
}