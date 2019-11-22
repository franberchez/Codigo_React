import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import '../App.css'
import './style.css';

const btnDelete = {
    fontSize: '12px',
    background: '#282c34',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginLeft: '1%'
}


class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task}= this.props;

        return(
            <div className="posicion" style={this.StyleCompleted()}>
                <b>ID</b>:  {task.id} .<b>Título</b>: {task.title} .<b>Descripción</b>: {task.description}
                <input id="checkbox" type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this,task.id)}>x</button>
            </div>)
    }
}

Task.propTypes={
    task: PropTypes.object.isRequired
}

export default Task;