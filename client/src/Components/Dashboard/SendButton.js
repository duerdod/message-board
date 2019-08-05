import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { buttonGradient } from '../Theme';
import { FormContext } from './Form';

const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.darkGreen};
`;

const clientMessageValidation = message => {
  const valid =
    message &&
    message.message.length &&
    message.title.length &&
    message &&
    message.name.length;
  return valid;
};

const SendButton = () => {
  const { values, loading } = useContext(FormContext);
  return <Button type="submit">Post{loading ? 'ing' : ''}</Button>;
};

export default SendButton;
