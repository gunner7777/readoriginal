import React from "react";
import { IImage } from "../../types";

export const ImageView: React.FC<IImage> = ({
  imgUrl,
  className,
  ...props
}) => {
  return (
    <>
      <img
        className={`ImageView ${className}`}
        {...props}
        src={imgUrl}
        alt="image view"
      />
    </>
  );
};
