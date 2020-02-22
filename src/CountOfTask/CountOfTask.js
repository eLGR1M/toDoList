import './CountOfTask.css';
import React from "react";


export default function CountOfTask ({countTasks}) {
    return(
        countTasks > 0
        ?
            <div className="CountOfTask">
                <p>There are {countTasks} todo`s</p>
            </div>
        :
            <div></div>
    )
}