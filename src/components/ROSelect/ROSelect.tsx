import React from "react";
import { IROSelect } from "../../types";
import { FaChevronDown } from "react-icons/fa";

export const ROSelect: React.FC<IROSelect> = ({ selectOpt }) => {
  const selectOptions = selectOpt.map((item, i) => (
    <li key={i} className="ROSelect-Item">
      {item}
    </li>
  ));
  return (
    <div className="ROSelect">
      <p className="ROSelect-Button">
        <span className="ROSelect-Value">A</span>
        <span className="ROSelect-Icon">
          <FaChevronDown />
        </span>
      </p>
      <ul className="ROSelect-Options">{selectOptions}</ul>
    </div>
  );
};
