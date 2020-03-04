import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const allStarwarsSpaceships = () => {
  const { starwars } = useStaticQuery(graphql`
    query {
      starwars: allStarwarsSpaceships {
        nodes {
          results {
            MGLT
            cargo_capacity
            url
            starship_class
            pilots
            passengers
            name
            model
            max_atmosphering_speed
            manufacturer
            length
            films
            hyperdrive_rating
            crew
            edited(fromNow: true)
            cost_in_credits
            consumables
            created(formatString: "")
          }
        }
      }
    }
  `)
  return starwars.nodes[0].results
}
