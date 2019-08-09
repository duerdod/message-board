import React, { useContext } from 'react';
import useMobileView from '../../hooks/useMobileView';
import { FormContext } from './Form';
import { trimErrorMessage } from '../../utils/utils';
import { ErrorMessage } from '../StatusPage';
import { TitleInput, MessageInput, NameInput } from './FormInputs';
import Button from '../ui/ThemeButton';
import { ReactComponent as ChevronRight } from '../../svg/ChevronRight.svg';
import { ReactComponent as ChevronLeft } from '../../svg/ChevronLeft.svg';

const DesktopForm = () => {
  const { isSmall } = useMobileView();
  const {
    step,
    setStep,
    availableInputs,
    error,
    loading,
    handleSubmit,
    addMessage
  } = useContext(FormContext);

  const toggleStep = (e, direction) => {
    if (direction === 'forward' && step.count < availableInputs.length - 1) {
      setStep({ count: step.count + 1, name: availableInputs[step.count] });
    } else if (direction === 'back') {
      setStep({ count: step.count - 1, name: availableInputs[step.count] });
    }
  };

  // This looks messy..
  if (isSmall) return null;
  return (
    <>
      <Button disabled={step.count === 0} onClick={e => toggleStep(e, 'back')}>
        <ChevronLeft />
      </Button>
      {step.count === 0 && <MessageInput />}
      {step.count === 1 && <TitleInput />}
      {step.count === 2 && (
        <>
          <NameInput />
          <Button type="submit" onClick={e => handleSubmit(e, addMessage)}>
            Post{loading ? 'ing' : ''}
          </Button>
        </>
      )}
      {step.count !== availableInputs.length - 1 && (
        <Button onClick={e => toggleStep(e, 'forward')}>
          <ChevronRight />
        </Button>
      )}
      {error ? (
        <ErrorMessage>{trimErrorMessage(error.message)}</ErrorMessage>
      ) : null}
    </>
  );
};

export default DesktopForm;
