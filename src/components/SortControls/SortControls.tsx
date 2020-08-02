import React from "react";
import style from "./SortControls.module.css";
import Button from "../../componentsHelper/Button/Button";

function SortControls(): JSX.Element {
  return (
    <div className={style.sort}>
      {/* <button type="button" className="sort__button active">
        Самый дешевый
      </button>
      <button type="button" className="sort__button">
        Самый быстрый
      </button> */}
      <Button />
      <Button />
    </div>
  );
}

export default SortControls;
