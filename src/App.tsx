import React from "react";
import { Provider } from "react-redux";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={style.container}>
        <Header />
        <SearchPage />
      </div>
    </Provider>
  );
};

export default App;
