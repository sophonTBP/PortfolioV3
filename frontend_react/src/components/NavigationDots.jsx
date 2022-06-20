/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link, animateScroll as scroll } from "react-scroll";
import React from 'react';

const NavigationDots = ({ active }) => (
 
  <div className="app__navigation">
    
    {['acceuil', 'nos valeurs', 'realisations', 'offres' , 'contact'].map((item, index) => (
      <Link
      key={item}
      to={`${item}`}
      offset={-90}
        className="app__navigation-dot"
        activeClass="active"
              spy={true}
      ></Link>
    ))}
  </div>
 
);

export default NavigationDots;
