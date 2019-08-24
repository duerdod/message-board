import { css } from '@emotion/core';

const theme = {
  black: '#383838',
  white: '#fdfdfd',
  whiteVariant: '#f8f8f8',
  green: '#74b49b',
  darkGreen: '#5c8d89',
  lightPink: '#f5e1da',
  red: '#d47666',
  yellow: '#f8b500',
  lightRed: '#fcc6c9',
  lightGrey: '#fafafa',
  grey: '#7f7f7f',
  buttonGradient:
    'linear-gradient(315deg, rgba(238,156,167,1) 0%, rgba(237,148,160,1) 100%)',
  error: '#B6051F',
  boxShadow: '0 2px 6px 0 hsla(0, 0%, 0%, 0.09)',
  sansSerif: 'Open Sans, sans-serif',
  secondary: 'Luckiest Guy, sans-serif',
  serif: 'DM Serif Text, serif'
};

export const reset = css`
  body {
    /* background: linear-gradient(320deg, rgba(255,234,236,1) 27%, rgba(255,241,243,1) 55%); */
    background: ${theme.white};
    background-attachment: fixed;
    height:100%;
    /* background: ${theme.bg}; */
    color: ${theme.black};
    font-family: ${theme.sansSerif};
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  html {
    text-rendering: optimizeLegibility;
    font-size: 15px;
  }
  html * {
    box-sizing: border-box;
    &::selection {
      background: ${theme.green};
      color: ${theme.white};
    }
  }

  button, input, textarea, ul, li, p, h1,h2,h3,h4,h5 {
    margin: 0;
    border: 0;
    padding: 0;
    background: transparent;
    outline: 0;
    list-style: none;
    resize: none;
    box-shadow: none;
    font-weight: 400;
    &:not(output):-moz-ui-invalid:not(:focus),
    &:not(output):-moz-ui-invalid:focus,
    &:not(output):-moz-ui-invalid:-moz-focusring:not(:focus) {
      box-shadow: none;
    }
  }
    @media (pointer: coarse)  {
        input, textarea {
          font-size: 1.1rem !important;
          &::placeholder {
            font-size: 0.85rem;
          }
        }
      }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
  /* Stupid. */
  body.menu-open {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
  }

`;

export default theme;
