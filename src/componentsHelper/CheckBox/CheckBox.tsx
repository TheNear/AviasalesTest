import React from "react";
import style from "./CheckBox.module.css";

function CheckBox(): JSX.Element {
  return (
    <li>
      <label className={style.label} htmlFor="filter__all-transfer">
        <input
          type="checkbox"
          className={style.input}
          id="filter__all-transfer"
          name="filter__all-transfer"
          value="all-transfer"
        />
        <span className={style.checkbox} />
        Все
      </label>
    </li>
  );
}

export default CheckBox;
