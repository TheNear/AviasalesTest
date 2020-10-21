import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";
import store from "./redux/store";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className={style.container}>
          <Header />
          <SearchPage />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
