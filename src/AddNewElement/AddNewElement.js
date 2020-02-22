import './AddNewElement.css'

import React, {useContext, useState} from "react";
import {Context} from "../Context";

export default function AddNewElement () {

    const [value, setValue] = useState('');
    const { addNewElementToList } = useContext(Context);

    const onFormSubmit = e =>{
        e.preventDefault();
        addNewElementToList(value);
        setValue('');
    };

    return(
            <div className = "input-form">
                <h1 className="text-main">TO-DO LIST</h1>
                <form onSubmit={onFormSubmit}>
                        <div className="input-style">
                            <input
                                value={value}
                                onChange = { e => setValue(e.target.value) }
                                type="text"
                                placeholder="New task..."
                            />
                            <button onClick={onFormSubmit}>
                                <i aria-hidden="true" className="add icon"></i>
                            </button>
                        </div>
                </form>
            </div>
    );
};