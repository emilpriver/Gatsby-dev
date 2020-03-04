import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { mapEdgesToNodes } from "../../helpers/utils"

const allSanityPosts = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
        edges {
          node {
            id
            publishedAt
            thumbnail {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
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
  return mapEdgesToNodes(posts)
}

export default allSanityPosts
