import React from "react";
import { ITextForReading } from "../../types";

export const TextForReading: React.FC<ITextForReading> = ({ children }) => {
  return <div className="TextForReading">{children}</div>;
};
