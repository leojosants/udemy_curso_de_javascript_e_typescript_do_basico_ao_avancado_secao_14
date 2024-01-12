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
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if (tasks.indexOf(newTask) !== -1) return;
    const newTasks = [...tasks];
    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
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
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {
            tasks.map((task) => (
              <li key={task}>
                {task}
                <span>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
