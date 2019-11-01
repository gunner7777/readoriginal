import React from "react";
import { TextInfo } from "../../TextInfo/TextInfo";
import { OpenTextInfo } from "../../OpenTextInfo/OpenTextInfo";
import { TextPart } from "../../TextPart/TextPart";

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

        <OpenTextInfo
          className="Content-OpenTextInfo Col12"
          textName="Brandon Sanderson. Way of Kings"
        />
        <TextPart className="TextPart_Completed Col12" textPart="Часть 1" />
        <TextPart className="Col12" textPart="Часть 2" />
      </div>
    </div>
  );
};
