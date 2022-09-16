import React, { useContext, useEffect, useState } from "react";
import { useTodoServices } from "../context/TodoServicesContext";
import { BsCheck, BsCheck2All } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoList = ({ setContentt, setEdit }) => {
  const { todos, getTodos, deleteTodo, completeTodo, editTodo } =
    useTodoServices();
  useEffect(() => {
    getTodos();
    // if (theme) {
    //   document.body.style.backgroundColor = "rgb(240, 231, 219)";
    // } else {
    //   document.body.style.backgroundColor = "rgb(0 0 0 / 0.9)";
    // }
    // localStorage.setItem("theme", JSON.stringify(theme));
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
        <li
          key={item.id}
          className={`bg-gray-200 border-2 my-2 py-2 dark:bg-gray-900 dark:text-white dark:border-none`}
        >
          <div className="d-flex items-center justify-between">
            <button
              className="cursor-pointer hover:scale-110 mx-2"
              onClick={() => handleCheck(item)}
            >
              {item.isCompleted ? (
                <BsCheck size={24} />
              ) : (
                <BsCheck2All size={24} className="text-red-400" />
              )}
            </button>
            <label
              className={item.isCompleted ? "" : `line-through text-red-400`}
            >
              {item.content}
            </label>
            <div className="flex">
              <button
                className="mx-2 hover:scale-110"
                onClick={() => handleEdit(item)}
              >
                <MdEdit size={24} />
              </button>
              <button
                className="mx-2 hover:scale-110"
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
