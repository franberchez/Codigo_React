(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,7],{"1Jyy":function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a);var o=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this;return this.props.task?this.props.task.map((function(e){return r.a.createElement("p",null,r.a.createElement("b",null,"ID:")," ",e.id,"  ",r.a.createElement("b",null,"Nombre:")," ",e.title,r.a.createElement("b",null,"Descripcion: "),e.description,"  ",r.a.createElement("input",{id:"checkbox",type:"checkbox",onChange:t.props.checkDone.bind(e,e.id)}),r.a.createElement("button",{onClick:t.props.deleteTask.bind(e,e.id)},"x"))})):""},a}(a.Component);e.default=o},"1PNO":function(t,e,n){"use strict";n.r(e);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo");var a=n("q1tI"),r=n.n(a),o=n("jrqu"),i=n("1Jyy"),c=n("zYLI");n("Gh6V");function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(t){var e,n;function a(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={task:o},e.addTask=function(t,n){var a={title:t,description:n,id:e.state.task.length};e.setState({task:[].concat(s(e.state.task),[a])})},e.deleteTask=function(t){var n=e.state.task.filter((function(e){return e.id!==t}));e.setState({task:n})},e.checkDone=function(t){var n=e.state.task.map((function(e){return e.id===t&&(e.done=!e.done,e.done&&(console.log(e.id+" "+e.done),e.style={color:"#39D1B4"},e.done,e.done)),e}));e.setState({task:n})},e}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"cabecera"},r.a.createElement("h1",null,"Aplicación de Tareas")),r.a.createElement(c.default,{addTask:this.addTask}),r.a.createElement("div",{className:"tareas"},r.a.createElement("h3",null,"Mi lista de tareas"),r.a.createElement(i.default,{task:this.state.task,deleteTask:this.deleteTask,checkDone:this.checkDone})))},a}(a.Component);e.default=l},jrqu:function(t){t.exports=JSON.parse('[{"id":0,"title":"task one","description":"lorem ipsum","done":false},{"id":1,"title":"task two","description":"lorem ipsum","done":false},{"id":2,"title":"task three","description":"lorem ipsum","done":false}]')},zYLI:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("f3/d");var a=n("q1tI"),r=n.n(a);n("Gh6V");var o=function(t){var e,n;function a(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).state={title:"",description:""},e.onSubmit=function(t){e.props.addTask(e.state.title,e.state.description),t.preventDefault()},e.onChange=function(t){var n;e.setState(((n={})[t.target.name]=t.target.value,n))},e}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{className:"formulario"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Write a Task",onChange:this.onChange,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("textarea",{name:"description",placeholder:"Write a description",onChange:this.onChange,value:this.state.description}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Save Task")))},a}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-app-tareas-app-js-66ef5dc9c9c49f46585d.js.map