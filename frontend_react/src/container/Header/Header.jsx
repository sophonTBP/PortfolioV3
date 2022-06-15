import React from 'react';
import { motion } from 'framer-motion';
import Portal from './PortalAnimation.jsx';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


let blackColor = getComputedStyle(document.documentElement)
.getPropertyValue('--black-color');
let whiteColor = getComputedStyle(document.documentElement)
.getPropertyValue('--white-color');
let secondary= getComputedStyle(document.documentElement)
.getPropertyValue('--secondary-color');
let secondaryLightColor = getComputedStyle(document.documentElement)
.getPropertyValue('--secondary-light-color');
let ternary = getComputedStyle(document.documentElement)
.getPropertyValue('--ternary-color');









const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1}}
      className="app__header-info"
    >
            
        <div className="tag-cmp app__flex">
          <p className="p-text cta-text">ENSEMBLE REALISONS VOS PROJETS</p>
          
        </div>
      <div  className="cta-button"><a href="#contact">CONTACTEZ NOUS</a></div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2.5, delayChildren: 2.5 }}
      className="app__header-img"
    >
      
      <Portal/>
      
    </motion.div>

   
  </div>
);

export default AppWrap(Header, 'acceuil');
