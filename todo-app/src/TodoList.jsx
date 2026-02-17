import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const handleAdd = () => {
    
    if (task.trim() === "") return; // Prevent empty todos

    const newTodo = {
      id: Date.now(), // Unique ID
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");  //empty
  };

  // Toggle Completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input Section */}
      <input
        type="text"
        placeholder="Enter todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
            //   style={{
            //     textDecoration: todo.completed ? "line-through" : "none",
            //     marginRight: "10px",
            //   }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;