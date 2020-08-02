import React from "react";
import logo from "../../assets/images/logo.svg";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="Site logo" />
    </header>
  );
};

export default Header;
