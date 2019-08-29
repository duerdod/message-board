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
  isMobile: '@media screen and (max-width: 52em)',
  sansSerif: 'Open Sans, sans-serif',
  serif: 'DM Serif Text, serif',
  color: {
    primary: {
      hex: '#5D50C6',
      tint: [
        '#5D50C6',
        '#6D62CC',
        '#7D73D1',
        '#8E85D7',
        '#9E96DD',
        '#AEA8E3',
        '#BEB9E8',
        '#CECBEE',
        '#DFDCF4',
        '#EFEEF9',
        '#FFFFFF'
      ]
    },
    secondary: {
      hex: '#F85E9F',
      tint: [
        '#F85E9F',
        '#F96EA9',
        '#F97EB2',
        '#FA8EBC',
        '#FB9EC5',
        '#FCAFCF',
        '#FCBFD9',
        '#FDCFE2',
        '#FEDFEC',
        '#FEEFF5',
        '#FFFFFF'
      ]
    },
    red: {
      hex: '#ED3833',
      tint: [
        '#ED3833',
        '#EF4C47',
        '#F1605C',
        '#F27470',
        '#F48885',
        '#F69C99',
        '#F8AFAD',
        '#FAC3C2',
        '#FBD7D6',
        '#FDEBEB',
        '#FFFFFF'
      ]
    },
    green: {
      hex: '#1FAB89',
      tint: [
        '#1FAB89',
        '#35B395',
        '#4CBCA1',
        '#62C4AC',
        '#79CDB8',
        '#8FD5C4',
        '#A5DDD0',
        '#BCE6DC',
        '#D2EEE7',
        '#E9F7F3',
        '#FFFFFF'
      ]
    },
    grey: {
      hex: '#AEB1B7',
      tint: [
        '#5C636E',
        '#6C737D',
        '#7D828B',
        '#8D929A',
        '#9DA1A8',
        '#AEB1B7',
        '#BEC1C5',
        '#CED0D4',
        '#DEE0E2',
        '#EFEFF1',
        '#FFFFFF'
      ]
    },
    white: {
      hex: '#FCFBFB',
      tint: [
        '#FAF9F9',
        '#FBFAFA',
        '#FBFAFA',
        '#FCFBFB',
        '#FCFBFB',
        '#FDFCFC',
        '#FDFDFD',
        '#FEFDFD',
        '#FEFEFE',
        '#FFFEFE',
        '#FFFFFF'
      ]
    },
    yellow: {
      hex: '#FACD49'
    }
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
      background: ${theme.color.white.hex};
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
    position: fixed;
    overflow-y: hidden;
  }
`;

export default theme;
