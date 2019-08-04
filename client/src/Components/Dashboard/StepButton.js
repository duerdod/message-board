import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FormContext } from './Form';

const Button = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.backgroundPink};
`;

const StepButton = ({ children, direction }) => {
  const { step, setStep, values } = useContext(FormContext);
  const availableFields = ['message', 'title', 'name'];

  const toggleStep = direction => {
    if (direction === 'forward') {
      setStep({ count: step.count + 1, name: availableFields[step.count] });
    } else if (direction === 'back') {
      setStep({ count: step.count - 1, name: availableFields[step.count] });
    } else setStep((step.count = 1));
  };

  const disable =
    (direction === 'back' && step === 1) ||
    (direction === 'forward' && step === 3);

  return (
    <Button
      onClick={e => {
        e.preventDefault();
        toggleStep(direction);
      }}
      disabled={disable}
    >
      {children}
    </Button>
  );
};

export default StepButton;
