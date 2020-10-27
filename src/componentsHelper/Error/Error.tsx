import React from "react";
import { useSelector } from "react-redux";
import commonStyle from "../../assets/css/common.module.css";
import { RootState } from "../../types/redux";
import style from "./Error.module.css";

interface IError {
  refreshTicketsList: () => void;
}

type ErrorMapType = {
  [string: string]: string;
};

const errorMap: ErrorMapType = {
  "timeout of 1500ms exceeded": "Истекло время ожидания! (timeout)",
  "Request failed with status code 404": "Сервер не отвечает! (404)",
  "Request failed with status code 500": "Ошибка ответа сервера! (505)",
};

const Error: React.FC<IError> = ({ refreshTicketsList }) => {
  const error = useSelector((state: RootState) => state.tickets.error);

  return (
    <div className={`${commonStyle.box} ${style.wrapper}`}>
      <p className={style.text}>{errorMap[error] ? errorMap[error] : "Неизвестная ошибка!"}</p>
      <button onClick={refreshTicketsList} className={style.button} type="button">
        Попробовать еще раз?
      </button>
    </div>
  );
};

export { Error };
