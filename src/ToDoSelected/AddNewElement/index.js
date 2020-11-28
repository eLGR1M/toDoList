import "./styles.scss";

import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import Button from "../../components/button";
import Input from "../../components/input";

export default function AddNewElement() {
  const [value, setValue] = useState("");
  const { addNewElementToList, directoriesList, keySelected } = useContext(
    Context
  );

  const onFormSubmit = e => {
    e.preventDefault();
    if (value !== "") {
      addNewElementToList(value);
      setValue("");
    }
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

      <form className="input-form" onSubmit={onFormSubmit}>
        {NameOfDirectory()}
        <div>
          <Input value={value}
                 onChange={e => setValue(e.target.value)}
                 type="text"
                 placeholder="New task..."
          />
          <Button classBtn="add-task" textBtn="Add new task"/>
        </div>
      </form>

  );
}
