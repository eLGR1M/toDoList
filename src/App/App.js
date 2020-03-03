
import './App.scss'

import React, {useEffect, useState} from 'react';
import ToDoSelected from "../ToDoSelected/ToDoSelected";
import ListOfDirectories from "../ListOfDirectories/ListOfDirectories";
import {Redirect} from "react-router-dom";

import {Context} from "../Context";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App () {
    const [ todoList, setTodoList ] = useState([]);
    const [ directoriesList, setDirectoriesList ] = useState([]);
    const [ keySelected, setKeySelected ] = useState(null);
    const [ countTasks, setCountTasks ] = useState(0);


    useEffect(() =>{

        const direct = localStorage.getItem('directoriesList') || [];
        setDirectoriesList(JSON.parse(direct));
    }, []);

    useEffect(()=>{
        localStorage.setItem('directoriesList', JSON.stringify(directoriesList));
    }, [directoriesList]);

    const createDirectory = value => {
        setDirectoriesList([
                ...directoriesList,{
                    id: Date.now(),
                    name: value,
                    selected: false,
                    todos: []
            }
        ]);
    };

    const removeDirectory = key => {
        setDirectoriesList(directoriesList.filter(directory => {
            return directory.id !== key
        }));
        setTodoList(todoList.filter( (todo) => {
            return todo.idDirectory !== key
        }));
    };

    const addNewElementToList = ( action ) => {
        if(action !== '') {
            setTodoList([
                ...todoList,{
                    idDirectory: keySelected,
                    id: Date.now(),
                    task: action,
                    completed: false,
                    important: false
                }
            ]);
            setCountTasks( todoList.length + 1 )
        }
    };

    const checkedValue = key => {
        setTodoList(todoList.map(todo => {
            if (todo.id === key) {
                todo.completed = !todo.completed
            }
            return todo;
        }));
    };

    const removeElement = key => {
        setTodoList(todoList.filter( (todo) => {
            return todo.id !== key
        }));
        setCountTasks( todoList.length - 1 )
    };

    const userContext = {
        checkedValue, removeElement, addNewElementToList,
        countTasks, setCountTasks,
        todoList, setTodoList,
        createDirectory, removeDirectory,
        keySelected, setKeySelected,
        directoriesList, countList :directoriesList.length
    };



    return (
        <Context.Provider value={userContext}>
            <div className="app">
                <div className="app-content">
                    <Router>
                        {keySelected === null ? <Redirect exact to={'/'} /> : null}
                        <Switch>
                            <Route exact path={'/'}>
                                <ListOfDirectories />
                                <ToDoSelected />
                            </Route>
                            <Route path={`/directory/${keySelected}`} >
                                <ListOfDirectories />
                                <ToDoSelected />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </Context.Provider>
    );
};

