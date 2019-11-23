---
title: Hooks
date: "2019-11-17T22:12:03.284Z"
description: ""
---

Los hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una **function**. Esto antes no era posible ya que estabamos obligados a crear un componente **class** para poder acceder a todas las posibilidades de la librería. Sin embargo, con los hooks podemos enganchar nuestros componentes funcionales a todas las características de React.

## Funcionamiento

El código de esta aplicación lo puedes encontrar [aquí][enlace].

~~~
// importamos useState, el hook para crear un state en nuestro componente
import React, { useState } from 'react'

function Contador() {
  // useState recibe un parámetro: el valor inicial del estado (que será 0)
  // y devuelve un array de dos posiciones:
  // la primera (count), tiene el valor del estado
  // la segunda (setCount), el método para actualizar el estado y el cual podemos llamarlo como queramos al igual que count
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      { /* actualizamos el state al hacer click con setCount */ }
      <button onClick={() => setCount(count + 1)}>
        Haz click!
      </button>
    </div>
  )
}
~~~

En el ejemplo usamos el hook **useState** con el objetivo de hacer que nuestro componente funcional **Contador** tenga un estado interno. Podemos observar que hay varios aspectos cambinates en cuanto a la forma original de usar el componente **class** de React. Podemos observar que la forma de modificarle el estado o **state** es diferente, ya que si nos fijamos ya no usamos el tradicional **this.setState**, si no que ahora lo actualizamos usando el método que hemos definido en el ejemplo **setCount** cuyo único propósito es modificar el valor del contador.

Otro ejemplo pero con referenciado condicional y haciendo uso de los hooks sería el siguiente:

~~~
import React, { useState } from 'react'

const Door = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1>La puerta esta {open ? 'abierta' : 'cerrada'}</h1>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Cerrar' : 'Abrir'}
      </button>
    </div>
  )
}

export default Door
~~~

## ¿El por qué de los Hooks?

### Las clases confunden a las personas y a las máquinas

Para las personas pueden suponer un obstáculo a la hora de empezar a trabajar con React y entender su correcto funcionamiento, asi como para las máquinas, siendo uno de los motivos más importantes el hecho de que las clases no minifican (hacer el código mas liviano o sencillo) tan bien como las funciones, lo que implicá que el código para implementarlo ocupará más.

### Era difícil reutilizar la lógica de los componentes

Aunque la reutilización de componentes era una de las grandes bazas de React, existía cierta limitación a la hora de reurilizar la lógica interna de cada componente. Por lo que a lo largo de la vida de esta librería se han intentando buscar soluciones al problema. Primero surgieron los **Mixins** que acabaron resultando demasiado complejos, luego surgieron los **HoC (High Order Components)**, a continuación los **Render Props** y por último surgió el asunto que nos ocupa que son los **Hooks** como solución al problema.

### Los componentes complejos acababan siendo difíciles de entender

El ciclo de vida de los componentes de React, que podíamos usar en los componentes con **class**, era una pontentísima forma de ejecutar código, aunque se presentaba la complejidad de entender lo que podía hacer un componente.

### Algunas aclaraciones

- El uso de los Hooks es completamente opcional, es decir, no es obligatorio usarlos para crear una aplicación con React.

- Los Hooks son 100% compatibles con versiones anteriores.

- Ya se encuentran disponibles para utilizarlos.

## Enlaces de ínteres

- <https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/>
- <https://es.reactjs.org/docs/hooks-intro.html>
- <https://ed.team/blog/introduccion-los-hooks-de-react>


[enlace]: https://github.com/franberchez/Codigo_React