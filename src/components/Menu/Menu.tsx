import React from "react";
import { FaBars } from "react-icons/fa";
import { ISimpleComponent } from "../../types";

export const Menu: React.FC<ISimpleComponent> = ({ ...props }) => {
  return (
    <div {...props}>
      <FaBars />
    </div>
  );
};
