(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1Jyy":function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n);var p=function(e){var t,o;function n(){return e.apply(this,arguments)||this}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var p=n.prototype;return p.StyleCompleted=function(){return{fontSize:"20px",color:this.props.done?"gray":"black",textDecoration:this.props.done?"line-through":"none"}},p.render=function(){var e=this;return console.log(this.props.task),this.props.task?this.props.task.map((function(t){return r.a.createElement("p",{style:StyleCompleted()},r.a.createElement("b",null,"ID:")," ",t.id,"  ",r.a.createElement("b",null,"Nombre:")," ",t.title,r.a.createElement("b",null,"Descripcion: "),t.description,"  ",r.a.createElement("input",{id:"checkbox",type:"checkbox",onChange:e.props.checkDone.bind(t,t.id)}),r.a.createElement("button",{onClick:e.props.deleteTask.bind(t,t.id)},"x"))})):""},n}(n.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-app-tareas-components-tasks-js-8807e925828db6544129.js.map