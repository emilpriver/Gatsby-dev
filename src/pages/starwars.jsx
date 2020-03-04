import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * Querys
 */
import allStarwarsSpaceships from "../hooks/query/starwars"

const StarWars = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bb8.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const starwars = allStarwarsSpaceships()
  return (
    <Layout>
      <SEO title="Star Wars" />
      <h1>Star Wars</h1>
      <Img
        style={{ maxHeight: 300 }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      {starwars.map(el => {
        return (
          <div className="ship" style={{ marginBottom: 50 }} key={el.name}>
            <h2>{el.name}</h2>
            <span>{el.manufacturer}</span>
          </div>
        )
      })}
    </Layout>
  )
}

export default StarWars
