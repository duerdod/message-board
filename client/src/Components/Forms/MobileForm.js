import React, { useContext } from 'react';
import { HeaderContext } from '../Layout/Header/Header';
import { FormContext } from './Form';
import { TitleInput, MessageInput, NameInput } from './FormInputs';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as ChevronDown } from '../../svg/ChevronDown.svg';
import { ErrorMessage } from '../StatusPage';

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
  const { handleSubmit, addMessage, error } = useContext(FormContext);

  // Animations.
  const props = useSpring({
    height: isFormOpen ? 400 : 0,
    config: { duration: 200 }
  });

  const handleToggleOrSumbit = e => {
    // Is the form visible and is there any input?
    if (isFormOpen) {
      // Try submit and close.
      handleSubmit(e, addMessage);
      // toggleFormOpen(false);
      return;
    }
    // Otherwise prevent submit and toggle form open.
    // e.persist();
    toggleFormOpen(true);
  };
  console.log(error);
  if (isLarge) return null;
  return (
    <div className="mobile-form">
      {isFormOpen && (
        <AnimatedFormContainer style={props}>
          <TitleInput />
          <MessageInput />
          <NameInput />
          {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
          <Chevron
            rotate={180}
            onClick={e => {
              e.preventDefault();
              toggleFormOpen(false);
            }}
          />
        </AnimatedFormContainer>
      )}
      {renderFormChildren(handleToggleOrSumbit)}
    </div>
  );
};

export default MobileForm;
