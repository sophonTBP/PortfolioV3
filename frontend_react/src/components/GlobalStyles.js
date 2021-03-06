
import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family:"Catamaran"  Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
  }
  a {
    color: var(--color-secondary);
  }
`;

export default GlobalStyles;