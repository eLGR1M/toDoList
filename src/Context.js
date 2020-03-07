import React, { useReducer } from "react";

export const Context = React.createContext();

const initialState = {
  todoList: [],
  directoriesList: [],
  keySelected: null
};

export const CREATE_DIRECTORY = "createDirectory";
export const REMOVE_DIRECTORY = "removeDirectory";
export const ADD_NEW_ELEMENT_TO_LIST = "addNewElementToList";
export const CHECKED_VALUE = "checkedValue";
export const SET_KEY_SELECTED = "setKeySelected";
export const REMOVE_ELEMENT = "removeElement";


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
            selected: false
          }
        ]
      };
    case REMOVE_DIRECTORY:
      return {
        ...state,
        todoList: state.todoList.filter(
          todo => todo.idDirectory !== action.key
        ),
        directoriesList: state.directoriesList.filter(
          dir => dir.id !== action.key
        )
      };
    case ADD_NEW_ELEMENT_TO_LIST:
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
    case CHECKED_VALUE:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.key) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    case SET_KEY_SELECTED:
      return {
        ...state,
        keySelected: action.key
      };
    case REMOVE_ELEMENT:
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
    removeDirectory: key => dispatch({ type: REMOVE_DIRECTORY, key }),
    addNewElementToList: value => dispatch({ type: ADD_NEW_ELEMENT_TO_LIST, value }),
    checkedValue: key => dispatch({ type: CHECKED_VALUE, key }),
    setKeySelected: key => dispatch({ type: SET_KEY_SELECTED, key }),
    removeElement: key => dispatch({ type: REMOVE_ELEMENT, key }),
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
