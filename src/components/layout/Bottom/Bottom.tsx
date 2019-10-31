import React from "react";
import { BottomButton } from "../../BottomButton/BottomButton";
import { FaBook, FaList } from "react-icons/fa";

export const Bottom = () => {
  const x = 1;
  return (
    <div className="Block No-Gutters">
      <BottomButton className="BottomButton Col6 Text_Center">
        <FaList className="BottomButton-Icon" />
        <span className="BottomButton-Text">Contents</span>
      </BottomButton>
      <BottomButton className="BottomButton Col6">
        <FaBook className="BottomButton-Icon" />
        <span className="BottomButton-Text">Dictionary</span>
      </BottomButton>
    </div>
  );
};
