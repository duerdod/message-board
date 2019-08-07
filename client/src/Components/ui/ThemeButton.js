import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Theme from '../Theme';

export const ButtonStyle = css`
  border: 3px solid ${Theme.lightRed};
  color: ${Theme.white};
  margin: 1rem 0.1rem;
  padding: 0.5rem 1rem;
  font-size: 0.65rem;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 900;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 hsla(0, 0%, 0%, 0.1);
  background-size: 200% 200%;
  letter-spacing: 1px;
  background: rgb(238, 156, 167);
  background-image: ${Theme.buttonGradient};
  &:hover {
    background-size: 100% 100%;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
  }
`;

const Button = styled.button`
  ${ButtonStyle}
`;

const ThemeButton = ({
  type,
  children,
  onTouchStart,
  onClick,
  disabled,
  className,
  style
}) => (
  <Button
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
  >
    {children}
  </Button>
);

export default ThemeButton;
