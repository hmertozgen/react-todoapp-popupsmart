import { ErrorResponse } from "@remix-run/router";

import React, { useState } from "react";
import { useTodoServices } from "../context/TodoServicesContext";
import TodoList from "./TodoList";
import Loading from "./Loading";

const AddTodo = () => {
  const { addTodo, todos, editTodo, loading } = useTodoServices();
  const [contentt, setContentt] = useState("");
  const [edit, setEdit] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contentt.length < 3) {
      alert("En az 3 karakter girmelisiniz.");
      return;
    }

    if (edit) {
      editTodo({
        content: contentt,
        isCompleted: edit.isCompleted,
        id: edit.id,
      });
      setEdit("");
    } else {
      addTodo(contentt);
    }
    setContentt("");
  };
  return (
    <section className="h-screen w-full dark:bg-slate-800 bg-text-white">
      <div className="max-w-[600px] mx-auto md:py-16 py-4">
        <form onSubmit={handleSubmit} className="text-center">
          <input
            placeholder="What needs to be done?"
            value={contentt}
            onChange={(e) => setContentt(e.target.value)}
            className="md:w-full w-80 bg-gray-300 py-4 px-2 outline-none shadow-md mb-4 dark:bg-gray-900 dark:text-white"
          />
        </form>
        {loading && <Loading />}
        {!loading && todos.length === 0 && (
          <p className="dark:text-white text-xs md:text-base">
            There is nothing to show at the moment.
          </p>
        )}
        {<TodoList setContentt={setContentt} setEdit={setEdit} />}
      </div>
    </section>
  );
};

export default AddTodo;
