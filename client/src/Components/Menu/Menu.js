import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/app-context';
import FAQ from './MenuContent/FAQ';
import Information from './MenuContent/Information';

// AUTH
import Authenticated from '../Auth/Authenticated';
import Signout from '../Auth/Signout';

const MenuContainer = styled.div`
  height: 100%;
  max-width: 485px;
  width: 400px;
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
  @media screen and (max-width: 63em) {
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

  h2,
  h3 {
    margin: 0;
  }
`;

const NavItems = styled.ul`
  margin-top: 1rem;

  li {
    display: block;
    padding: 0.3rem 1rem 0.3rem 0;
    color: ${({ theme }) => theme.lightRed};
    font-weight: 900;
    transition: all 0.2s ease;
    cursor: pointer;
    a {
      color: ${({ theme }) => theme.lightRed};
      text-transform: uppercase;
      &:hover {
        color: ${({ theme }) => theme.white};
      }
      span {
        color: ${({ theme }) => theme.white};
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
    <MenuContainer className={`${isMenuOpen ? 'menu-open' : ''}`}>
      <MenuInnerContainer>
        <Information />
        <NavItems>
          <Authenticated
            renderAuth={user => (
              <>
                <li>
                  <NavLink onClick={collapseMenu} to="/profile">
                    User: <span>{user.username}</span>
                  </NavLink>
                </li>
                <li>
                  <Signout cb={collapseMenu} />
                </li>
              </>
            )}
          >
            <li>
              <NavLink onClick={collapseMenu} to="signup">
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
        <FAQ />
      </MenuInnerContainer>
    </MenuContainer>
  );
};

export default Menu;
