import React from "react"
import { rhythm, scale } from "../utils/typography"
import { Link } from "gatsby"
import logo from "../../content/assets/logo-react.png"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Acerca_De_Nosotros extends React.Component {
  render() {
      const siteTitle= "Librería ReactJS"
      const Location="/"

    return (
      <div>
        <Layout location={Location} title={siteTitle}>

        <div id="informacion_personal" style={{marginBottom: rhythm(2.5),}}>
        Este proyecto ha sido realizado por <a href="https://github.com/JavierHerreroGG1">Javier Herrero Porras</a> y <a href="https://github.com/franberchez">Francisco Bérchez Moreno</a>, 
        correspondiente a la asignatura de Programación Web. El trabajo ha sido una oportunidad tanto 
        para profundizar y afianzar en los conocimientos y las técnicas adquiridas en las clases teóricas y prácticas, 
        como una oportunidad para mejorar en aspectos como la coordinación, el trabajo en equipo 
        y la capacidad de autoaprendizaje con el fin de crear un tutorial asequible para todo aquel nuevo usuario que 
        quiera sumergirse en el aprendizaje de React.

        <div>Tenemos que destacar que ha sido nuestro primer proyecto en común, por tanto, 
        somos conscientes de que aunque queden muchos aspectos por mejorar, este tutorial ha sido realizado con la mejor intención, 
        basándonos en fuentes fidedignas y con la mayor precaución de no cometer ningún tipo de error.
        </div>


          &nbsp;
        </div>
        </Layout>
      </div>
    )
  }
}

export default Acerca_De_Nosotros