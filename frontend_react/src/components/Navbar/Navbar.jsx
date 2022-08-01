import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";
import DarkToggle from './DarkModeTogle';
import DarkCheck from './DarkModeCheck';
import { images } from '../../constants';
import './Navbar.module.scss';
import { COLORS } from '../../constants';
import { ThemeProvider, ThemeContext }from '../../wrapper/ThemeContext';;
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  return (
    <nav className="app__navbar">
     
        
      <ul className="app__navbar-links">
        {['acceuil', 'nos valeurs', 'realisations', 'offres', 'contact'].map((item) => (
          <li className="app__flex h-text" key={`link-${item}`}>

            <Link
              to={`${item}`}
              offset={-90}
              activeClass="active"
              spy={true}>
              {item}


            </Link>
          </li>
        ))}
      </ul>


      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['acceuil', 'nos valeurs', 'realisations', 'offres', 'contact'].map((item, index) => (
                <li key={item}>
                  <a href={`#${item}`}
                    key={item + index}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
