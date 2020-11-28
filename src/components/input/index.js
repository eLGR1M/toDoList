import React from "react";
import "./style.scss";

export default function Input( {value, onChange, type, placeholder = "Type in ...", autofocus = false, className = "input-style "} ) {
  return(
    <>
      <input className={className} value={value} onChange={onChange} type={type} placeholder={placeholder} autoFocus={autofocus}/>
    </>
  )
}