import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { HeaderContext } from '../Header';
import { ReactComponent as MenuBell } from '../../../svg/Bell.svg';
import { ReactComponent as Horn } from '../../../svg/Horn.svg';

const MenuContainer = styled.div`
  height: 100%;
  width: 80%;
  max-width: 285px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -100%;
  transition: left 0.2s ease-out;
  box-shadow: 0 2px 8px 0 hsla(0, 0%, 0%, 0.4);
  background: ${({ theme }) => theme.buttonGradient};
  border-radius: 0px 4px 4px 0;
  &.menu-open {
    left: 0;
  }
`;

const MenuInnerContainer = styled.div`
  padding: 1rem;
  height: 100%;
  margin: 0.2rem;

  h2,
  h3 {
    margin: 0;
  }
`;

const Bell = styled(MenuBell)`
  fill: ${({ theme }) => theme.lightRed};
  stroke: none;
  width: 1.5rem;
  transition: all 0.2s ease;
  &:hover {
    fill: ${({ theme }) => theme.white};
  }
`;

const Text = styled.h2`
  color: #${p => p.color};
  font-size: ${p => p.size}rem;
`;

const FAQ = styled.ul`
  width: 100%;
  margin: 3rem 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.white};
    font-weight: 800;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    padding: 0;
    cursor: pointer;

    svg {
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

const Menu = () => {
  const { isMenuOpen, isLarge } = useContext(HeaderContext);

  useEffect(() => {
    // Is this OK? Looks bad.
    const body = document.querySelector('body');
    isMenuOpen
      ? body.classList.add('menu-open')
      : body.classList.remove('menu-open');
  }, [isMenuOpen]);

  if (isLarge) return null;
  // if (!isMenuOpen) return null;
  // Yes, this is always rendered. No big deal, not done anyho.

  return (
    <MenuContainer className={`${isMenuOpen ? 'menu-open' : ''}`}>
      <MenuInnerContainer>
        <Text size="1.7" color="fcc6c9">
          PRESS THE BELL <Bell />
        </Text>
        <Text size="1.3" color="a7d7c5">
          IF YO DISAGREE
        </Text>
        <Text size="1.4" color="fcc6c9">
          MESSAGES WITH FIVE
        </Text>
        <Text size="1.8" color="f8b500">
          BELLS
        </Text>
        <Text size="1.3" color="a7d7c5">
          WILL BE REMOVED
        </Text>
        <FAQ>
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
        </FAQ>
      </MenuInnerContainer>
    </MenuContainer>
  );
};

export default Menu;
