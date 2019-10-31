import React from "react";
import { IParentComponent } from "../../types";

export const Logo: React.FC<IParentComponent> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};
