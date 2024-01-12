import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

// tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './MainComponent.css';

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
        alert('Campo vazio');
        return;
      }
    }

    const newTasks = [...tasks];

    if (indice === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[indice] = newTask;
      this.setState({
        tasks: [...newTasks],
        indice: -1,
        newTask: '',
      });
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
    this.setState({
      tasks: [...newTasks],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form
          onSubmit={this.handleSubmit}
          className="form"
          action="#"
        >
          <input
            onChange={this.handleChange}
            type="text"
            id="inputTask"
            value={newTask}
            placeholder="Digite a tarefa"
          />
          <button type="submit" title="Adicionar tarefa">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {
            tasks.map((task, indice) => (
              <li key={task}>
                {task}
                <span>
                  <FaEdit
                    onClick={(event) => this.handleEdit(event, indice)}
                    className="edit"
                    title="Editar tarefa"
                  />
                  <FaWindowClose
                    onClick={(event) => this.handleDelete(event, indice)}
                    className="delete"
                    title="Deletar tarefa"
                  />
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
