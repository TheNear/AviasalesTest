import React from "react";
import { useHistory } from "react-router";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";

const SearchPage: React.FC = () => {
  const history = useHistory();

  console.log(history.location);

  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList />
    </main>
  );
};

export default SearchPage;
