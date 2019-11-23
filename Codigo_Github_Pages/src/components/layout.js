import React from "react"
import { Link } from "gatsby"
import logo from "../../content/assets/logo-react.png"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div style={{justifyContent: 'center',alignItems: 'center',display:'flex'}}>
          <img src={logo} style={{marginLeft:'-4em'}}></img>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
                marginLeft:'0.2em'
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
        )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <a href="/AppTareas/index.html">Nuestra App</a> <a style={{marginLeft: '2%'}}href="/Acerca-de-nosotros/index.html">Acerca de nosotros</a> <a style={{marginLeft: '2%'}}href="https://github.com/franberchez/Codigo_React">Enlace a repositorio Github</a><p>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></p>
        </footer>
      </div>
    )
  }
}

export default Layout
