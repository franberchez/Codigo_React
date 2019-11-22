// importamos useState, el hook para crear un state en nuestro componente
import React, { useState } from "react";

export function Contador() {
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  //  la primera (count), tiene el valor del estado
  //  la segunda (setCount), el método para actualizar el estado
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz click!</button>
    </div>
  );
}
