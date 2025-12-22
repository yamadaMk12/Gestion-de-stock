import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, done: !task.done }
          : task
      );

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "EDIT_TASK":
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task
      );

    default:
      return state;
  }
}

export default function useTasks(initialTasks = []) {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const addTask = useCallback((title) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title,
        done: false,
        createdAt: new Date(),
      },
    });
  }, []);

  return { tasks, dispatch, addTask };
}