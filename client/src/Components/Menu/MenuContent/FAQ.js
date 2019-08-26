import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Horn } from '../../../svg/Horn.svg';

const FAQList = styled.ul`
  width: 100%;
  margin-top: auto;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    padding: 0;
    color: ${({ theme }) => theme.color.primary.tint[7]};
    text-transform: uppercase;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.white};
    }

    svg {
      stroke: ${({ theme }) => theme.color.primary.tint[6]};
      width: 28px;
      margin-right: 8px;
      transition: all 0.2s ease;
    }
    &:hover {
      svg {
        stroke: ${({ theme }) => theme.white};
      }
    }
  }
`;

const FAQ = () => (
  <FAQList>
    <li>
      <Horn />
      CAN I POST WHATEVS?
    </li>
    <li>
      <Horn />
      HOW MUCH IS THE FISH?
    </li>
    <li>
      <Horn />
      WILL IT BLEND? :(
    </li>
  </FAQList>
);

export default FAQ;
