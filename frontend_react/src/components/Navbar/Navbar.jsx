import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";
import DarkToggle from './DarkModeTogle';
import DarkCheck from './DarkModeCheck';
import { images } from '../../constants';
import './Navbar.scss';
import { COLORS } from '../../constants';
import { ThemeProvider, ThemeContext }from '../../wrapper/ThemeContext';;
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  return (
    <nav className="app__navbar">
      <div className='logo'>
        <svg width="45" viewBox="0 0 889 1152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 1209.39L463.747 157L614.612 499.721L662.287 623.896C516.21 654.332 398.147 699.869 234.193 776.986" stroke="hsl(0, 80%, 2%)"  strokeWidth="132.283" strokeLinecap="round" />
          <path d="M777.227 718.232C758.913 719.375 740.449 721.173 721.818 723.82C579.003 744.112 414.709 804.118 268.275 899.531L181.564 1116.67C204.223 1094.01 228.463 1072.41 254.045 1051.97C401.282 934.332 590.733 858.499 738.469 837.508C762.593 834.08 786.431 832.215 809.93 831.822C814.227 831.75 818.503 831.77 822.777 831.796L777.227 718.232Z" stroke={COLORS.bg[colorMode]} fill="#feecba" strokeWidth="0.83102" />
          <path d="M819.838 881.703L820.234 881.701C823.768 881.691 827.29 881.724 830.798 881.798C834.16 881.869 837.506 881.995 840.845 882.145L888.632 1001.28C863.05 996.007 835.837 993.979 806.884 995.588C791.7 996.432 776.043 998.268 759.896 1001.15C631.758 1024.03 501.414 1069.22 401.375 1136.25L228.07 1136.67C253.093 1109.33 280.868 1084.45 310.632 1062.15C433.229 970.271 589.306 916.04 740.912 888.968C767.819 884.164 794.168 881.805 819.838 881.703Z"stroke={COLORS.bg[colorMode]} fill="#feecba" />
        </svg><p className='h-text'>Paax.Agency</p>
      </div>
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
