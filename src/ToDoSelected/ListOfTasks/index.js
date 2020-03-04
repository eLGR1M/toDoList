import React, { useContext } from "react";
import TaskTablet from "./TaskTablet";
import { Context } from "../../Context";

export default function ListOfTasks() {
  const { keySelected, todoList } = useContext(Context);

  const completedTasks = todoList.map(element => {
    if (element.idDirectory === keySelected && element.completed) {
      return <TaskTablet key={element.id} element={element} />;
    }
    return null;
  });

  const currentTasks = todoList.map(element => {
    if (element.idDirectory === keySelected && !element.completed) {
      return <TaskTablet key={element.id} element={element} />;
    }
    return null;
  });

  return (
    <form style={{ position: "relative" }}>
      <ul>{currentTasks}</ul>
      <ul>{completedTasks}</ul>
    </form>
  );
}
