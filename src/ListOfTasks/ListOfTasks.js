import './ListOfTasks.scss'
import React, {useContext} from "react";
import TaskTablet from "../TaskTablet/TaskTablet";
import {Context} from "../Context";




export default function ListOfTasks () {
        const { keySelected, todoList } = useContext(Context);

        const tasks = todoList.map(( element ) => {
           if(element.idDirectory === keySelected) {
                   return (
                       !element.completed ?
                           <TaskTablet
                               key = {element.id}
                               element = {element}
                           />
                           : null
                   )
           } else return null

        });
        return (
                <form>
                        <ul className="">
                                {tasks}
                        </ul>
                </form>
        )
};