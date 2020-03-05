const fetch = require("node-fetch")
const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // Starwars spaceships
  const starWarsSpaceshipsResult = await fetch(
    "https://swapi.co/api/starships/?format=json"
  )
  const starWarsSpaceshipsResultData = await starWarsSpaceshipsResult.json()

  const starWarsSpaceshipsNode = {
    ...starWarsSpaceshipsResultData,
    id: "starwars-spaceships",
    parent: null,
    children: [],
    internal: {
      type: "starwarsSpaceships",
      mediaType: "text/html",
      content: JSON.stringify(starWarsSpaceshipsResultData.results),
      contentDigest: createContentDigest(starWarsSpaceshipsResultData.results),
    },
  }
  createNode(starWarsSpaceshipsNode)

  // News posts
  const DummyNewsResult = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
  const DummyNewsResultData = await DummyNewsResult.json()

  const DummyNewsResultNode = {
    ...DummyNewsResultData,
    id: "dummyDataNews",
    parent: null,
    children: [],
    internal: {
      type: "dummyNews",
      mediaType: "text/html",
      content: JSON.stringify(DummyNewsResultData),
      contentDigest: createContentDigest(DummyNewsResultData),
    },
  }
  createNode(DummyNewsResultNode)
}

// exports.onCreateNode = async ({
//   node,
//   getNode,
//   actions: { createNodeField },
// }) => {
//   /**
//    * Generate posts
//    */
//   if (node.internal.type === `SanityPost`) {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: "templates",
//     })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            id
            publishedAt
            thumbnail {
              asset {
                url
              }
            }
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allSanityPost.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.slug.current}`,
      component: path.resolve(`./src/templates/sanity/blog/slug.jsx`),
      context: node,
    })
  })
}
