import React from "react";
import style from "./Filter.module.css";
import commonStyle from "../../assets/css/common.module.css";
import CheckBox from "../../componentsHelper/CheckBox/CheckBox";
import { filterList } from "./filterList";
import { useQuery } from "../../hooks/useQuery";

const Filter: React.FC = () => {
  const { defValue, queryToggle, queryRemove } = useQuery("filter");

  return (
    <div className={style.filter}>
      <div className={`${style.wrapper} ${commonStyle.box}`}>
        <h3 className={style.title}>Количество пересадок</h3>
        <ul>
          {filterList.map(({ name, text, value }) => (
            <CheckBox
              key={name}
              clickHandler={() => {
                if (value && value !== "all") {
                  queryToggle("filter", value);
                } else {
                  queryRemove("filter");
                }
              }}
              checked={defValue.includes(value) || (!defValue.length && value === "all")}
              text={text}
              name={name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
