import './TaskTablet.scss'
import React, {useContext, useState} from "react";
import {Context} from "../Context";

export default function TaskTablet ({ element }) {

    const [ showValues, setShowValues ] = useState("show-no");
    const {checkedValue , removeElement} = useContext(Context);

    return(
            <li className="task-style"
                onMouseOver={() => {setShowValues( "show" )}}
                onMouseOut={() => {setShowValues( "show-no" )}}>
                <label className="checkbox">
                    <div className={`checkbox-indicate ${element.completed}`}></div>
                    <input type="checkbox"
                           checked={element.completed}
                           onChange={() => {checkedValue(element.id); console.log('eee', element.id)}}
                    />
                    {element.task}
                </label>
                    <div className= {`task-buttons ${showValues}`}>
                        <button
                            onClick={e => {e.preventDefault(); removeElement(element.id)}}
                        >
                            <i aria-hidden="true" className="trash alternate outline icon"></i>
                        </button>
                    </div>

            </li>
    );
};



