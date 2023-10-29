import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.scss'

const NavSideBar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-32 m-0 flex flex-col bg-black text-white shadow-lg border-2 border-red-500">
      <Link to="">
        <p className="relative flex items-center justify-center border-2 border-red-500">
          Raul Lorenzo
        </p>
      </Link>
      <ul className="border-2 border-red-500">
        <li className="nav-item border-2 border-red-500">
          <Link
            activeClass="active"
            to="statement"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Statement
          </Link>
        </li>
        <li className="nav-item border-2 border-red-500">
          <Link
            activeClass="active"
            to="dos"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Dos
          </Link>
        </li>
        <li className="nav-item border-2 border-red-500">
          <Link
            activeClass="active"
            to="tres"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Tres
          </Link>
        </li>
        <li className="nav-item border-2 border-red-500">
          <Link
            activeClass="active"
            to="cuatro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Cuatro
          </Link>
        </li>
        <li className="nav-item border-2 border-red-500">
          <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default NavSideBar;
