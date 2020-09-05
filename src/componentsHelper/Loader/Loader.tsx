import React from "react";
import style from "./Loader.module.css";
import commonStyle from "../../assets/css/common.module.css";
import spinner from "../../assets/images/spinner.svg";

const Loader: React.FC = () => {
  return (
    <div className={`${style.wrapper} ${commonStyle.box}`}>
      <p className={style.text}>Загружаем билеты...</p>
      <img className={style.image} src={spinner} alt="loader" />
    </div>
  );
};

export { Loader };
