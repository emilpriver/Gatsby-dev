import React from "react"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Header from "../../components/header"

import Styles from "../../styles/blog/sanity.module.scss"

const Sanity = ({ pageContext: data }) => {
  return (
    <>
      <SEO title="Sanity Blog" />
      <Header siteTitle="Sanity blog" />
      <section className={Styles.section}>
        <div className={Styles.container}>
          <img src={data.thumbnail.asset.url} alt={data.title} />
          <h1>{data.title}</h1>
        </div>
      </section>
    </>
  )
}

export default Sanity
