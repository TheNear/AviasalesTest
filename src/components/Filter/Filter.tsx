import React from "react";
import style from "./Filter.module.css";
import CheckBox from "../../componentsHelper/CheckBox/CheckBox";

function Filter(): JSX.Element {
  return (
    <div className={style.filter}>
      <div className={style.wrapper}>
        <h3 className={style.title}>Количество пересадок</h3>
        <ul>
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </ul>
      </div>
    </div>
  );
}

export default Filter;
