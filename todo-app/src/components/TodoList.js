import React, { useContext } from "react";
import { MainContext } from "../store/MainContext";

function TodoList() {
  const [state, _, markTaskAsDone, deleteTask] = useContext(MainContext);
  const { todos } = state;

  return (
    <ul>
      {todos.map((task) => (
        <li key={task.id}>
          {task.name} {task.isDone && <span>Done</span>}
          <button onClick={() => markTaskAsDone(task.id)}>mark as done</button>
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
