import React from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";

export const Header = () => {
  const x = 1;
  return (
    <header className="Header Block">
      <FaBars className="Col2" />
      <p className="Header-Logo Col8">RO</p>
      <FaUserAlt className="Col2" />
    </header>
  );
};
