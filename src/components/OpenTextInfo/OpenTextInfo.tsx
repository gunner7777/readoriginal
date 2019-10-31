import React from "react";
import { FaBookReader } from "react-icons/fa";
import { IOpenTextInfo } from "../../types";

export const OpenTextInfo: React.FC<IOpenTextInfo> = ({ textName }) => {
  return (
    <div className="OpenTextInfo Col12">
      <p>
        <FaBookReader className="OpenTextInfo-TextImg" />
      </p>
      <p className="OpenTextInfo-TextName">{textName}</p>
    </div>
  );
};
