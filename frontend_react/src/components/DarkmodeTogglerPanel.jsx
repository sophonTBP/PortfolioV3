import React from 'react';
import { ThemeProvider, ThemeContext } from './../wrapper/ThemeContext';
import DarkToggle from './Navbar/DarkModeTogle';
const DarkTogglePanel = () => {

  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const text= colorMode !== "dark" ? 'Mode Sombre' : 'Mode Clair'
return (





  <div className="dark-panel"
  >


    <span
      data-text={text}
      className="tooltip"
    ><DarkToggle />
    </span>
  </div>)}
  ;

export default DarkTogglePanel;