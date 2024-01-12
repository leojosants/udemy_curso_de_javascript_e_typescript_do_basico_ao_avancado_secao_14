import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

// tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './MainComponent.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Fazer café',
      'Beber água',
      'Estudar React',
    ],
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

        <form className="form" action="#">
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
                <div>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
