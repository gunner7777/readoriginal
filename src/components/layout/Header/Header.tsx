import React, { useState, useEffect } from "react";
import { Logo } from "../../Logo/Logo";
import { Menu } from "../../Menu/Menu";
import { Login } from "../../Login/Login";

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const handleScroll = () => {
    let currentScrollPos: number = window.pageYOffset;
    console.log("object", currentScrollPos);
    /* if (currentScrollPos !== prevScrollPos) {
      setPrevScrollPos(prevScrollPos + 11);
      console.log("qeqw", prevScrollPos);
    } */
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
