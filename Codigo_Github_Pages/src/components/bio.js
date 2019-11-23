/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Trabajo realizado por <b>Francisco Bérchez Moreno</b> y <b>Javier Herrero Porras</b>, estudiantes del Grado en Ingeniería Informática
        en la UCO (Universidad de Córdoba).
      </p>
      <p>
        <b>Puede encontrar todo el código generado para este tutorial <a href="https://github.com/franberchez/Codigo_React">AQU&Iacute;</a></b>
      </p>
    </div>
  )
}

export default Bio
