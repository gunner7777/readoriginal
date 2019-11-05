import React from "react";
import { IWordTranslation } from "../../types";
import { Button } from "../Button/Button";
import { FaTimes } from "react-icons/fa";

export const WordTranslation: React.FC<IWordTranslation> = ({
  engWord,
  translations
}) => {
  const translationWords = translations.map((item, i) => (
    <li key={i}>- {item}</li>
  ));
  return (
    <div className="WordTranslation">
      <Button className="Button_Small Button-Close Button_RightTop">
        <FaTimes />
      </Button>
      <p className="WordTranslation-EngWord">{engWord}</p>
      <p>Варианты перевода:</p>
      <ul className="WordTranslation-Translations">{translationWords}</ul>
    </div>
  );
};
