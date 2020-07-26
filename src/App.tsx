import React from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";

function App(): JSX.Element {
  return (
    <div className="main-wrapper">
      <header className="header">
        <img className="header__logo" src={logo} alt="Site logo" />
      </header>
      <main className="content-wrapper">
        <div className="filter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,accusamus!
        </div>
        <div className="sort">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, officiis.
        </div>
        <div className="tickets">
          <div className="ticket">sdafsadf</div>
          <div className="ticket">sdafsadf</div>
          <div className="ticket">sdafsadf</div>
        </div>
      </main>
    </div>
  );
}

export default App;
