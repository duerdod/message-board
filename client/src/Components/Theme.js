import { css } from '@emotion/core';

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
  redGradient: '#f97a82, #f27179, #eb6970, #e46067, #dd575e',
  error: '#B6051F',
  border: `2px solid #383838`,
  boxShadow: '0 2px 6px 0 hsla(0, 0%, 0%, 0.2)',
  sansSerif: 'Open Sans, sans-serif',
  secondary: 'Luckiest Guy, sans-serif',
  serif: 'DM Serif Text, serif'
};

export const buttonGradient = `
    background: linear-gradient(
    to right bottom,
      ${theme.redGradient} 
    );
`;

export const reset = css`
  body {
    background: linear-gradient(to right bottom, #fdf0f6, #fdebf2, #fee6ed, #ffe2e7, #ffdde1);
    background-attachment:fixed;
    height:100%;
    /* background: ${theme.bg}; */
    color: ${theme.black};
    font-family: ${theme.sansSerif};
  }
  html {
    font-size: 15px;
  }
  html * {
    box-sizing: border-box;
  }
`;

export default theme;
