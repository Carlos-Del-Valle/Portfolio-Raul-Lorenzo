import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.scss'

const NavSideBarWritings = () => {
  return (
    <nav className="sticky top-16 self-start left-0 w-56 m-0 shadow-lg border border-violet-500 ">
        <ul className=" my-12 flex flex-col space-y-8">
          
          {/* 1 - Given Time */}
          <li>
            <Link
              activeClass="active"
              to="giventime"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap nav-item"
              
            >
              Given Time
            </Link>
          </li>
          {/* 2 - Hacer Despues */}
          <li>
            <Link
              activeClass="active"
              to="hacerdespues"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap nav-item"
              
            >
              Hacer Después
            </Link>
          </li>
          {/*3 - Un Puente Une */}
          <li>
            <Link
              activeClass="active"
              to="unpuenteune"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap nav-item"
              
              
            >
              Un Puente Une
            </Link>
          </li>
          {/* 4 - Formas de Empezar un Cuento */}
          <li>
            <Link
              activeClass="active"
              to="formasdeempezaruncuento"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap text-[11px] nav-item"
             
            >
              Formas de Empezar un Cuento
            </Link>
          </li>
          {/* 5 - Corazon Y Ornamento */}
          <li>
            
            <Link
              activeClass="active"
              to="corazayornamento"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap nav-item"
              
            >
              Coraza y Ornamento
            </Link>
          </li>
      
          
        </ul>
      
    </nav>
  );
};

export default NavSideBarWritings;