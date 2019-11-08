import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { IROSelect } from "../../types";
import { MdArrowDropDown } from "react-icons/md";

// жмем на кнопку, появлятся список
// в списке выбираем нужное, список исчезает, значение меняется

export const ROSelect: React.FC<IROSelect> = ({ selectOpt }) => {
  //const [selectOptions, setSelectOptions] = useState(selectOpt);
  const selectRef = useRef<HTMLSelectElement>(null);

  useLayoutEffect(() => {
    selectOpt.forEach(item => {
      if (selectRef.current) {
        selectRef.current.add(new Option(item.text, item.value));
      }
    });
  });

  const handleChange = () => {};

  return (
    <div className="ROSelect-Outer">
      <select
        className="ROSelect"
        onClick={handleChange}
        name=""
        id="roselect"
        ref={selectRef}
      ></select>
      <MdArrowDropDown className="ROSelect-Icon" />
    </div>
  );
};
