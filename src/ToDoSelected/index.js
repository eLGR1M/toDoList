import "./styles.scss";

import React, { useContext } from "react";
import AddNewElement from "./AddNewElement";
import ListOfTasks from "./ListOfTasks";
import CompletedListOfTasks from "./CompletedListOfTasks";
import { Context } from "../Context";

export default function ToDoSelected() {
  const { keySelected } = useContext(Context);

  const SelectDirectoryContent = () => {
    return (
      <div className="SelectDirectoryContent">
        <h1>Select directory</h1>
      </div>
    );
  };

  return (
    <>
      {keySelected !== null ? (
        <div className="main-content">
          <AddNewElement />
          <ListOfTasks />
          <CompletedListOfTasks />
        </div>
      ) : (
        SelectDirectoryContent()
      )}
    </>
  );
}
