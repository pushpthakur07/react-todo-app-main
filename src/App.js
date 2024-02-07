import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((t) => t !== text);
    setTodos(newTodos);
    setEditIndex(null);
    setEditedTodo("");
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditedTodo(todos[index]);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editedTodo;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditedTodo("");
  };
  const handleClearAll = () => {
    setTodos([]);
    setEditIndex(null);
    setEditedTodo("");
  };
  const cancelEdit = () => {
    setEditIndex(null);
    setEditedTodo('');
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList
        list={todos}
        remove={deleteTodo}
        editTodo={editTodo}
        editIndex={editIndex}
        setEditedTodo={setEditedTodo}
        updateTodo={updateTodo}
        cancelEdit={cancelEdit}
      />
      {todos.length > 1 && (
        <button onClick={handleClearAll}>Clear All</button>
      )}

    </div>
  );
};

export default App;
