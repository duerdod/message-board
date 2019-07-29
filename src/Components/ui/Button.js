import React from 'react';
import styled from '@emotion/styled';
import { buttonGradient } from '../Theme';

const ThemeButton = styled.button`
  margin: 1rem 0;
  border: 3px solid ${({ theme }) => theme.lightRed};
  color: ${({ theme }) => theme.white};
  padding: 0.7rem 1.7rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 900;
  transition: all 0.4s ease;
  box-shadow: 0 1px 6px 0 hsla(0, 0%, 0%, 0.1);
  ${buttonGradient};
  background-size: 200% 200%;
  letter-spacing: 1px;
  &:hover {
    background-size: 100% 100%;
    transform: scale(1.01);
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
  }
  ${p =>
    p.disabled &&
    `
    opacity: 0.3;
  `}
`;

const Button = ({ children, fn, disabled = true }) => {
  return (
    <ThemeButton disabled={disabled} onClick={fn}>
      {children}
    </ThemeButton>
  );
};

export default Button;
