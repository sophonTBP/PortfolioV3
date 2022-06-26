import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { NavigationDots, SocialMedia } from './components';
import { About, Footer, Header, Work } from './container';
import { Navbar} from './components';
import DarkTogglePanel from './components/DarkmodeTogglerPanel';
import './App.scss';
import Offres from './container/Offres/Offres';
import {
  default as COLORS, COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP
} from './constants/Themes';
import { ThemeProvider } from './wrapper/ThemeContext';
/* class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
} */
const setColorsByTheme = () => {
  const colors = COLORS;
  const colorModeKey = COLOR_MODE_KEY;
  const colorModeCssProp = INITIAL_COLOR_MODE_CSS_PROP;

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}


setColorsByTheme()
const App = () =>

  


    (

      <div className="app" >
<ThemeProvider>
      <GlobalStyles />
        <Navbar />
        <NavigationDots />
        <DarkTogglePanel/>
        <Header />
        <About />
        <Work />
        <Offres />



        <Footer />
  </ThemeProvider>
      </div>
    );

export default App;
