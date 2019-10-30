import React from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Logo } from "../../Logo/Logo";

export const Header = () => {
  const x = 1;
  return (
    <header className="Header Block">
      <FaBars className="TopMenu Col2" />
      <Logo className="Logo Col8">RO</Logo>
      <FaUserAlt className="UserLogin Col2" />
    </header>
  );
};
