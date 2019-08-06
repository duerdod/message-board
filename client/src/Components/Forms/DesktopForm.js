import React, { useContext } from 'react';
import { FormContext } from './Form';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { trimErrorMessage } from '../../utils/utils';
import { ErrorMessage } from '../StatusPage';
import { Title, Message, Name } from './FormInputs';
import StepButton from './StepButton';
import SendButton from './SendButton';

const DesktopForm = () => {
  const { step, availableInputs, error } = useContext(FormContext);
  return (
    <>
      <StepButton direction="back">
        <MdChevronLeft />
      </StepButton>

      {step.count === 0 && <Message />}
      {step.count === 1 && <Title />}
      {step.count === 2 && (
        <>
          <Name />
          <SendButton />
        </>
      )}
      {step.count !== availableInputs.length - 1 && (
        <StepButton direction="forward">
          <MdChevronRight />
        </StepButton>
      )}
      {error ? (
        <ErrorMessage>{trimErrorMessage(error.message)}</ErrorMessage>
      ) : null}
    </>
  );
};

export default DesktopForm;