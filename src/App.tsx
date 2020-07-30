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
          <div className="filter-inner">
            21323sjadjaskdbasjkdjkashdjkshadjkhasjkdhjsadhjksahdjk
          </div>
        </div>
        <div className="sort">
          Lorem ipsum dolor sit amet. ASfsd sadfds sfds sfsda.
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
