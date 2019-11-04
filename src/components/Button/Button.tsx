import React from "react";
import { IButton } from "../../types";

export const Button: React.FC<IButton> = ({ children, className }) => {
  return <button className={`Button ${className}`}>{children}</button>;
};
