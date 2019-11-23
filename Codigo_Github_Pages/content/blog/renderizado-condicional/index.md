---
title: Renderizado condicional
date: "2019-11-09T22:12:03.284Z"
description: ""
---

En React JS podemos usar operadores condicionales para verificar si un valor cumple con ciertos requisitos.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript, ya que usa operadores como **if** o el **operador condicional** con el objetivo de crear elementos que representen el estado actual, dejando que React actualice la interfaz de usuario para emparejarlos.

Un ejemplo de como podemos utilizar el referenciado condicional sería el siguiente.

Primero consideramos estos dos componentes:

~~~
function Saludo(props) {
  return <h1>Hola, ¿como estás?</h1>;
}

function Despedida(props) {
  return <h1>Adiós, ya nos veremos.</h1>;
}
~~~

Lo que vamos a crear a continuación es un componente **Saludos** que nos servirá para mostrar por pantalla uno de los dos componentes que hemos expuesto previamente:

~~~
function Saludos(props) {
  const accion = props.accion;
  if (accion) {
    return <Saludo />;
  }
  return <Despedida />;
}

ReactDOM.render(
  // Intenta cambiar acccion={false}:
  <Saludos accion={false} />,
  document.getElementById('root')
);
~~~

Podemos ver su funcionamiento con mayor claridad en [CodePen][ejemplo1].

[ejemplo1]: https://codepen.io/franberchez/pen/LYYeOyj

## Variable de elementos

Podemos utilizar variables para almacenar elementos, lo que puede ayudarnos a renderizar condicionalmente una parte del componente mientras el resto del resultado no cambia.

Utilizando el mismo ejemplo de antes podemos asignar el saludo y la despedida a un botón:

~~~
function SaludoButton(props) {
  return (
    <button onClick={props.onClick}>
      Saludo
    </button>
  );
}

function DespedidaButton(props) {
  return (
    <button onClick={props.onClick}>
      Despedida
    </button>
  );
}
~~~

Y para cambiar el estado de los botones al pulsarlos lo que vamos a utilizar será el componente de estado **SaludoControl**:

~~~
class SaludoControl extends React.Component {
  constructor(props) {
    super(props);
    this.handlesaludoClick = this.handlesaludoClick.bind(this);
    this.handledespedidaClick = this.handledespedidaClick.bind(this);
    this.state = {accion: true};
  }

  handlesaludoClick() {
    this.setState({accion: true});
  }

  handledespedidaClick() {
    this.setState({accion: false});
  }

  render() {
    const accion = this.state.accion;
    let button;

    if (accion) {
      button = <DespedidaButton onClick={this.handledespedidaClick} />;
    } else {
      button = <SaludoButton onClick={this.handlesaludoClick} />;
    }

    return (
      <div>
        <Saludos accion={accion} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <SaludoControl />,
  document.getElementById('root')
);
~~~

Podemos ver su funcionamiento más claro en [CodePen][ejemplo2].

[ejemplo2]: https://codepen.io/franberchez/pen/gOOoXeZ?editors=1010


## Operadores condicionales

Podemos utilizar algunos operadores condicionales cuando estamos trabajando con React que nos proporcionaran diferentes funcionalidades.

Entre estos operadores lógicos encontramos el **&&** que va junto con una expresión que está encerrada entre llaves y que se evalua junto con un valor **true** o un valor **false**, por lo que si la condición es **true**, los elementos después del operador lógico **&&** se imprimirán, en caso de ser **false** se igonorará y no se imprimirá.

~~~
function VideoJuegos(props) {
  const nojugados = props.nojugados;
  return (
    <div>
      <h1>¡Recuerda!</h1>
      {nojugados.length > 0 &&
        <h2>
          Aún te quedan {nojugados.length} juegos por jugar.
        </h2>
      }
    </div>
  );
}

// Prueba a aumentar el numero de veces que aparece juego aumentando a su vez Re: en 1 cada vez que pongas juego
const juegos = ['Juego', 'Re: Juego', 'Re:Re: Juego', 'Re:Re:Re: Juego'];
ReactDOM.render(
  <VideoJuegos nojugados={juegos} />,
  document.getElementById('root')
);
~~~

Ver en [CodePen][ejemplo3].

[ejemplo3]: https://codepen.io/franberchez/pen/xxxpjeB?editors=1010

Otra forma que tenemos de usar el referenciado condicional es el **If-else** para el cual encontramos el siguiente operador condicional **condicion ? true : false**.

~~~
  StyleCompleted() {
      return {
          fontSize: '20px',
          color: this.props.task.done ? 'gray' : 'black',
          textDecoration: this.props.task.done ? 'line-through' : 'none'
      }
  }
~~~

Por ejemplo aqui lo que pretendemos hacer en **color** por ejemplo es que si mi propiedad **done** es **true** con **?** le pondremos el color gris y si es **false** con **:** le pondremos el color negro. Esto podremos ver como funciona en la aplicación que tenemos integrada en esta página de github pages, asi como revisar el código en el repositorio github de la aplicación.

## Evitar que el componente se renderice

Hay casos excepcionales en los que es posible que queramos que un componente se oculte a sí mismo aunque ya haya sido renderizado por otro componente. Lo que podemos hacer es cambiar el comportamiento de dicho componente haciendo que devuelva **null** en vez del resultado renderizado.

## Enlaces de interés

- <https://es.reactjs.org/docs/conditional-rendering.html>
- <http://blog.nubecolectiva.com/renderizando-elementos-con-operadores-logicos-en-react-js/>
- <https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/>