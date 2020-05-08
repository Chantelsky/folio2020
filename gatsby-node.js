/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const ProjectPage = path.resolve("./src/templates/project.js")

  const projects = [
    {
      title: "Devsound",
      description:
        "Devsound is a web app that uses Spotify API to connect developers through music. Users can login with their Spotify credentials and have instant access to the most popular music other developers listen to.",
      techstack: [
        "Create React App",
        "CSS modules",
        "POSTCSS & SCSS",
        "NodeJS",
      ],
      path: "devsound",
      link: "https://github.com/Chantelsky/devsound",
      number: "001",
    },
    {
      title: "React Apps",
      description:
        "Building a handful of apps to gain a stronger understanding on React Hooks, routing, auth, JSX, state management and component communication",
      techstack: ["ReactJs, JavaScript"],
      path: "reactapps",
      link: "https://github.com/Chantelsky/20-reactapps",
      number: "002",
    },
    {
      title: "Bookmark",
      description:
        "Bookmark was a challenge hosted by Frontend Mentors. The purpose of the challenge was to develop the landing page based soley off of screenshots of the final design. I was provided with active states, images, and a styling guide",
      techstack: ["JavaScript", "HTML5", "CSS3", "SCSS"],
      path: "bookmark",
      link: "https://github.com/Chantelsky/bookmark-landingpage",
      number: "003",
    },
  ]

  projects.forEach(project => {
    createPage({
      path: `/${project.path}`,
      component: ProjectPage,
      context: {
        title: project.title,
        description: project.description,
        techstack: [project.techstack],
        link: project.link,
        number: project.number,
      },
    })
  })
}
