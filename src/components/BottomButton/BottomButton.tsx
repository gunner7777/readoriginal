import React from "react";
import { ISimpleComponent } from "../../types";

export const BottomButton: React.FC<ISimpleComponent> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};
