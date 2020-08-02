import React from "react";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import SortControls from "../../components/SortControls/SortControls";
import TicketsList from "../../components/TicketsList/TicketsList";

function SearchPage(): JSX.Element {
  return (
    <main className={style.container}>
      <Filter />
      <SortControls />
      <TicketsList />
    </main>
  );
}

export default SearchPage;
