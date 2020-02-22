import './App.css';

import React, {useEffect, useState} from 'react';
import AddNewElement from "../AddNewElement/AddNewElement";
import ListOfTasks from "../ListOfTasks/ListOfTasks";
import CompletedListOfTasks from "../CompletedListOfTasks/CompletedListOfTasks";
import CountOfTask from "../CountOfTask/CountOfTask";
import ImportListOfTasks from "../ImportListOfTasks/ImportListOfTasks";

import {Context} from "../Context";


export default function App () {
    const [ todoList, setTodoList ] = useState([]);
    const [ countTasks, setCountTasks ] = useState(0);

    useEffect(() =>{
        const toDo = localStorage.getItem('todoList') || [];
        const toDo1 = localStorage.getItem('countTasks') || 0;
        setTodoList(JSON.parse(toDo))
        setCountTasks(JSON.parse(toDo1))
    }, []);

    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList));

        localStorage.setItem('countTasks', JSON.stringify(countTasks));
    }, [todoList]);

    const addNewElementToList = action => {
        if(action !== '') {
            setTodoList([
                ...todoList,{
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
            if(todo.id === key) {
                todo.completed = !todo.completed
            }
            return todo;
        }));
    };

    const setImportElement = key => {
        setTodoList(todoList.map(todo => {
            if(todo.id === key) {
                todo.important = !todo.important
            }
            return todo;
        }));
    };

    const removeElement = key => {
        setTodoList(todoList.filter(todo => {
            return todo.id !== key
        }))
        setCountTasks( todoList.length - 1 )
    };

    return (
        <Context.Provider value={{
            checkedValue, removeElement, addNewElementToList
        }}>
            <div className="App">
                <div className="main-App">
                    <AddNewElement action = {addNewElementToList}/>
                    {/*<ImportListOfTasks importList = {todoList}/>*/}
                    <ListOfTasks
                        todoList = {todoList}
                    />
                    <CompletedListOfTasks
                        todoList = {todoList}
                    />
                    <CountOfTask countTasks={countTasks}/>
                </div>
            </div>
        </Context.Provider>
    );
};

