import "./styles.scss";

import React, { useContext } from "react";
import TaskTablet from "../TaskTablet";
import { Context } from "../../Context";

const CompletedListOfTasks = () => {
  const { keySelected, todoList } = useContext(Context);

  const tasks = todoList.map(element => {
    if (element.idDirectory === keySelected) {
      return element.completed ? (
        <TaskTablet key={element.id} element={element} />
      ) : null;
    } else return null;
  });

  return (
    <form className="CompletedListOfTasks">
      <ul className="">{tasks}</ul>
    </form>
  );
};

export default CompletedListOfTasks;
