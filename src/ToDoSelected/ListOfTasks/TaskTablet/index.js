import "./styles.scss";

import React, { useContext, useState } from "react";
import { Context } from "../../../Context";

export default function TaskTablet({ element, idEl }) {
  const [showValues, setShowValues] = useState("hide");
  const [checked, setChecked] = useState(false)
  const { checkedValue, removeElement } = useContext(Context);

  const { id, completed, task } = element;
  let classTablet = "task-tablet-style";
  // console.log(element);



  const handleRemoveElement = e => {
    e.preventDefault();
    removeElement(id);
  };

  if(checked) classTablet += " checked";

  return (
      <li
        className={classTablet}
        onMouseOver={() => {
          setShowValues("show");
        }}
        onMouseOut={() => {
          setShowValues("hide");
        }}
      >
        <div data-tab-1 className="checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              setChecked(!checked);
              checkedValue(id);
            }}
          />
        </div>
        <div data-tab-2>{idEl}</div>
        <div data-tab-3>{task}</div>
        <div data-tab-4 className={`task-buttons ${showValues}`}>
          <button onClick={handleRemoveElement}>
            <i aria-hidden="true" className="trash alternate outline icon"></i>
          </button>
        </div>
      </li>
  );
}
