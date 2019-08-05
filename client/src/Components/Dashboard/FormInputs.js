import React, { useContext } from 'react';
import { FormContext } from './Form';
import styled from '@emotion/styled';
import config from '../../config';
import { charCounter } from '../../utils/utils';

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.black};
  width: 90%;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.lightPink};
    }
  }
  .counter {
    text-align: right;
    margin: 0;
    font-size: 0.65rem;
    color: ${({ theme }) => theme.darkGreen};
  }
`;

const Textarea = styled.textarea`
  transition: 'all .2s ease';
  overflow: hidden;
`;

const forwardOnEnter = (e, step, setStep, availableInputs) => {
  const { key, shiftKey, target } = e;
  if (!shiftKey && key === 'Enter') {
    e.preventDefault();
    if (step.count !== availableInputs.length - 1) {
      setStep({
        count: step.count + 1,
        name: availableInputs[step.count]
      });
    }
    target.focus();
  }
  return;
};

const Message = () => {
  const { values, handleChange, step, setStep, availableInputs } = useContext(
    FormContext
  );
  // For increasing textfield height.
  const increaseHeight = e => {
    const { scrollHeight, clientHeight } = e.target;
    if (scrollHeight > clientHeight) {
      e.target.style.height = `${scrollHeight}px`;
    }
  };

  return (
    <Label htmlFor="message">
      <Textarea
        onKeyDown={e => forwardOnEnter(e, step, setStep, availableInputs)}
        autoFocus={true}
        name="message"
        placeholder="Message"
        maxLength={config.messageLength}
        value={values.message || ''}
        required
        onChange={e => {
          handleChange(e);
          increaseHeight(e);
        }}
        style={{ transition: 'all .2s ease', overflow: 'hidden' }}
      />
      <p className="counter">
        {charCounter(values.message, config.messageLength)}
      </p>
    </Label>
  );
};

const Title = () => {
  const { values, handleChange, step, setStep, availableInputs } = useContext(
    FormContext
  );
  return (
    <Label>
      <Textarea
        onKeyDown={e => forwardOnEnter(e, step, setStep, availableInputs)}
        autoFocus
        type="text"
        placeholder="Title"
        name="title"
        maxLength="60"
        value={values.title || ''}
        required
        onChange={handleChange}
      />
      <p className="counter">{charCounter(values.title, 60)}</p>
    </Label>
  );
};

const Name = () => {
  const { values, handleChange, step, setStep, availableInputs } = useContext(
    FormContext
  );
  return (
    <Label>
      <Textarea
        onKeyDown={e => forwardOnEnter(e, step, setStep, availableInputs)}
        autoFocus
        type="text"
        placeholder="Name"
        name="author"
        maxLength="50"
        value={values.author || ''}
        required
        onChange={handleChange}
      />
      <p className="counter">{charCounter(values.name, 50)}</p>
    </Label>
  );
};

export { Title, Message, Name };
