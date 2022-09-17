import React, { useEffect } from "react";
import { useTodoServices } from "../context/TodoServicesContext";
import { BsCheck, BsCheck2All } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoList = ({ setContentt, setEdit }) => {
  const { todos, getTodos, deleteTodo, completeTodo, editTodo } =
    useTodoServices();
  useEffect(() => {
    getTodos();
  }, []);

  function handleDelete(id) {
    deleteTodo(id);
  }

  function handleCheck(item) {
    completeTodo(item);
  }

  function handleEdit(item) {
    setContentt(item.content);
    editTodo(item);

    setEdit(item);
  }
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className={`py-2  justify-content-center row`}>
          <div className="d-flex row">
            <div className="col-3"></div>
            <button
              className="btn btn-primary  mx-2 col-2"
              onClick={() => handleCheck(item)}
            >
              {item.isCompleted ? (
                <BsCheck size={24} />
              ) : (
                <BsCheck2All size={24} className="text-danger" />
              )}
            </button>
            <label
              className={
                item.isCompleted
                  ? "col-2 "
                  : `text-decoration-line-through text-danger col-2`
              }
            >
              {item.content}
            </label>
            <div className="d-flex col-2">
              <button
                className="btn btn-success mx-2"
                onClick={() => handleEdit(item)}
              >
                <MdEdit size={24} />
              </button>
              <button
                className="btn btn-danger mx-2 "
                onClick={() => handleDelete(item.id)}
              >
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
