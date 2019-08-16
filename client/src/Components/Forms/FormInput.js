import React, { useContext } from 'react';
import { MessageFormContext } from '../../context/message-context';
import config from '../../config';
import { charCounter } from '../../utils/utils';
import { Label } from './MessageForm';
import useUser from '../../hooks/useUser';

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
        value={values.message}
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
  const { user } = useUser();
  return (
    <Label htmlFor="title">
      <input
        autoFocus={user ? true : false}
        type="text"
        placeholder="Title"
        name="title"
        maxLength="60"
        value={values.title}
        required
        onChange={handleChange}
      />
    </Label>
  );
};

const NameInput = () => {
  const { values, handleChange } = useContext(MessageFormContext);
  const { user } = useUser();
  return (
    <Label htmlFor="name">
      <input
        autoFocus={user ? false : true}
        type="text"
        placeholder="Name"
        name="author"
        maxLength="50"
        value={(user && user.username) || values.author}
        required
        onChange={handleChange}
      />
    </Label>
  );
};

export { TitleInput, MessageInput, NameInput };
