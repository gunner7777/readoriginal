import React, { useRef, useLayoutEffect } from "react";
import { IROSelect } from "../../types";
import { MdArrowDropDown } from "react-icons/md";

// жмем на кнопку, появлятся список
// в списке выбираем нужное, список исчезает, значение меняется

export const ROSelect: React.FC<IROSelect> = ({ selectOpt }) => {
  // useRef
  const selectRef = useRef<HTMLSelectElement>(null);
  //let selectElement: HTMLSelectElement = selectRef;
  let selOptions: HTMLOptionsCollection;
  //console.log(selectRef);
  useLayoutEffect = () => {
    handleChange();
  }
  const handleChange = () => {
    //let selectElement: HTMLSelectElement = selectRef;
    //let selOptions: HTMLOptionsCollection;
    console.log('change ', selectRef.current);
    if(selectRef.current) {
      selectOpt.map(item => {
        return selectRef.current.add(new Option(item.text, item.value));
      }); 
    }
  }

  /* selectOpt.map(item => {
      return selectElement.add(new Option(item.text, item.value));
  }); */

  //const handleClick = () => {};

  return (
    <div className="ROSelect">
      <select onClick={handleChange}  name="" id="roselect" ref={selectRef}>
        <option>1</option>
      </select>
    </div>
  );
};
