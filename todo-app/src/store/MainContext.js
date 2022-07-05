import React, { createContext, useReducer } from "react";
import { actionType } from "../utils/constants";
import reducer from "./reducer.js";

export const MainContext = createContext();

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });

  // *** ACTIONS ***
  const addNewTask = (todoTask) => {
    dispatch({
      type: actionType.ADD_NEW,
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
      type: actionType.MARK_DONE,
      payload: mappedTodos,
    });
  };

  const deleteTask = (taskId) => {
    const mappedTodos = state.todos.filter((task) => task.id !== taskId);

    dispatch({
      type: actionType.DELETE_TASK,
      payload: mappedTodos,
    });
  };

  return (
    <MainContext.Provider
      value={[state, addNewTask, markTaskAsDone, deleteTask]}
    >
      {props.children}
    </MainContext.Provider>
  );
};
