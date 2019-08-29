import React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';
// import Theme from '../Theme';

const padding = {
  xsmall: '0.7rem 0.5rem',
  small: '0.7rem 0.9rem',
  lagom: '0.7rem 1.4rem',
  large: '0.7rem 2rem',
  xlarge: '0.7rem 4rem'
};

const ThemeButton = styled.button`
  box-shadow: 0 4px 6px -1px ${p => p.theme.color[p.color].tint[3]};
  font-size: ${p => p.theme.fontSize[p.size]};
  padding: ${p => padding[p.size]};
  color: ${p => p.theme.white};
  background: ${p => p.theme.color[p.color].hex};
  border: 3px solid ${p => p.theme.color[p.color].tint[3]};
  font-family: ${({ theme }) => theme.sansSerif};
  cursor: pointer;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  transition: all 0.4s ease;
  margin-right: 4px;
  &:hover {
    background: ${p => p.theme.color[p.color].tint[1]};
    box-shadow: 0 1px 2px 0px ${p => p.theme.color[p.color].tint[3]};
  }
`;

const Button = ({
  size = 'normal',
  color = 'primary',
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
