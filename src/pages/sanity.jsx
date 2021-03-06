import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"

import allSanityPosts from "../hooks/query/allSanityPosts"

import Styles from "../styles/blog/sanity.module.scss"

const Sanity = () => {
  const data = allSanityPosts()

  return (
    <>
      <SEO title="Sanity Blog" />
      <Header siteTitle="Sanity blog" />
      <section className={Styles.section}>
        <div className={Styles.container}>
          {data.map(el => {
            return (
              <div key={el.id} className={Styles.post}>
                <Link to={`/posts/${el.slug.current}`}>
                  <Img fluid={el.thumbnail.asset.fluid} />
                  <h1 className={Styles.section.h1}>{el.title}</h1>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Sanity
