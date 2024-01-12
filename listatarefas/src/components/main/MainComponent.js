import React, { Component } from 'react';

// form
import { FaPlus } from 'react-icons/fa';

import './MainComponent.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    const { newTask } = this.state;

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
      </div>
    );
  }
}
