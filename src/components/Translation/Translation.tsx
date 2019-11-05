import React from "react";
import { IParentComponent } from "../../types";

export const Translation: React.FC<IParentComponent> = ({ children }) => {
  return (
    <a href="#" className="Translation">
      {children}
    </a>
  );
};
