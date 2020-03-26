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
        title: "Devsound",
        description:"Devsound is a web app that uses Spotify API to connect developers through music. Users can login with their Spotify credentials and have instant access to the most popular music other developers listen to.",
        techstack: ["Create React App", "CSS modules", "POSTCSS & SCSS", "NodeJS"],
        path: "devsound",
        link: "https://github.com/Chantelsky/devsound",
        number: "001"
        },
        {
            title: "Crown Studio",
            description: "CrownStudio is a digital agency mockup wireframed in Figma based in Brisbane,AU. The landing page is built with industry standard web design & UI/UX trends.",
            techstack: ["ReactJS","JavaScript","HTML5","CSS3","SCSS"],
            path: "crownstudio",
            link: "https://github.com/Chantelsky/CrownStudio",
            number:"002"
        },
        {
            title: "Bookmark",
            description:"A landing page for a simple bookmark manager.",
            techstack:["JavaScript","HTML5","CSS3","SCSS"],
            path: "bookmark",
            link:"https://github.com/Chantelsky/bookmark-landingpage",
            number: "003"
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
                link: project.link,
                number: project.number
            },
        })
    })
}