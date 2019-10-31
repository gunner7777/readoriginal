import React from "react";
import { FaBookReader } from "react-icons/fa";
import { IOpenTextInfo } from "../../types";

export const OpenTextInfo: React.FC<IOpenTextInfo> = ({
  textName,
  className
}) => {
  return (
    <div className={`OpenTextInfo ${className}`}>
      <p>
        <FaBookReader className="OpenTextInfo-TextImg" />
      </p>
      <p className="OpenTextInfo-TextName">{textName}</p>
    </div>
  );
};
