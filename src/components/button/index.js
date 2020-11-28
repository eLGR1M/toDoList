import React from "react";
import "./style.scss";

export default function Button( {textBtn = 'button', classBtn = '', onClickBtn} ) {
  const classBtnConst = `buttonDefault ${classBtn}`;
  return(
    <>
      <button onClick={onClickBtn} className={classBtnConst}><h4 data-textBtn>{textBtn}</h4></button>
    </>
  )
}