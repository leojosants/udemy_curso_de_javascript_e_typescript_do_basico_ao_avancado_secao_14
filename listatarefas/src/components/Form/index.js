import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      action="#"
    >
      <input
        onChange={handleChange}
        type="text"
        id="inputTask"
        value={newTask}
        placeholder="Digite a tarefa"
      />
      <button
        type="submit"
        title="Adicionar tarefa"
      >
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
