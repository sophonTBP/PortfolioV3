import React from 'react';
import { NavigationDots, SocialMedia } from './components';
import { About, Footer, Header, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Offres from './container/Offres/Offres';
import COLORS from './constants/Themes';

class ErrorBoundary extends React.Component {
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
}

const App = () => (
  <div className="app" style={{ "-ms-overflow-style": "none",  /* IE and Edge */
  scrollbarWidth: "none",  /* Firefox */

  "--font-base": ["Catamaran","DM Sans", "sans-serif"] , 
  
  "--primary-color": COLORS.primary,
  "--secondary-color": COLORS.secondary,
  "--secondary-light-color": COLORS.secondaryLight,
  "--ternary-color": COLORS.ternary,
  "--black-color": COLORS.black,
  "--dark-color":COLORS.dark,
  "--lightGray-color":COLORS.lightGray,
  "--gray-color": COLORS.gray,
  "--brown-color": COLORS.brown,
  "--white-color": COLORS.white,
  }}>
    <ErrorBoundary>
      <Navbar />
      <NavigationDots /> 


      <Header />
      <About />
      <Work />
      <Offres />


      {/* <Testimonial /> */}
      <Footer />
    </ErrorBoundary>
  </div>
);

export default App;
