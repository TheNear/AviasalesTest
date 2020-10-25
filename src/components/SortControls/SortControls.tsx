import React from "react";
import style from "./SortControls.module.css";
import Button from "../../componentsHelper/Button/Button";
import { useQuery } from "../../hooks/useQuery";

const SortControls: React.FC = () => {
  const query = useQuery();

  const sortByDuration = () => {
    query.queryPush("sort", "by_time");
  };

  const sortByPrice = () => {
    query.queryPush("sort", "by_price");
  };

  return (
    <div className={style.sort}>
      <Button text="Самый дешевый" active clickHandler={sortByPrice} />
      <Button text="Самый быстрый" clickHandler={sortByDuration} />
    </div>
  );
};

export default SortControls;
