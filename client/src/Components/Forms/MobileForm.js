import React, { useContext } from 'react';
import { HeaderContext } from '../Header/Header';
import { FormContext } from './Form';
import { Title, Message, Name } from './FormInputs';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as ChevronDown } from '../../svg/ChevronDown.svg';

const ChevronButton = styled.button`
  width: auto;
  margin: 0 auto;
  padding: 1rem;
  display: block;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.backgroundCerise};
  transform: rotate(${p => p.rotate}deg);
  transition: all 0.4s ease;
`;

const Chevron = ({ rotate, onTouchStart, onClick }) => (
  <ChevronButton rotate={rotate} onTouchStart={onTouchStart} onClick={onClick}>
    <ChevronDown />
  </ChevronButton>
);

const FormContainer = styled.div`
  overflow: hidden;
`;

const AnimatedFormContainer = animated(FormContainer);

const MobileForm = ({ renderFormChildren }) => {
  const { isFormOpen, toggleFormOpen, isLarge } = useContext(HeaderContext);
  const { handleSubmit, addMessage, isValid } = useContext(FormContext);

  // Animations.
  const props = useSpring({
    height: isFormOpen ? 300 : 0,
    config: { duration: 200 }
  });

  const handleToggleOrSumbit = e => {
    // Is the form visible and is there any input?
    if (isFormOpen && isValid) {
      // Try submit and close.
      handleSubmit(e, addMessage);
      toggleFormOpen(false);
      return;
    }
    // Otherwise prevent submit and toggle form open.
    // e.persist();
    toggleFormOpen(isFormOpen => !isFormOpen);
  };

  if (isLarge) return null;
  return (
    <div className="mobile-form">
      {isFormOpen && (
        <AnimatedFormContainer style={props}>
          <Title />
          <Message />
          <Name />
          <Chevron rotate={180} onTouchStart={() => toggleFormOpen(false)} />
        </AnimatedFormContainer>
      )}
      {renderFormChildren(handleToggleOrSumbit)}
    </div>
  );
};

export default MobileForm;
