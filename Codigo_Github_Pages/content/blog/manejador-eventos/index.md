---
title: Manejador de eventos
date: "2019-11-13T22:12:03.284Z"
description: ""
---

Los eventos de React se nombran usando camelCase que es un método de escritura el cual se configura como mayúscula/minúscula, en vez de tan solo minúsculas. Debemos tener en cuenta también que al evento se le pasa la función y no una cadena de texto como un string.

Estos eventos se definen normalmente de una manera declarativa, en el código de la vista o template, producida con JSX en el método render().

Por último, en React es interesante conocer que si quieres prevenir el comportamiento por defecto o la propagación de un evento hay que hacerlo explícitamente llamando a los métodos **_preventDefault_** y **_stopPropagation_** respectivamente.

## Funcionamiento

Para la definición de un evento deberemos considerar dos cosas fundamentalmente, una que el tipo tipo de evento que queremos implementar y luego el método que hará las veces de manejador de eventos.

Un ejemplo en HTML de manejador de eventos seria el siguiente:

~~~
<button onclick = "activeLasers()">
    Activate Lasers
</button>
~~~

Mientras que un manejador de eventos en React se configura de la siguiente forma:

~~~
render(){
    return(
        <button onClick = {this.activeLasers}>
            Activate Lasers
        </button>  
    ) 
}
~~~

Una buena herramienta en la que podemos este ejemplo es [codepen][ejemplo_1] y en la que podremos estudiar todo el funcionamiento del manejador de eventos en mucha mas profundidad.

[ejemplo_1]: https://codepen.io/gaearon/pen/xEmzGg?editors=0010

Debemos aclarar que las declaraciones de eventos en React tienen siempre la misma estructura, es decir, el prefijo **on**, seguido del tipo de evento que queremos capturar como por ejemplo **onClick** y como valor pondremos una referencia al método del componente encargado de procesar el evento correspondiente que queremos ejecutar.

## Eventos sintéticos

Podemos definir los eventos sintéticos como una envoltura de los eventos nativos del navegador, por lo que estos eventos cuentan con la misma interfaz de los eventos nativos, con la ventaja de que todos estos eventos funcionan indénticamente en la mayoría de los navegadores.

En este caso **_event_** es un **evento sintético** y hay que aclarar que en React todos los manejadores de eventos son instacias de **_SyntheticEvents_**.

## Eventos disponibles

React ya inluye de manera inicial una serie de eventos como onKeyUp, onKeyPress, onKeyDown etc.

Por lo que si tenemos que usar un evento que no se encuentre en el listado de eventos, lo tendríamos que hacer como si no lo hicieramos en React. Registrando el evento desde DOM o con JavaScript usando **_addEventListener_** que sirve para agregar escuchadores de eventos.

## Pasando argumentos a escuchadores de eventos

Dentro de un bucle es muy común querer pasar un parámetro extra a un manejador de evenetos, como por ejemplo el id de una fila:

~~~
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
~~~

Como vemos en este ejemplo, ambas líneas son equivalentes aunque la principal diferencia entre ellas es que una utiliza una **_función flecha (=>)_** y la otra utiliza **_Function.prototype.bind_**.

En ambas líneas, el argumento **e** que representa el evento de React va a ser pasado como un segundo argumento después del id, aunque encontramos la diferencia de que con la función flecha este debemos pasarlo explictamente, sin embargo con **bind** cualquier argumento adicional es pasado automáticamente.

En las funciones no es posible acceder a **this** como refrencia al objeto sobre el que se invoca el método, es por ello que necesitamos bindear el contexto, haciendo uso de la llamada **bind()**, con la que estamos indicando en JavaScript qué es lo que quremos que valga **this** dentro del método.

## Enlaces de interés

- <https://es.reactjs.org/docs/handling-events.html>
- <https://medium.com/@simonhoyos/eventos-en-react-b53179ec9683>
- <https://es.wikipedia.org/wiki/Camel_case>
- <https://desarrolloweb.com/articulos/eventos-en-react.html>