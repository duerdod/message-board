import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
import { AppContext } from '../../context/app-context';
import { ReactComponent as ModernBurger } from '../../svg/Burger.svg';
import { ReactComponent as Close } from '../../svg/Close.svg';
import ThemeButton from '../ui/ThemeButton';

const StyledMenuButton = styled(ThemeButton)`
  position: relative;
  width: 75px;
  height: 51px;
  will-change: width, transform;
  &.move {
    transform: translate3d(55px, 0, 0);
    width: 65px;
    @media screen and (max-width: 63em) {
      transform: translate3d(55px, 0, 0);
    }
  }
  svg {
    stroke-width: 1px;
  }
`;

const AnimatedModernBurger = animated(ModernBurger);
const AnimatedClose = animated(Close);

const MenuButton = () => {
  const { isMenuOpen, toggleMenuOpen, isLarge } = useContext(AppContext);
  const animate = useTransition(isMenuOpen, p => p, {
    unique: true,
    from: {
      position: 'absolute',
      top: '50%',
      bottom: 0,
      left: '50%',
      right: 0,
      transform: 'translate(-50%, -50%)'
    },
    to: { position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
    config: { duration: 200 }
  });

  return (
    <StyledMenuButton
      onClick={() => toggleMenuOpen(isMenuOpen => !isMenuOpen)}
      className={`${isMenuOpen && !isLarge ? 'move' : ''}`}
    >
      {animate.map(({ item, props }, i) => {
        return item ? (
          <AnimatedClose key={i} style={props} />
        ) : (
          <AnimatedModernBurger key={i} style={props} />
        );
      })}
    </StyledMenuButton>
  );
};

export default MenuButton;
