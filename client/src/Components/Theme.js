import { css } from '@emotion/core';
import UseMobileView from '../hooks/useMobileView';

const theme = {
  black: '#383838',
  white: '#fffafa',
  lightGreen: '#a7d7c5',
  green: '#74b49b',
  darkGreen: '#5c8d89',
  lightPink: '#f5e1da',
  backgroundPink: '#ffdde1',
  backgroundCerise: '#ee9ca7',
  red: '#d47666',
  yellow: '#f8b500',
  lightRed: '#fcc6c9',
  lightGrey: '#f4f3f3',
  buttonGradient:
    'linear-gradient(315deg, rgba(238,156,167,1) 0%, rgba(237,148,160,1) 100%)',
  error: '#B6051F',
  border: `2px solid #383838`,
  boxShadow: '0 2px 6px 0 hsla(0, 0%, 0%, 0.15)',
  sansSerif: 'Open Sans, sans-serif',
  secondary: 'Luckiest Guy, sans-serif',
  serif: 'DM Serif Text, serif',
  isLarge: () => {
    const isLarge = UseMobileView();
    return isLarge;
  }
};

export const reset = css`
  body {
    background: linear-gradient(to right bottom, #fdf0f6, #fdebf2, #fee6ed, #ffe2e7, #ffdde1);
    background-attachment:fixed;
    height:100%;
    /* background: ${theme.bg}; */
    color: ${theme.black};
    font-family: ${theme.sansSerif};
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  html {
    font-size: 15px;
  }
  html * {
    box-sizing: border-box;
  }

  button, input, textarea, ul, li {
    margin: 0;
    border: 0;
    padding: 0;
    background: transparent;
    outline: 0;
    list-style: none;
    resize: none;
    box-shadow: none;
    &:not(output):-moz-ui-invalid:not(:focus),
    &:not(output):-moz-ui-invalid:focus,
    &:not(output):-moz-ui-invalid:-moz-focusring:not(:focus) {
      box-shadow: none;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
  /* Stupid. */
  body.menu-open {
    /* position: fixed; */
    height: 100%;
    overflow-y: hidden;
  }

`;

export default theme;
