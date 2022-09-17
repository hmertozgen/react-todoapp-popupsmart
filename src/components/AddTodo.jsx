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
    <section className="text-success justify-content-center">
      <div className="max-width mx-auto  py-4">
        <form onSubmit={handleSubmit} className="text-center">
          <input
            placeholder="Add Todo"
            value={contentt}
            onChange={(e) => setContentt(e.target.value)}
            className=" py-4 px-2  mb-4 "
          />
          <input
            type="submit"
            value="Submit"
            className={"btn btn-success ms-2 py-4"}
          />
        </form>
        {loading && <Loading />}
        {!loading && todos.length === 0 && (
          <p className="">There is nothing to show at the moment.</p>
        )}
        {<TodoList setContentt={setContentt} setEdit={setEdit} />}
      </div>
    </section>
  );
};

export default AddTodo;
