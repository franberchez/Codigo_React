---
title: Formularios
date: "2019-11-15T22:12:03.284Z"
description: ""
---
Ahora pasamos a profundizar sobre los formularios con React. Estos tienen un comportamiento diferente que en HTML, ya que podemos manejar su estado utilizando el estado de los componentes de React, haciendo más fácil el procesamiento de datos introducidos por el usuario.


&nbsp;
## Formulario simple

En el siguiente [ejemplo de formulario][ejemplo1], podemos observar un formulario muy simple, el cual recoge el nombre que introducimos en el *input*.


&nbsp;
### Componentes controlados

Ahora vayamos un paso más allá. Por ejemplo, queremos que los datos introducidos actualicen el estado del nodo cada vez que sufren un cambio (mientras el usuario introduce los datos, por ejemplo). Para ello, utilizaremos el siguiente [ejemplo][ejemplo2]. Podemos observar que cada vez que introducimos datos, el componente lo muestra en mayúscula, por lo que actualiza el contenido del campo 'name', y posteriormente, una vez que pulsamos el botón de 'Enviar', se muestra una alerta por pantalla.

Este elemento del formulario creado se conoce como **componente controlado** ya que tiene enlazado su *value* con el estado del componente. Esto permite, por ejemplo, realizar comprobaciones o validaciones mientras el usuario introduce datos, y a su vez, reflejarlo en el input, en este caso, cambiandolo a mayuscula. Estos componentes los podemos utilizar en elementos de formularios como input, textarea y select.

Ahora pasemos a trabajar con algunos de estos elementos en React. Para ello vamos a crear un formulario que tome los datos de nuestra película favorita y los muestre mediante una alerta una vez que hemos enviado el formulario. El ejemplo lo tienes [aquí][ejemplo4], en el que podemos trabajar con los elementos de formulario nombrados anteriormente. 

El primer elemento que vamos a utilizar es un *input* en el cual vamos a introducir el nombre de la película:
~~~
<input type="text" onChange={this.onChange} name="name" value={this.state.name} />
~~~
Como podemos observar, cada vez que el elemento de tipo *input* es cambiado, se invoca a un método onChange, el cual actualiza el estado del elemento mediante *setState()*. El siguiente elemento con el que trabajaremos es un *textarea*, en el que introducimos la descripción de la película:

~~~
<textarea onChange={this.onChange} value={this.state.description} name="description"/>
~~~
El comportamiento de este elemento es el mismo que el anterior, es decir, cada vez que es alterado, se invoca a la función onChange, el cual cambia el estado mediante *setState()*. Podemos comprobar el funcionamiento de la funcion *onChange* abriendo la consola y cambiando el estado de los elementos. Lo mismo ocurre con el elemento *select*:

~~~
<select onChange={this.onChange} value={this.state.gender} name="gender">
    <option value="terror">Terror</option>
    <option value="comedia">Comedia</option>
    <option value="romantica">Romantica</option>
</select>
~~~
Resumiendo, todos estos componentes pueden trabajar de forma similar, mediante un atributo *value*. Así podemos hacer nuestros formularios con React.


&nbsp;
### Componentes no controlados: *file input*

Hasta ahora hemos visto que podemos manejar cualquier elemento de un formulario, pero existe una excepción, el campo de tipo fichero *file*. Este campo es de solo lectura, y por tanto no puede ser modificado (**componente no controlado**).

Por ello, se debe acceder a él mediante una referencia al DOM gestionada por React, como se especifica en el siguiente [ejemplo][ejemplo3].


&nbsp;
## Enlaces de interés y ampliación de contenidos

- <https://books.adalab.es/materiales-front-end-d/sprint-3.-es6-y-react/3_9_formularios_react>
- <https://es.reactjs.org/docs/forms.html>
- <https://medium.com/techwomenc/formularios-en-react-21181b6b4bd4>

[ejemplo1]: https://codepen.io/Javier_Herrero/pen/OJJQLgg?editors=0010
[ejemplo2]: https://codepen.io/Javier_Herrero/pen/bGGLbML?editors=0010
[ejemplo3]: https://codepen.io/Javier_Herrero/pen/PooQYyJ
[ejemplo4]: https://codepen.io/Javier_Herrero/pen/bGGzegQ?editors=0010