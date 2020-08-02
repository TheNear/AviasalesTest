import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <SearchPage />
    </div>
  );
};

export default App;
