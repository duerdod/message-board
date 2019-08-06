import React, { useContext, useState } from 'react';
import { FormContext } from './Form';
// import { trimErrorMessage } from '../../utils/utils';
// import { ErrorMessage } from '../StatusPage';
import { Title, Message, Name } from './FormInputs';
import styled from '@emotion/styled';
import { Button as SendButton } from './SendButton';
import { useSpring, animated } from 'react-spring';

const StyledSendButton = styled(SendButton)`
  width: 50%;
  position: fixed;
  bottom: 25px;
  padding: 1rem 0.5rem;
`;

const Button = ({ isOpen, toggleOpen, handleSubmit, addMessage }) => (
  <StyledSendButton
    onClick={e => {
      if (isOpen) {
        handleSubmit(e, addMessage);
        toggleOpen(false);
        return;
      }
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
  const { handleSubmit, addMessage } = useContext(FormContext);
  const [isOpen, toggleOpen] = useState(false);
  const props = useSpring({
    height: isOpen ? 300 : 0,
    config: { duration: 200 }
  });

  return (
    <div>
      {
        <AnimatedFormContainer style={props}>
          <Title />
          <Message />
          <Name />
        </AnimatedFormContainer>
      }
      <Button
        addMessage={addMessage}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      >
        Post
      </Button>
    </div>
  );
};

export default MobileForm;
