import React from "react";
import "./App.css";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";

function App(): JSX.Element {
  return (
    <div className={style.container}>
      <Header />
      <SearchPage />
    </div>
  );
}

export default App;
