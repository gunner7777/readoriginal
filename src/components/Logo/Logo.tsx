import React from "react";
import { ILogo } from "../../types";

export const Logo: React.FC<ILogo> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};
