import React from "react";
import style from "./Loader.module.css";
import spinner from "../../assets/images/spinner.svg";

const Loader: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>Загружаем билеты...</p>
      <img className={style.image} src={spinner} alt="loader" />
    </div>
  );
};

export default Loader;
