import React, { useContext, useState } from 'react';
import { FormContext } from './Form';
// import { trimErrorMessage } from '../../utils/utils';
// import { ErrorMessage } from '../StatusPage';
import { Title, Message, Name } from './FormInputs';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import ButtonStyle from '../ui/Button';
import RefreshButton from '../ui/RefreshButton';

const StyledSendButton = styled.button`
  ${ButtonStyle}
  border: 3px solid ${({ theme }) => theme.lightRed};
  color: ${({ theme }) => theme.white};
  width: 50%;
  font-size: 0.85rem;
  padding: 1rem 0.5rem;
`;

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
    &lsaquo;
  </ChevronButton>
);

const Button = ({ isOpen, toggleOpen, handleSubmit, addMessage, isValid }) => (
  // This button handles a little much. Separate it?
  <StyledSendButton
    type="button"
    onTouchStart={e => {
      // Is the form visible and is there any input?
      if (isOpen && isValid) {
        // Submit and close.
        handleSubmit(e, addMessage);
        toggleOpen(false);
        return;
      }
      // Otherwise prevent submit and toggle the form.
      e.nativeEvent.preventDefault();
      e.persist();
      toggleOpen(isOpen => !isOpen);
    }}
  >
    Post
  </StyledSendButton>
);

const FormContainer = styled.div`
  overflow: hidden;
`;

const AnimatedFormContainer = animated(FormContainer);

const MobileForm = () => {
  const { handleSubmit, addMessage, isValid } = useContext(FormContext);
  const [isOpen, toggleOpen] = useState(false);

  // Animations.
  const props = useSpring({
    height: isOpen ? 300 : 0,
    config: { duration: 200 }
  });

  return (
    <div className="mobile-form">
      {isOpen && (
        <AnimatedFormContainer style={props}>
          <Title />
          <Message />
          <Name />
          <Chevron rotate={90} onTouchStart={() => toggleOpen(false)} />
        </AnimatedFormContainer>
      )}
      {/* These are a part of the header. Rewrite. */}
      <div className="dashboard-buttons">
        <Button
          isValid={isValid}
          addMessage={addMessage}
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        >
          Post
        </Button>
        <RefreshButton />
      </div>
    </div>
  );
};

export default MobileForm;
