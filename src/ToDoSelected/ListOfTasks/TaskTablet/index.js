import "./styles.scss";

import React, { useContext, useState } from "react";
import { Context } from "../../../Context";

export default function TaskTablet({ element }) {
  const [showValues, setShowValues] = useState("hide");
  const { checkedValue, removeElement } = useContext(Context);

  const { id, completed, task } = element;

  const handleRemoveElement = e => {
    e.preventDefault();
    removeElement(id);
  };

  return (
    <li
      className="task-style"
      onMouseOver={() => {
        setShowValues("show");
      }}
      onMouseOut={() => {
        setShowValues("hide");
      }}
    >
      <label className="checkbox">
        <div className={`checkbox-indicate ${completed}`}></div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            checkedValue(id);
          }}
        />
        {task}
      </label>
      <div className={`task-buttons ${showValues}`}>
        <button onClick={handleRemoveElement}>
          <i aria-hidden="true" className="trash alternate outline icon"></i>
        </button>
      </div>
    </li>
  );
}
