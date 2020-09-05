import React from "react";
import style from "./CheckBox.module.css";

interface ICheckBox {
  text: string;
  name: string;
}

const CheckBox: React.FC<ICheckBox> = ({ text, name }) => {
  return (
    <li>
      <label className={style.label} htmlFor={name}>
        <input type="checkbox" className={style.input} id={name} name={name} value={name} />
        <span className={style.checkbox} />
        {text}
      </label>
    </li>
  );
};

export default CheckBox;
