import React from "react";
import TaskTablet from "../TaskTablet/TaskTablet";


const ImportListOfTasks = props => {
    const importTasks = props.importList.map(( element ) => {
        return (
                element.important ?
                <TaskTablet key = {element.id}
                            element = {element}
                /> : null
        )
    });
    return(
        <div>ImportListOfTasks{importTasks}</div>
    )
};

export default ImportListOfTasks;