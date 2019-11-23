---
title: Introducción al lenguaje JSX
date: "2019-11-04T22:12:03.284Z"
description: ""
---

Es una extension de la sintaxis de JavaScript que nos permite mezclar JS y HTML (XML), de ahí su nombre JavaScript XML. Y se recomienda utilizar en React para describir como debería ser la interfaz de usuario. Aunque React no requiere usar JSX, la mayoria de usuarios lo encuentra muy útil cuando trabajan con la interfaz de usuario ya que proporciona una syntax sugar o azúcar sintáctico que nos permite utilizarlo de una forma más fácil e intuitiva, pudiendo definir por ejemplo estructuras de nodos con prioridades y atributos o simplemente para crear elementos de React en general.

Para terminar una vez compilamos, las expresiones de JSX se convierten en llamadas a JavaScript regulares.


## Reglas de Uso

- Escribir nuestros propios componentes con mayúsula.

~~~ 
<App /> 
~~~

- Escribir los componentes built-in (HTML) con minúscula.

~~~
<img />
~~~

## Funcionamiento

Las expresiones de JSX se convierten en llamadas regulares de funciones de JavaScript que finalmente evalúan a un objeto.

~~~
<h1>Hola mundo</h1>
~~~

Esta expresión en lenguaje JSX se evaluaría en React como:

~~~
React.createElement("h1", null, "Hola mundo");
~~~

Por ejemplo un div con un boton presenta la siguiente estructura en JSX:

~~~
<div>
  <button color="red" >Hola Mundo</button>
</div>
~~~

Mientras que en React tiene la siguiente forma:

~~~
React.createElement("div", null, React.createElement("button", {
  color: "red"
}, "Hola Mundo"));
~~~

Podremos remitirnos a [Babel][babel] para poder hacer pruebas de como este lenguaje se evalúa en React.

[babel]: https://babeljs.io/repl

## Etiquetas de JSX

Los tipos en mayúscula indican que la etiqueta JSX representa un componente en React, y estas etiquetas se compilan como una referencia directa a la variable que estamos nombrando. Un ejemplo seria el siguiente:

~~~
function HelloWorld() {
  return(
      <h1>Hello World</h1>
  )
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
~~~

Podemos ver este ejemplo en [codepen][ejemplo_1].

[ejemplo_1]: https://codepen.io/franberchez/pen/yLLZOjQ

## Enlaces de interés

- <https://medium.com/@simonhoyos/qu%C3%A9-es-jsx-95006a2f94f9>
- <https://es.reactjs.org/docs/introducing-jsx.html>
- <https://medium.com/@Thoughtworks_es/qu%C3%A9-demonios-es-jsx-txt-f5841e51f664>
- <https://carlosazaustre.es/jsx-para-novatos/>