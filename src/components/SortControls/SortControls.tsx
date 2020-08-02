import React from "react";
import style from "./SortControls.module.css";
import Button from "../../componentsHelper/Button/Button";

const SortControls: React.FC = () => {
  return (
    <div className={style.sort}>
      <Button text="Самый дешевый" active />
      <Button text="Самый быстрый" />
    </div>
  );
};

export default SortControls;
