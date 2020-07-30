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
            <h3 className="filter__title">Количество пересадок</h3>
            <ul className="filter__list">
              <li className="filter__item">
                <label
                  className="filter__item__label"
                  htmlFor="filter__all-transfer"
                >
                  <input
                    type="checkbox"
                    className="filter__item__input"
                    id="filter__all-transfer"
                    name="filter__all-transfer"
                    value="all-transfer"
                  />
                  Все
                </label>
              </li>
              <li className="filter__item">
                <label
                  className="filter__item__label"
                  htmlFor="filter__without-transfer"
                >
                  <input
                    type="checkbox"
                    className="filter__item__input"
                    id="filter__without-transfer"
                    name="filter__without-transfer"
                    value="without-transfer"
                  />
                  Без пересадок
                </label>
              </li>
              <li className="filter__item">
                <label
                  className="filter__item__label"
                  htmlFor="filter__one-transfer"
                >
                  <input
                    type="checkbox"
                    className="filter__item__input"
                    id="filter__one-transfer"
                    name="filter__one-transfer"
                    value="one-transfer"
                  />
                  1 пересадка
                </label>
              </li>
              <li className="filter__item">
                <label
                  className="filter__item__label"
                  htmlFor="filter__two-transfer"
                >
                  <input
                    type="checkbox"
                    className="filter__item__input"
                    id="filter__two-transfer"
                    name="filter__two-transfer"
                    value="two-transfer"
                  />
                  2 пересадки
                </label>
              </li>
              <li className="filter__item">
                <label
                  className="filter__item__label"
                  htmlFor="filter__three-transfer"
                >
                  <input
                    type="checkbox"
                    className="filter__item__input"
                    id="filter__three-transfer"
                    name="filter__three-transfer"
                    value="three-transfer"
                  />
                  3 пересадки
                </label>
              </li>
            </ul>
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
