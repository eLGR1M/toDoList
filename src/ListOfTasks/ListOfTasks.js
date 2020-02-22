import './ListOfTasks.css'

import React from "react";
import TaskTablet from "../TaskTablet/TaskTablet";


export default function ListOfTasks ({ todoList }) {
        const tasks = todoList.map(( element ) => {
            return (
                !element.completed ?
                        <TaskTablet
                            key = {element.id}
                            element = {element}
                        />
                : null
            )
        });
        return (
                <form>
                        <ul className="">
                                {tasks}
                        </ul>
                </form>
        )
};