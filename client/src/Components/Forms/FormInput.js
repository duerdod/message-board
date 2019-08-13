import React, { useContext } from 'react';
import { MessageFormContext } from '../../context/message-context';
import config from '../../config';
import { charCounter } from '../../utils/utils';
import { Label } from './MessageForm';

const MessageInput = () => {
  const { values, handleChange } = useContext(MessageFormContext);
  // For increasing textfield height.
  const increaseHeight = e => {
    const { scrollHeight, clientHeight } = e.target;
    if (scrollHeight > clientHeight) {
      e.target.style.height = `${scrollHeight}px`;
    }
  };

  return (
    <Label htmlFor="message">
      <textarea
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
      <span className="counter">
        {charCounter(values.message, config.messageLength)}
      </span>
    </Label>
  );
};

const TitleInput = () => {
  const { values, handleChange } = useContext(MessageFormContext);
  return (
    <Label htmlFor="title">
      <input
        type="text"
        placeholder="Title"
        name="title"
        maxLength="60"
        value={values.title || ''}
        required
        onChange={handleChange}
      />
    </Label>
  );
};

const NameInput = () => {
  const { values, handleChange } = useContext(MessageFormContext);
  return (
    <Label htmlFor="name">
      <input
        autoFocus
        type="text"
        placeholder="Name"
        name="author"
        maxLength="50"
        value={values.author || ''}
        required
        onChange={handleChange}
      />
    </Label>
  );
};

export { TitleInput, MessageInput, NameInput };
