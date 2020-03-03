import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
  
  const [starships, setStarships] = useState([])
  useEffect(() => {
    fetch('https://swapi.co/api/starships/?format=json')
    .then(r => r.json())
    .then(r => r.results)
    .then(r => setStarships(r))
  })
  
  return (
    <Layout>
      <SEO title="Star Wars" />
      <h1>Star Wars</h1>
      <Img style={{maxHeight: 300}} fluid={data.placeholderImage.childImageSharp.fluid} />
      {starships.map(el => {
        return (
          <div>
            <h2>{el.name}</h2>
          </div>
        )
      })}
    </Layout>
  )
}

export default StarWars