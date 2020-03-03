import './ToDoSelected.scss'

import React, {useContext, useEffect} from "react";
import AddNewElement from "../AddNewElement/AddNewElement";
import ListOfTasks from "../ListOfTasks/ListOfTasks";
import CompletedListOfTasks from "../CompletedListOfTasks/CompletedListOfTasks";
import {Context} from "../Context";


export default function ToDoSelected () {

    const { keySelected, todoList, setTodoList } = useContext(Context);



    useEffect(() =>{
        const toDo = localStorage.getItem('todoList') || [];
        setTodoList(JSON.parse(toDo));
    }, []);

    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);



    const SelectDirectoryContent = () => {
        return (
            <div className="SelectDirectoryContent">
                <h1>Select directory</h1>
            </div>
        )
    };


    return (
        <>
            {keySelected !== null
                ? <div className="main-content">
                    <AddNewElement />
                    <ListOfTasks />
                    <CompletedListOfTasks />
                </div>
                : SelectDirectoryContent()
            }
        </>
    )
}