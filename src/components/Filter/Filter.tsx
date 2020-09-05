import React from "react";
import style from "./Filter.module.css";
import commonStyle from "../../assets/css/common.module.css";
import CheckBox from "../../componentsHelper/CheckBox/CheckBox";
import { filterList, IFilterItem } from "./filterList";

const Filter: React.FC = () => {
  return (
    <div className={style.filter}>
      <div className={`${style.wrapper} ${commonStyle.box}`}>
        <h3 className={style.title}>Количество пересадок</h3>
        <ul>
          {filterList.map((filter: IFilterItem) => (
            <CheckBox key={filter.name} text={filter.text} name={filter.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
