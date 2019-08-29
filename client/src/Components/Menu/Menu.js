import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/app-context';
import FAQ from './MenuContent/FAQ';
import Information from './MenuContent/Information';

import Trendy from '../Trendy/Trendy';

// AUTH
import Authenticated from '../Auth/Authenticated';
import Signout from '../Auth/Signout';

const MenuContainer = styled.div`
  &.menu-open {
    left: 0;
  }

  height: 100%;
  max-width: 485px;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -100%;
  transition: left 0.2s ease-out;
  box-shadow: 0 3px 8px 0 ${p => p.theme.color[p.color].tint[3]};
  background: linear-gradient(170deg, ${p =>
    p.theme.color[p.color].tint[1]} 80% , ${p =>
  p.theme.color[p.color].tint[4]});
  border-radius: 0px 4px 4px 0;
  /* background: linear-gradient(
    170deg,
    ${p =>
      p.theme.color[p.color].tint
        .map((color, i, colors) =>
          i === colors.length - 1 ? color : (color += ' 80%, ')
        )
        .join('\n')}
  );
      THIS WAS FUN. BUT NOT AS PERFORMANT? I THINK.
   */
  ${p => p.theme.isMobile} { 
    width: 280px;
    max-width: 80%;
  }
`;

const MenuInnerContainer = styled.div`
  padding: 1rem;
  height: 100%;
  margin: 0.2rem;
  display: flex;
  flex-direction: column;
`;

const NavItems = styled.ul`
  margin-top: 1rem;

  li {
    display: block;
    padding: 0.3rem 1rem 0.3rem 0;
    color: ${({ theme }) => theme.color.white.hex};
    font-weight: 900;
    transition: all 0.2s ease;
    cursor: pointer;
    a {
      color: ${({ theme }) => theme.color.white.hex};
      text-transform: uppercase;
      &:hover {
        color: ${({ theme }) => theme.color.white.hex};
      }
      span {
        color: ${({ theme }) => theme.color.white.hex};
        &:hover {
          color: ${({ theme }) => theme.color.white.hex};
        }
      }
    }
  }
`;

const Menu = () => {
  const { isMenuOpen, toggleMenuOpen } = useContext(AppContext);

  const collapseMenu = () => {
    toggleMenuOpen(false);
  };

  // if (!isMenuOpen) return null;
  // Yes, this is always rendered. No big deal, not done anyho.

  return (
    <MenuContainer
      className={`${isMenuOpen ? 'menu-open' : ''}`}
      color="primary"
    >
      <MenuInnerContainer>
        <Information />
        <NavItems>
          <Authenticated
            renderAuth={({ username }) => (
              <>
                <li>
                  <NavLink onClick={collapseMenu} to="/profile">
                    <span>User: </span>
                    {username}
                  </NavLink>
                </li>
                <li>
                  <Signout cb={collapseMenu} />
                </li>
              </>
            )}
          >
            <li>
              <NavLink onClick={collapseMenu} to="/signup">
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink onClick={collapseMenu} to="/signin">
                Sign in
              </NavLink>
            </li>
          </Authenticated>
        </NavItems>
        <Trendy collapseMenu={collapseMenu} />
        <FAQ />
      </MenuInnerContainer>
    </MenuContainer>
  );
};

export default Menu;
