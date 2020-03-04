import "./styles.scss";

import React, { useContext } from "react";
import AddNewElement from "./AddNewElement";
import ListOfTasks from "./ListOfTasks";
import { Context } from "../Context";

export default function ToDoSelected() {
  const { keySelected } = useContext(Context);

  if (keySelected) {
    return (
      <div className="main-content">
        <AddNewElement />
        <ListOfTasks />
      </div>
    );
  }
  return (
    <div className="SelectDirectoryContent">
      <h1>Select directory</h1>
    </div>
  );
}
