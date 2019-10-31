import React from "react";
import { ITextPart } from "../../types";
import { FaBookmark } from "react-icons/fa";

export const TextPart: React.FC<ITextPart> = ({ textPart, className }) => {
  const x = 1;
  return (
    <div className={`TextPart ${className}`}>
      <div className="TextPart-Icon">
        <FaBookmark />
      </div>
      <p className="TextPart-Text">{textPart}</p>
    </div>
  );
};
