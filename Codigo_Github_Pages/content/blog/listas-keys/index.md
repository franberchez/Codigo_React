---
title: Listas y Keys
date: "2019-11-11T22:12:03.284Z"
description: ""
---

Una **key** es un atributo especial **string** que deberemos incluir cuando creemos listas de elementos o componentes como arrays.

React debe reconocer para su correcto funcionamiento que elementos son los que cambian para poder **agregar**, **eliminar** o **modificar** elementos dentro de una lista, para ello utilizaremos la propiedad **key**.

Las keys deben ser proporcionadas a los elementos dentro del array, para proporcionar a dichos elementos una identidad con el fin de poder identificarlos y diferenciarlos, como por ejemplo:

~~~
function Lista_Numeros(props) {
  const numeros = props.numeros;
  const lista = numeros.map((numero) =>
    <li key={numero.toString()}>
      {numero}
    </li>
  );
  return (
    <ul>{lista}</ul>
  );
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
  <Lista_Numeros numeros={numeros} />,
  document.getElementById('root')
);
~~~

La funcion **map()** lo que hace es coger cada elemento del array inicial que tenemos que es **[1, 2, 3, 4, 5]**, para guardarlo en nuestro caso en la variable **lista** que lo que contendrá es el listado de ese array que vamos a mostrar por pantalla.

Podemos ver este ejemplo en [CodePen][ejemplo1].

[ejemplo1]: https://codepen.io/franberchez/pen/OJJzKBM?editors=1011

Como tenemos instalado node.js en nuestro ordenador personal para poder trabajar con React podemos probar de una forma muy gráficay sencilla la funcionalidad que nos proporciona **map()**:

![Ops, esta imagen no se ha cargado](./map.png)

Como podemos ver lo primero que hacemos es crear un array de cuatro elementos de nombre **a**. Y a continuación lo que creamos es una copia del array **a** con la función **map()** y usando una funcion flecha, indicaremos que para todo elemento **e** que recorramos le sumaremos uno, aunque como podemos observar nuestro array **a** original sigue intacto.

Para elegir una **key** de forma óptima usaremos un string que identifique únicamente a un elemento de la lista entre sus hermanos.

No se recomienda usar índices para keys si el orden de los índices puede cambiar ya que esto podría impactar negativamente en el rendimiento pudiendo causar problemas con el estado del componente.

## Extracción de componentes con keys

Las keys solo tienen sentido en el contexto del array que las envuelve, ya que por ejemplo si extrayesemos un componente **ListItem**, deberías mantener esa key en los elementos **`<ListItem />`** del array, en lugar de en el elemento **`<li>`** del propio **ListItem**.

Por ejemplo usar **key** no tiene ningún sentido:

~~~
function Lista_Numeros(props) {
  const valor = props.valor;
  return (
    // Aquí el uso de key es incorrecto porque no hay ningún array, si en vez de "valor" usasemos "numeros" si que lo necesitaríamos
    <li key={value.toString()}>
      {value}
    </li>
  );
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
  <Lista_Numeros numeros={numeros} />,
  document.getElementById('root')
);
~~~

## Las keys deben ser únicas solo entre hermanos

Las keys que usemos deben ser únicas entre sus hermanos, aunque no necesitan serlo de forma global. Hemos de puntualizar que podremos usar las mismas keys cuando creemos dos arrays diferentes.

~~~
// Le paso props que es como si pasase un argumento de mi Array
function Mostrar(props) {
  // Recorro con la funcion map el titulo de cada elemento del array y los muestro como un vector
  const listado = (
    <ul>
      {props.contenido.map((subido) =>
        <li key={subido.id}>
          {subido.titulo}
        </li>
      )}
    </ul>
  );
  
  // Recorro con la funcion map el titulo y el parrafo de cada elemento del array y los muestro como titulo y subtitulo
  const formato_texto = props.contenido.map((subido) =>
    <div key={subido.id}>
      <h3>{subido.titulo}</h3>
      <p>{subido.parrafo}</p>
    </div>
  );
                                            
  return (
    <div>
      {listado}
      <hr />
      {formato_texto}
    </div>
  );
}

// Esto es un array
const contenido = [
  {id: 1, titulo: 'Hola Mundo', parrafo: 'Estoy de vuelta!'},
  {id: 2, titulo: 'Adios Mundo', parrafo: 'Ya me voy!'}
];
ReactDOM.render(
  <Mostrar contenido={contenido} />,
  document.getElementById('root')
);
~~~

Puedes verlo y probarlo en [codepen][ejemplo2].

[ejemplo2]: https://codepen.io/franberchez/pen/eYYxKMb?editors=1010

Las keys sirven como sugerencia para React pero no son pasadas a tus componentes. Si necesitas usar el mismo valor en tu componente, deberás pasar la **key** explícitamente como una propiedad con un nombre diferente.

## Enlaces de interés

- <https://es.reactjs.org/docs/lists-and-keys.html>
- https://medium.com/@simonhoyos/trabajando-con-listas-en-react-970865e8b8b6
- https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements/39549510
- https://medium.com/@xadrijo/explorando-la-funci%C3%B3n-map-en-javascript-c04c42773fb6
- <https://dev.to/jtonzing/the-significance-of-react-keys---a-visual-explanation--56l7>
- <https://medium.com/@adhithiravi/why-do-i-need-keys-in-react-lists-dbb522188bbb>