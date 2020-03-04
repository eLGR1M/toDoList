import "./styles.scss";

import React, { useContext, useState } from "react";
import { Context } from "../../Context";

export default function AddNewElement() {
  const [value, setValue] = useState("");
  const { addNewElementToList, directoriesList, keySelected } = useContext(
    Context
  );

  const onFormSubmit = e => {
    e.preventDefault();
    addNewElementToList(value);
    setValue("");
  };

  const NameOfDirectory = () => {
    return directoriesList.map(directory => {
      return directory.id === keySelected ? (
        <h1 key={keySelected} className="text-main">
          {directory.name}
        </h1>
      ) : null;
    });
  };

  return (
    <div className="input-form">
      {NameOfDirectory()}
      <form onSubmit={onFormSubmit}>
        <div className="input-style">
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
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
}
