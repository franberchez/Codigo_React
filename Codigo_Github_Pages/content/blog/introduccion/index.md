---
title: Introduccion
date: "2019-11-01T22:12:03.284Z"
description: ""
---

React es una biblioteca escrita en el lenguaje JavaScript, desarrollada por Facebook para facilitar la creación de componentes interactivos y reutilizables, la cual está focalizada en el desarrollo de interfaces de usuario.

React es una librería lanzada como código abierto en Mayo de 2013, mantenida por Facebook y la comunidad de software libre, la cual ha experimentado una gran expansión. Gracias a esto se ha usado en el desarrollo de aplicaciones como Facebook, Instagram, BBC, Netflix, Dropbox...

Cabe destacar que no es un framework propiamente dicho, como AngularJS por ejemplo, sino que más bien es una librería, enfocada en el desarrollo de interfaces de usuario, concretamente en la visualización de contenido.

Antes de nada, aclaremos el concepto de *árbol DOM*. Mediante este término nos referimos a la interfaz gráfica de nuestra aplicación, que tiene una estructura de árbol. Cada vez que cambiamos un nodo de este árbol, sus hijos tienen que ser generados de nuevo, hayan o no cambiado. Por ello es una tarea compleja y costosa. Ante ello React utiliza el concepto de *DOM virtual*.

Es decir, hace los cambios en una copia virtual y después, utiliza un algoritmo para comparar las propiedades de la copia con las de la versión del DOM, y así, aplicar cambios solamente en las partes que varían. Esto evita el actualizar la vista entera cada vez que se modifica algún elemento, consiguiendo así una mejora significativa en el rendimiento.     


&nbsp;
## Instalación y Primeros Pasos

Gracias a la herramienta Create React App desarrollada por Facebook, no tenemos que preocuparnos por configurar el entorno de trabajo, ya que se encarga de la configuración inicial necesaria para poder trabajar.
Para trabajar con React necesitamos Node.js (permite ejecutar programas desarrollados en Javascript como si estuvierámos trabajando en un servidor) y NPM (es un gestor de paquetes para Javascript que permite instalar librería para aumentar la funcionalidad).

Para instalar en primer lugar NodeJS y NPM, debemos seguir los siguientes pasos:
~~~
sudo apt-get install nodejs
sudo apt-get install npm
~~~

Una vez instalados, mediante NPM instalamos la herramienta Create React App
~~~
sudo npm install -g create-react-app (Muy importante que se ejecute como modo Administrador, con sudo)
~~~

Ahora, ¡ya estamos listos para trabajar con React!. Por último, tenemos que lanzar dicha herramienta, mediante las instrucciones:
~~~
create-react-app NombreDeMiProyecto
cd NombreDeMiProyecto/
npm start
~~~

Donde observamos que se creará un directorio con nombre *'NombreDeMiProyecto'*, en el que se generan una serie de directorios y archivos los cuales analizaremos en el siguiente punto.


&nbsp;
### **Anexo a la instalación: Actualizar NodeJS**
Para ver las versiones que tenemos instaladas de node y npm, podemos utilizar los siguientes comandos:
~~~
node --version
npm --version
~~~

A veces puede ocurrir que la versión de NodeJS requerida para trabajar con ReactJS sea obsoleta, por tanto, necesitamos actualizarlo. Esto se consigue gracias a los siguientes comandos:
~~~
npm install -g n
sudo n stable
npm update npm -g
~~~


&nbsp;
## Enlaces de interés

- <https://medium.com/@ger86/y-eso-del-virtual-dom-de-react-qu%C3%A9-es-3feed6366925>
- <https://desarrolloweb.com/articulos/que-es-react-motivos-uso.html>
- <https://devcode.la/blog/como-funciona-reactjs/>
