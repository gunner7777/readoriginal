import React, { useState, useEffect } from "react";
import { Logo } from "../../Logo/Logo";
import { Menu } from "../../Menu/Menu";
import { Login } from "../../Login/Login";

export const Header = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = () => {
    let currentScrollPos: number = window.pageYOffset;
    //console.log("object", currentScrollPos);
    //console.log("object", prevScrollPos);
    if (!isSticky || currentScrollPos >= 50) {
      setIsSticky(!isSticky);
    } else {
      setIsSticky(!isSticky);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`Container ${isSticky ? "Header_Sticky" : ""}`}>
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
