import React, { useState, useEffect } from "react";
import { Logo } from "../../Logo/Logo";
import { Menu } from "../../Menu/Menu";
import { Login } from "../../Login/Login";

export const Header = () => {
  /* const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = () => {
    let currentScrollPos: number = window.pageYOffset;
    console.log("d", currentScrollPos);
    currentScrollPos >= 50 ? setIsSticky(true) : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isSticky]);
 */
  return (
    <div className="Container Header_Sticky">
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
