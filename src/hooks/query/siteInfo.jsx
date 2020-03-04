import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SiteInfo = () => {
  const { site } = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return site
}

export default SiteInfo
