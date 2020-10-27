import React, { useCallback } from "react";
import style from "./SortControls.module.css";
import Button from "../../componentsHelper/Button/Button";
import { useQuery } from "../../hooks/useQuery";

interface IButtonStatus {
  [key: string]: string | undefined;
}

const buttonStatus: IButtonStatus = {
  by_price: "by_price",
  by_time: "by_time",
};

const SortControls: React.FC = () => {
  const { changeKeyValue, defValue } = useQuery("sort");

  const sortByDuration = () => {
    changeKeyValue("sort", "by_time");
  };

  const sortByPrice = () => {
    changeKeyValue("sort", "by_price");
  };

  const checkActiveButton = useCallback(
    (status: string, defActive = false): boolean => {
      const checkStatus = buttonStatus[defValue[0]];
      return checkStatus ? defValue[0] === status : defActive;
    },
    [defValue]
  );

  return (
    <div className={style.sort}>
      <Button
        text="Самый дешевый"
        active={checkActiveButton("by_price", true)}
        clickHandler={sortByPrice}
      />
      <Button
        text="Самый быстрый"
        active={checkActiveButton("by_time")}
        clickHandler={sortByDuration}
      />
    </div>
  );
};

export default SortControls;
