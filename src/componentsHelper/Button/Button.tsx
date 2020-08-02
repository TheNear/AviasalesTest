import React from "react";
import style from "./Button.module.css";

function Button(): JSX.Element {
  return (
    <button type="button" className={`${style.button} ${style.active}`}>
      Самый дешевый
    </button>
  );
}

export default Button;
