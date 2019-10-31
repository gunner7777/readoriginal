import React from "react";
import { IParentComponent } from "../../types";

export const BottomButton: React.FC<IParentComponent> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};
