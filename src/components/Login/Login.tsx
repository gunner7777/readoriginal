import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IParentComponent } from "../../types";

export const Login: React.FC<IParentComponent> = ({ ...props }) => {
  return (
    <div {...props}>
      <FaUserAlt className="Login-Icon" />
    </div>
  );
};
