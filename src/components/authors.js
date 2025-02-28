import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const Authors = ({ authorSlugs }) => {
  const data = useStaticQuery(graphql`
    query authorQuery {
      authorsJson: settingsJson(
        fileRelativePath: { eq: "/content/settings/authors.json" }
      ) {
        authors {
          email
          name
          slug
        }
      }
    }
  `)

  const allAuthors = data.authorsJson.authors
  const postAuthors = allAuthors.filter(author => {
    return authorSlugs.indexOf(author.slug) > -1 ? true : false
  })

  return postAuthors.map((author, i) => {
    if (postAuthors.length === i + 1) {
      return author.name
    } else {
      return author.name + ", "
    }
  })
}
