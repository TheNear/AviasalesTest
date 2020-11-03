import React from "react";
import style from "./Filter.module.css";
import commonStyle from "../../assets/css/common.module.css";
import CheckBox from "../../componentsHelper/CheckBox/CheckBox";
import { filterList } from "./filterList";
import { useQuery } from "../../hooks/useQuery";
import { FilterQuery } from "../../types/sortfilter";

const Filter: React.FC = () => {
  const { defaultValue, toggleValue, setValue } = useQuery<FilterQuery>("filter");

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
                  toggleValue("filter", value);
                } else {
                  setValue("filter", []);
                }
              }}
              checked={defaultValue.includes(value) || (!defaultValue.length && value === "all")}
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
