import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
import { HeaderContext } from '../Header';
import { ReactComponent as ModernBurger } from '../../../svg/Burger.svg';
import { ReactComponent as Close } from '../../../svg/Close.svg';
import ThemeButton from '../../ui/ThemeButton';

const StyledMenuButton = styled(ThemeButton)`
  position: relative;
  width: 75px;
  height: 55px;
  &.move {
    transform: translate3d(65px, 0, 0);
  }
  svg {
    stroke-width: 1px;
  }
`;
const AnimatedModernBurger = animated(ModernBurger);
const AnimatedClose = animated(Close);

const MenuButton = ({ onClick }) => {
  const { isMenuOpen } = useContext(HeaderContext);
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
      onClick={onClick}
      className={`${isMenuOpen ? 'move' : ''}`}
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
