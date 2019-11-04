import React from "react";
import { TextInfo } from "../../TextInfo/TextInfo";
import { OpenTextInfo } from "../../OpenTextInfo/OpenTextInfo";
import { TextPart } from "../../TextPart/TextPart";
import { TextForReading } from "../../TextForReading/TextForReading";
import { Button } from "../../Button/Button";
import { FaTimes } from "react-icons/fa";

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
          textName="Брендон Сандерсон. Путь королей"
        />
        <TextPart className="TextPart_Completed Col12" textPart="Часть 1" />
        <TextPart className="Col12" textPart="Часть 2" />

        <OpenTextInfo
          className="Content-OpenTextInfo Col12"
          textName="Брендон Сандерсон. Путь королей"
          partName="Часть 2"
        />
        <TextForReading>
          Sugar plum muffin cookie pastry oat cake icing candy canes chocolate.
          Gummi bears chupa chups fruitcake dessert jelly. Muffin cookie ice
          cream soufflé pastry lollipop gingerbread sweet. Unerdwear.com bonbon
          candy marzipan bonbon gummies chocolate cake gummi bears powder.
          Unerdwear.com tart halvah chocolate cake dragée liquorice. Sugar plum
          chocolate bar pastry liquorice dragée jelly powder. Jelly tootsie roll
          applicake caramels. Marzipan candy tootsie roll donut. Gummies ice
          cream macaroon applicake.
        </TextForReading>
        <Button className="Button-Success">Готово</Button>
        <Button className="Button_Small Button-Close">
          <FaTimes />
        </Button>
      </div>
    </div>
  );
};
