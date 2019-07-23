import { css } from '@emotion/core';

const theme = {
  black: '#36424e',
  white: '#fefeff',
  main: '#617D7D',
  bg: '#fef6e0',
  red: '#d47666',
  lightRed: '#fcc6c9',
  redGradient: '#f97a82, #f27179, #eb6970, #e46067, #dd575e',
  border: `2px solid #383838`,
  boxShadow: '0 2px 6px 0 hsla(0, 0%, 0%, 0.2)',
  sansSerif: 'Source Sans Pro, sans-serif',
  fredokaOne: 'Fredoka One',
  serif: 'DM Serif Text, serif'
};

// https://pigment.shapefactory.co/?s=0&a=617D7D&b=EBC28B
// https://pigment.shapefactory.co/?d=0&a=FF6A35&b=2D5344

export const buttonGradient = `
    background: linear-gradient(
    to right bottom,
      ${theme.redGradient} 
    );
`;

export const reset = css`
  body {
    background: ${theme.bg};
    color: ${theme.black};
    font-family: ${theme.sansSerif};
  }
`;

export default theme;
