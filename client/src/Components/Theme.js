import { css } from '@emotion/core';

const theme = {
  black: '#383838',
  white: '#fdfdfd',
  whiteVariant: '#f8f8f8',
  boxShadow: '0 2px 6px 0 hsla(0, 0%, 0%, 0.09)',
  fontSize: {
    xsmall: '0.75rem',
    small: '0.875rem',
    lagom: '1rem',
    large: '1.1rem',
    xlarge: '1.4rem'
  },
  sansSerif: 'Open Sans, sans-serif',
  serif: 'DM Serif Text, serif',
  color: {
    primary: {
      hex: '#FD97B6',
      tint: ['#FDA1BD', '#FDACC5', '#FEB6CC', '#FEC1D3'],
      shade: ['#E488A4', '#CA7992', '#B16A7F', '#985B6D']
    },
    secondary: {
      hex: '#454D66',
      tint: ['#585F75', '#6A7185', '#7D8294', '#8F94A3'],
      shade: ['#3E455C', '#373E52', '#303647', '#292E3D']
    },
    red: {
      hex: '#ED3833',
      tint: ['#EF4C47', '#F1605C', '#F27470', '#F48885'],
      shade: ['#D5322E', '#BE2D29', '#A62724', '#8E221F']
    },
    green: {
      hex: '#1fab89',
      tint: ['#35B395', '#4CBCA1', '#62C4AC', '#79CDB8'],
      shade: ['#1C9A7B', '#19896E', '#167860', '#136752']
    },
    grey: {
      hex: '#7F7F7F',
      tint: ['#CCCCCC', '#D9D9D9', '#E5E5E5', '#F2F2F2'],
      shade: ['#727272', '#666666', '#595959', '#4C4C4C']
    },
    white: {
      hex: '#fdfdfd',
      tint: [
        '#FFFFFF',
        '#F2F2F2',
        '#F3F3F3',
        '#F5F5F5',
        '#F6F6F6',
        '#F7F7F7',
        '#F9F9F9'
      ]
    },
    yellow: '#fec771'
  }
};

export const reset = css`
  body {
    /* background: linear-gradient(320deg, rgba(255,234,236,1) 27%, rgba(255,241,243,1) 55%); */
    background: ${theme.white};
    background-attachment: fixed;
    height: 100%;
    color: ${theme.black};
    font-family: ${theme.sansSerif};
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  html {
    text-rendering: optimizeLegibility;
    font-size: 14px;
  }
  html * {
    box-sizing: border-box;
    &::selection {
      background: ${theme.color.primary.hex};
      color: ${theme.white};
    }
  }

  button,
  input,
  textarea,
  ul,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    border: 0;
    padding: 0;
    outline: 0;
    background: transparent;
    list-style: none;
    resize: none;
    box-shadow: unset;
    font-weight: 400;
    &:not(output):-moz-ui-invalid:not(:focus),
    &:not(output):-moz-ui-invalid:focus,
    &:not(output):-moz-ui-invalid:-moz-focusring:not(:focus) {
      box-shadow: none;
    }
  }
  @media (pointer: coarse) {
    input,
    textarea {
      font-size: 16px !important;
      appearance: none;
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
