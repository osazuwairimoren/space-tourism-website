import React from "react";
import nav from "./nav.module.scss";
import logo from "../assets/shared/logo.svg";
import hamBurger from "../assets/shared/icon-hamburger.svg";
import closeBtn from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Nav(props) {
    let [openNav, setOpenNav] = useState(false);
    const openNavFunction = () => {
        setOpenNav(!openNav);
    };
    return (
        <>
            <div className={nav.deskTop}>
                <img src={logo} alt='logo' />
                <ul className={nav.navBar}>
                    <li>
                        <NavLink to='/'>00 home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/destinations'>01 destinations</NavLink>
                    </li>
                    <li>
                        <NavLink to='/crew'>02 crew</NavLink>
                    </li>
                    <li>
                        <NavLink to='/technology'>03 technology</NavLink>
                    </li>
                </ul>
            </div>

            {/* for mobile screens */}
            <div className={nav.mobile}>
                <div className={nav.header}>
                    <img src={logo} alt='logo' />
                    <img src={hamBurger} alt='open' onClick={openNavFunction} />
                </div>
                <ul
                    className={nav.mainMobileNav}
                    style={{
                        width: openNav === false ? "0" : "70%",
                        height: openNav === false ? "0" : "100%",
                    }}
                >
                    <li className={nav.closeBtn}>
                        <img
                            src={closeBtn}
                            alt='close'
                            onClick={openNavFunction}
                        />
                    </li>
                    <li>
                        <NavLink to='/'>00 home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/destinations'>01 destinations</NavLink>
                    </li>
                    <li>
                        <NavLink to='/crew'>02 crew</NavLink>
                    </li>
                    <li>
                        <NavLink to='/technology'>03 technology</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Nav;
