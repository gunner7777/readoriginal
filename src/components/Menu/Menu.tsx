import React from "react";
import { FaBars } from "react-icons/fa";
import { IParentComponent } from "../../types";

export const Menu: React.FC<IParentComponent> = ({ ...props }) => {
  return (
    <div {...props}>
      <FaBars />
    </div>
  );
};
