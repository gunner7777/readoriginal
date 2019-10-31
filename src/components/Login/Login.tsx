import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { ISimpleComponent } from "../../types";

export const Login: React.FC<ISimpleComponent> = ({ ...props }) => {
  return (
    <div {...props}>
      <FaUserAlt className="Login-Icon" />
    </div>
  );
};
