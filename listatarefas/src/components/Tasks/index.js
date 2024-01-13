import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {
        tasks.map((task, indice) => (
          <li key={task}>
            {task}
            <span>
              <FaEdit
                onClick={(event) => handleEdit(event, indice)}
                className="edit"
                title="Editar tarefa"
              />
              <FaWindowClose
                onClick={(event) => handleDelete(event, indice)}
                className="delete"
                title="Deletar tarefa"
              />
            </span>
          </li>
        ))
      }
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
