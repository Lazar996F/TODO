import React, { createContext, useReducer } from "react";
import { ADD_NEW, MARK_DONE, DELETE_TASK, EDIT_TASK } from "./actionTypes";
import reducer from "./reducer.js";

export const MainContext = createContext();

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });

  // *** ACTIONS ***
  const addNewTask = (todoTask) => {
    dispatch({
      type: ADD_NEW,
      payload: {
        name: todoTask,
        id: Math.random(),
        isDone: false,
      },
    });
  };

  const markTaskAsDone = (taskId) => {
    const mappedTodos = state.todos.map((task) => {
      if (task.id === taskId) {
        task.isDone = true;
      }
      return task;
    });

    dispatch({
      type: MARK_DONE,
      payload: mappedTodos,
    });
  };

  const deleteTask = (taskId) => {
    const mappedTodos = state.todos.filter((task) => task.id !== taskId);

    dispatch({
      type: DELETE_TASK,
      payload: mappedTodos,
    });
  };

  const editTask = (newName, taskId) => {
    const mappedTodos = state.todos.map((task) => {
      if (task.id === taskId) {
        task.name = newName;
      }
      return task;
    });

    dispatch({
      type: EDIT_TASK,
      payload: mappedTodos,
    });
  };

  return (
    <MainContext.Provider
      value={[state, addNewTask, markTaskAsDone, deleteTask, editTask]}
    >
      {props.children}
    </MainContext.Provider>
  );
};
