/* eslint-disable no-alert */
import React, { Component } from 'react';
import Form from '../Form';
import Tasks from '../Tasks';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    indice: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, indice } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1 || newTask === '') {
      if (tasks.indexOf(newTask) !== -1) {
        alert('Tarefa já adicionada');
        this.setState({ newTask: '' });
        return;
      }

      if (newTask === '') {
        alert('Campo não pode ser vazio');
        return;
      }
    }

    const newTasks = [...tasks];

    if (indice === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
      alert('Tarefa criada com sucesso!');
    } else {
      newTasks[indice] = newTask;
      this.setState({
        tasks: [...newTasks],
        indice: -1,
        newTask: '',
      });
      alert('Tarefa editada com sucesso!');
    }
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleEdit = (event, indice) => {
    const { tasks } = this.state;
    this.setState({
      indice,
      newTask: tasks[indice],
    });
  };

  handleDelete = (event, indice) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(indice, 1);
    this.setState({ tasks: [...newTasks] });
    alert('Tarefa será deletada!');
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
