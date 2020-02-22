import './CompletedListOfTasks.css';
import React from "react";
import TaskTablet from "../TaskTablet/TaskTablet";


const CompletedListOfTasks = ({ todoList }) => {
    const tasks = todoList.map(( element ) => {
        return (
            element.completed ?
                <TaskTablet key = {element.id}
                            element = {element}
                />
                : null
        )
    });


    return (
            <form className="CompletedListOfTasks">
                    <ul className="">
                        {tasks}
                    </ul>
            </form>
    )
};


export default CompletedListOfTasks;