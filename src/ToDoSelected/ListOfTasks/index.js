import React, { useContext } from "react";
import TaskTablet from "./TaskTablet";
import { Context } from "../../Context";
import './style.scss'

export default function ListOfTasks() {
  const { keySelected, todoList } = useContext(Context);

  // const completedTasks = todoList.map(element => {
  //   if (element.idDirectory === keySelected && element.completed) {
  //     return <TaskTablet key={element.id} element={element} />;
  //   }
  //   return null;
  // });


  const currentTasks = todoList.map((element, key) => {
    if (element.idDirectory === keySelected) {
      return <TaskTablet idEl={key+1} key={element.id} element={element} />;
    }
    return null;
  });



  return (
    <>
      <div className="top-listOfTasks">
        <div data-1>
          {/*<input type="checkbox"/>*/}
        </div>
        <div data-2>
          <p>ID</p>
        </div>
        <div data-3>
          <p>TEXT</p>
        </div>
        <div data-4>
          <p>OPTIONS</p>
        </div>
      </div>
      <ul className="listOfTasks">{currentTasks ? currentTasks : <p>Hello</p>}</ul>
      {/*<ul>{completedTasks}</ul>*/}
    </>
  );
}
