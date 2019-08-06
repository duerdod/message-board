import { css } from '@emotion/core';
import { buttonGradient } from '../Theme';

const ButtonStyle = css`
  margin: 1rem 0.1rem;
  padding: 0.5rem 1em;
  font-size: 0.65rem;
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
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.1);
  }
`;

export default ButtonStyle;
