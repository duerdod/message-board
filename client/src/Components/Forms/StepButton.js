import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FormContext } from './Form';

const Button = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.backgroundCerise};
`;

const StepButton = ({ children, direction }) => {
  const { step, setStep, availableInputs } = useContext(FormContext);

  const toggleStep = direction => {
    if (direction === 'forward' && step.count < availableInputs.length - 1) {
      setStep({ count: step.count + 1, name: availableInputs[step.count] });
    } else if (direction === 'back') {
      setStep({ count: step.count - 1, name: availableInputs[step.count] });
    }
  };

  const disable = step.count === 0 && direction === 'back';

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
