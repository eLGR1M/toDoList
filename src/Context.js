import React, { useReducer } from "react";

export const Context = React.createContext();

const initialState = {
  todoList: [],
  directoriesList: [],
  keySelected: null
};

export const CREATE_DIRECTORY = "createDirectory";

function reducer(state, action) {
  switch (action.type) {
    case CREATE_DIRECTORY:
      return {
        ...state,
        directoriesList: [
          ...state.directoriesList,
          {
            id: Date.now(),
            name: action.value,
            selected: false,
            todos: []
          }
        ]
      };
    case "removeDirectory":
      return {
        ...state,
        todoList: state.todoList.filter(
          todo => todo.idDirectory !== action.key
        ),
        directoriesList: state.directoriesList.filter(
          dir => dir.id !== action.key
        )
      };
    case "addNewElementToList":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            idDirectory: state.keySelected,
            id: Date.now(),
            task: action.value,
            completed: false,
            important: false
          }
        ]
      };
    case "checkedValue":
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.key) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    case "setKeySelected":
      return {
        ...state,
        keySelected: action.key
      };
    case "removeElement":
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.key)
      };
    default:
      throw new Error();
  }
}

export function useGlobalState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    todoList: state.todoList,
    directoriesList: state.directoriesList,
    keySelected: state.keySelected,
    createDirectory: value => dispatch({ type: CREATE_DIRECTORY, value }),
    removeDirectory: key => dispatch({ type: "removeDirectory", key }),
    addNewElementToList: value =>
      dispatch({ type: "addNewElementToList", value }),
    checkedValue: key => dispatch({ type: "checkedValue", key }),
    setKeySelected: key => dispatch({ type: "setKeySelected", key }),
    removeElement: key => dispatch({ type: "removeElement", key })
  };
}

export const useContextFunctions = () => {
  const {
    todoList,
    directoriesList,
    keySelected,
    createDirectory,
    removeDirectory,
    addNewElementToList,
    checkedValue,
    setKeySelected,
    removeElement
  } = useGlobalState();

  return {
    checkedValue,
    removeElement,
    addNewElementToList,
    todoList,
    createDirectory,
    removeDirectory,
    keySelected,
    setKeySelected,
    directoriesList
  };
};
