import React from "react";
import { ITextInfo } from "../../types";
import { ImageView } from "../ImageView/ImageView";

export const TextInfo: React.FC<ITextInfo> = ({
  imgUrl,
  textAuthor,
  textTitle,
  className
}) => {
  return (
    <div className={`TextInfo ${className}`}>
      <ImageView className="ImageView_Round TextInfo-Img" imgUrl={imgUrl} />
      <div className="TextInfo-About">
        <p className="TextInfo-Author">{textAuthor}</p>
        <p className="TextInfo-Title">{textTitle}</p>
      </div>
    </div>
  );
};
