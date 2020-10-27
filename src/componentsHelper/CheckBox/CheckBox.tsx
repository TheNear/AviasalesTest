import React from "react";
import style from "./CheckBox.module.css";

interface ICheckBox {
  text: string;
  name: string;
  checked: boolean;
  clickHandler: () => void;
}

const CheckBox: React.FC<ICheckBox> = ({ text, name, checked, clickHandler }) => {
  return (
    <li>
      <label className={style.label} htmlFor={name}>
        <input
          type="checkbox"
          onChange={clickHandler}
          checked={checked}
          className={style.input}
          id={name}
          name={name}
          value={name}
        />
        <span className={style.checkbox} />
        {text}
      </label>
    </li>
  );
};

export default CheckBox;
