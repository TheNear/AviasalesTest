import React, { ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: boolean;
}

const Button: React.FC<IButton> = ({ text, active }) => {
  return (
    <button type="button" className={`${style.button} ${active ? style.active : ""}`}>
      {text}
    </button>
  );
};

export default Button;
