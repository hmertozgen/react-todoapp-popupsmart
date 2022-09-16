import axios from "axios";
import React, { useState, createContext, useContext } from "react";

const TodoServicesContext = createContext();

const baseUrl = "https://63134830b466aa9b039667f1.mockapi.io/todos";

export const TodoServicesProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTodos = async () => {
    const response = await axios.get(`${baseUrl}`);
    setTodos(response.data);
    setLoading(false);
  };

  const addTodo = async (newTodo) => {
    const response = await axios.post(`${baseUrl}`, {
      content: newTodo,
      isCompleted: true,
    });
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    getTodos();
    return response;
  };

  const completeTodo = async (item) => {
    const { response } = await axios.put(`${baseUrl}/${item.id}`, {
      content: item.content,
      isCompleted: !item.isCompleted,
    });
    getTodos();
    return response;
  };

  const editTodo = async (edit) => {
    const { response } = await axios.put(`${baseUrl}/${edit.id}`, {
      content: edit.content,
      isCompleted: edit.isCompleted,
    });
    getTodos();
  };

  const values = {
    todos,
    loading,
    getTodos,
    addTodo,
    deleteTodo,
    completeTodo,
    editTodo,
  };

  return (
    <TodoServicesContext.Provider value={values}>
      {children}
    </TodoServicesContext.Provider>
  );
};

export const useTodoServices = () => useContext(TodoServicesContext);
