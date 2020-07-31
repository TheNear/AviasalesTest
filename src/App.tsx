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
                  <span className="filter__item__checkbox" />
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
                  <span className="filter__item__checkbox" />
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
                  <span className="filter__item__checkbox" />1 пересадка
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
                  <span className="filter__item__checkbox" />2 пересадки
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
                  <span className="filter__item__checkbox" />3 пересадки
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="sort">
          <button type="button" className="sort__button active">
            Самый дешевый
          </button>
          <button type="button" className="sort__button">
            Самый быстрый
          </button>
        </div>
        <div className="tickets">
          <div className="ticket">
            <div className="ticket__price">13 400 P</div>
            <img
              className="ticket__img"
              src="http://pics.avs.io/99/36/S7.png"
              alt="airport"
            />
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticket__price">13 400 P</div>
            <img
              className="ticket__img"
              src="http://pics.avs.io/99/36/S7.png"
              alt="airport"
            />
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
          </div>
          <div className="ticket">
            <div className="ticket__price">13 400 P</div>
            <img
              className="ticket__img"
              src="http://pics.avs.io/99/36/S7.png"
              alt="airport"
            />
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
            <div className="ticket__info">
              <div className="ticket__info__title">В пути</div>
              <div className="ticket__info__text">10:50 - 08:00</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
