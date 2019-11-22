//jsonplaceholder.typicode.com

import React, {Component} from 'react';

import tasks from './samples/task.json';

import Tasks from './components/Tasks.js';

import TaskForms from './components/TaskForm.js'

import './components/style.css';

import logo from '../public/favicon.ico';

class App extends Component{

  state ={
    task:tasks
  }

  //Pasar datos desde TaskForm a App.js
  addTask = (title, description) =>{
    const newTask = {
      title: title,
      description: description,
      id: this.state.task.length
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
        <img id="logo" alt="logo de aplicacion" src={logo}/>
      </div>
      <TaskForms addTask={this.addTask}/>
      <Tasks task={this.state.task} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
    </div>
  )
  }
}
export default App;
