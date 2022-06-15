import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link,  animateScroll as scroll } from "react-scroll";

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">

      <ul className="app__navbar-links">
        {['acceuil', 'valeurs', 'realisations', 'offres', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>

            <Link
              to={`${item}`}
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
              {['acceuil', 'valeurs', 'realisations', 'offres', 'contact'].map((item, index) => (
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