import React, { Component } from 'react';
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
        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
