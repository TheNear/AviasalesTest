import React, { ButtonHTMLAttributes } from "react";
import { useQuery } from "../../hooks/useQuery";
import style from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: boolean;
}

const Button: React.FC<IButton> = ({ text, active }) => {
  const q = useQuery();

  // console.log(q.getQuery);

  return (
    <button
      onClick={() => {
        // q.changeUrl("filter", "54245");
        // q.getParam();
        q.paramToggle("filter", "13212", true);
        // q.isParamArray();
        // q.setParam("filter", "by_price");
      }}
      type="button"
      className={`${style.button} ${active ? style.active : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
