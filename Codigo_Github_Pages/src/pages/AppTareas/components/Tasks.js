import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*import Task from './Task';*/


class Tasks extends Component{

    render(){
    	if(this.props.task){
	        return (
	        	this.props.task.map((item)=><p style={{color: item.color, textDecoration: item.textDecoration}}><b>ID:</b> {item.id}  <b>Nombre:</b>  {item.title} <b>Descripcion: </b>{item.description}  <input id="checkbox" type="checkbox" onChange={this.props.checkDone.bind(item,item.id)}/> <button id="boton_tarea" onClick={this.props.deleteTask.bind(item,item.id)}>x</button></p>)
	        );
    	}

    	else{
    		return ""
    	}
	}
}
export default Tasks;



