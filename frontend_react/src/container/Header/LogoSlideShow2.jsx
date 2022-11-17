import './Header.scss';
import { COLORS } from '../../constants';
import { ThemeProvider, ThemeContext } from '../../wrapper/ThemeContext';
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";




export const LogoSlideShow = (props) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const themeColor = colorMode;
  const [items, setItems] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((items) => items + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);




 
  const len = props.slideShowArray.length;
  const index = items % len
  


  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5 } }}
        exit={{ opacity: 0 }}


        style={{ fontSize: 100 }}
        key={items}
      >
        {
          props.slideShowArray[index]}
      </motion.div>
    </AnimatePresence>
  )


}