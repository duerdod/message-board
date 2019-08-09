import React, { useState, createContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Burger } from '../../svg/Burger.svg';
import Form from '../../Forms/Form';
import DesktopForm from '../../Forms/DesktopForm';
import MobileForm from '../../Forms/MobileForm';
import useMobileView from '../../../hooks/useMobileView';
import ThemeButton from '../../ui/ThemeButton';
import MenuButton from './Menu/MenuButton';
import Menu from './Menu/Menu';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .title-container {
    justify-self: start;
  }

  .menu-container {
    justify-self: end;
    font-size: 1.5rem;
    svg {
      stroke: ${({ theme }) => theme.backgroundCerise};
    }
    &:hover {
      &::before {
        content: 'Empty';
        display: inline-block;
        color: ${({ theme }) => theme.backgroundCerise};
        font-size: 0.65rem;
      }
    }
  }

  @media screen and (max-width: 64em) {
    grid-template-columns: 1fr;

    /* A mess. */
    .form-container {
      grid-row: 2;
      grid-column: span 4;
      .mobile-form {
        width: 100%;
        .dashboard-buttons {
          display: flex;
          justify-content: center;
          width: 100%;
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          bottom: 55px;
          &.move-button {
            margin-left: 12px;
          }
        }
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
  color: ${p => p.color};
  font-family: ${({ theme }) => theme.sansSerif};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.lightPink};
`;

const ToggleSubmitButton = styled(ThemeButton)`
  padding: 0.5rem 5rem;
`;

const Logo = () => (
  <Link className="title-container" to="/">
    <Title color="#74b49b">SHOUT OUT</Title>
    <Title color="#ee9ca7">AND</Title>
    <Title color="#a7d7c5">STAY COOL</Title>
  </Link>
);

export const HeaderContext = createContext();

const Header = () => {
  const { isLarge } = useMobileView();
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [isFormOpen, toggleFormOpen] = useState(false);

  // This could probably be much simplier....
  return (
    <HeaderContainer>
      <HeaderContext.Provider
        value={{
          isLarge,
          isFormOpen,
          toggleFormOpen,
          isMenuOpen,
          toggleMenuOpen
        }}
      >
        <Logo />
        <Menu />
        <Form className="form-container">
          {/* I belive this makes it easier to manage. Not sure tho. */}
          <MobileForm
            renderFormChildren={handleToggleOrSumbit => (
              <div className="dashboard-buttons">
                <ToggleSubmitButton
                  style={{
                    transform: `${
                      isMenuOpen ? 'translateX(-200%)' : 'translateX(0)'
                    }`
                  }}
                  type="button"
                  // onTouchStart={handleToggleOrSumbit}
                  onClick={handleToggleOrSumbit}
                >
                  Post
                </ToggleSubmitButton>
                <MenuButton
                  type="button"
                  onClick={() => toggleMenuOpen(isMenuOpen => !isMenuOpen)}
                />
              </div>
            )}
          />
          <DesktopForm />
        </Form>

        {/* Burger on desktop */}
        {isLarge && (
          <button className="menu-container">
            <Burger style={{ opacity: '0.2' }} />
          </button>
        )}
      </HeaderContext.Provider>
    </HeaderContainer>
  );
};

export default Header;