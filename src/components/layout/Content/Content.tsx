import React from "react";
import { TextInfo } from "../../TextInfo/TextInfo";
import { OpenTextInfo } from "../../OpenTextInfo/OpenTextInfo";

export const Content = () => {
  return (
    <div className="Content-Outer Container">
      <div className="Content Block">
        <TextInfo
          className="Col12"
          imgUrl="./images/138728.jpg"
          textAuthor="Брендон Сандерсон"
          textTitle="Путь королей"
        />
        <TextInfo
          className="Col12"
          imgUrl="./images/138729.jpg"
          textAuthor="Брендон Сандерсон"
          textTitle="Слова сияния"
        />

        <OpenTextInfo textName="Brandon Sanderson. Way of Kings" />
      </div>
    </div>
  );
};
