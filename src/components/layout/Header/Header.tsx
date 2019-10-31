import React from "react";
import { Logo } from "../../Logo/Logo";
import { Menu } from "../../Menu/Menu";
import { Login } from "../../Login/Login";

export const Header = () => {
  const x = 1;
  return (
    <div className="Container">
      <header className="Header Block No-Gutters Text_Center">
        <Menu className="Menu Col2" />
        <Logo className="Logo Col8">
          <a className="Logo-Link" href="/">
            RO
          </a>
        </Logo>
        <Login className="Login Col2" />
      </header>
    </div>
  );
};
