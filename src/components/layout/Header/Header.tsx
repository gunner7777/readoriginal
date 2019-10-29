import React from "react";
import "./Header.scss";
import { FaBars, FaUserAlt } from "react-icons/fa";

export const Header = () => {
  const x = 1;
  return (
    <header>
      <FaBars />
      <p className="logo">RO</p>
      <FaUserAlt />
    </header>
  );
};
