import React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';
// import Theme from '../Theme';

const padding = {
  xsmall: '0.7rem 0.5rem',
  small: '0.7rem 0.9rem',
  lagom: '0.7rem 1rem',
  large: '0.7rem 2rem',
  xlarge: '0.7rem 4rem'
};

const ThemeButton = styled.button`
  box-shadow: 0 1px 1px 0
    ${p => p.theme.color[p.color].tint[p.theme.color[p.color].tint.length - 1]};
  font-size: ${p => p.theme.fontSize[p.size]};
  padding: ${p => padding[p.size]};
  color: ${p => p.theme.white};
  background: ${p => p.theme.color[p.color].hex};
  border: 3px solid ${p => p.theme.color[p.color].tint[1]};
  cursor: pointer;
  border-radius: 50px;
  margin: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
`;

const Button = ({
  size = 'normal',
  color = 'green',
  type,
  children,
  onTouchStart,
  onClick,
  disabled,
  className,
  style
}) => (
  <ThemeButton
    onTouchStart={onTouchStart}
    onClick={e => {
      e.preventDefault();
      // the actual called fn
      onClick();
    }}
    type={type}
    disabled={disabled}
    className={className}
    style={style}
    size={size}
    color={color}
  >
    {children}
  </ThemeButton>
);

export default Button;
