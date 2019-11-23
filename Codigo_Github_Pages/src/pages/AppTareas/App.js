//jsonplaceholder.typicode.com

import React, {Component} from 'react';

import tasks from './samples/task.json';

import Tasks from './components/Tasks.js';

import TaskForms from './components/TaskForm.js'

import './components/style.css';

class App extends Component{

  state ={
    task:tasks
  }

  //Pasar datos desde TaskForm a App.js
  addTask = (title, description) =>{
    const newTask = {
      title: title,
      description: description,
      id: this.state.task.length,
      color: '#000000'
    }

    this.setState({
      task: [...this.state.task, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.task.filter(task => task.id !== id);
    this.setState({task: newTasks})
  }

  checkDone = (id) => {
    const newTasks = this.state.task.map(task => {
      if(task.id === id){
        task.done = !task.done
        task.color= task.done ? 'gray' : 'black'
        task.textDecoration= task.done ? 'line-through' : 'none'
      }
      return task;
    });
    this.setState({task: newTasks})
  }
  render(){
  return (
    <div>
      <div className="cabecera">
        <h1>Aplicaci&oacute;n de Tareas</h1>
      </div>
      <TaskForms addTask={this.addTask}/>
      <div className="tareas">
        <h3>Mi lista de tareas</h3>
        <Tasks task={this.state.task} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
      </div>
    </div>
  )
  }
}
export default App;
