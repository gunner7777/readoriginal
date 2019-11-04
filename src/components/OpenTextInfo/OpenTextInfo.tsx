import React from "react";
import { FaBookReader } from "react-icons/fa";
import { IOpenTextInfo } from "../../types";

export const OpenTextInfo: React.FC<IOpenTextInfo> = ({
  textName,
  className,
  partName
}) => {
  return (
    <div className={`OpenTextInfo ${className}`}>
      <p>
        <FaBookReader className="OpenTextInfo-TextImg" />
      </p>
      <div>
        <p className="OpenTextInfo-TextName">{textName}</p>
        {partName && <p className="OpenTextInfo-PartName">{partName}</p>}
      </div>
    </div>
  );
};
