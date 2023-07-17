import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { VscThreeBars } from "react-icons/vsc";
import { CgShoppingBag } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const [ShowMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [isMobile]);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Eshop</span>
      </div>

      <div className={css.right}>
        <div
          className={css.bars}
          onClick={toggleMenu}
          style={{ display: ShowMenu ? "none" : "inherit" }}
        >
          <VscThreeBars />
        </div>

        <ul
          className={css.menu}
          style={{ display: ShowMenu ? "inherit" : "none" }}
        >
          <li onClick={toggleMenu}>
            <VscThreeBars style={{ display: isMobile ? "inherit" : "none" }} />
          </li>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
