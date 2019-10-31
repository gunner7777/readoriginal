import React from "react";
import { ISimpleComponent } from "../../types";

export const Logo: React.FC<ISimpleComponent> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};
