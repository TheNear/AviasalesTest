import React from "react";
import commonStyle from "../../assets/css/common.module.css";
import style from "./Error.module.css";

interface IError {
  refreshTicketsList: () => void;
}

const Error: React.FC<IError> = ({ refreshTicketsList }) => {
  return (
    <div className={`${commonStyle.box} ${style.wrapper}`}>
      <p className={style.text}>Ошибка загрузки билетов!</p>
      <button onClick={refreshTicketsList} className={style.button} type="button">
        Попробовать еще раз?
      </button>
    </div>
  );
};

export { Error };
