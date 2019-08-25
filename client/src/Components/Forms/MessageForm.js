import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { MessageFormContext } from '../../context/message-context';
import { TitleInput, MessageInput, NameInput } from './FormInput';
import Header from '../Messages/Header';
import MessageTitle from '../Messages/MessageTitle';
import MessageBody from '../Messages/MessageBody';
import SendButton from './SendButton';

export const Label = styled.label`
  display: inline-block;
  font-size: 0.85rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.2s ease;
  input,
  textarea {
    width: 100%;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.sansSerif};

    &::placeholder {
      text-transform: uppercase;
      font-size: 0.65rem;
    }
  }

  label[for='name'] {
    height: 33px;
    input,
    span {
      line-height: 33px;
    }
  }

  label[for='title'] {
    margin-bottom: 1rem;
    height: 33px;
    input {
      line-height: 33px;
    }
  }

  label[for='message'] {
    width: 100%;
  }

  .counter {
    display: block;
    text-align: right;
    margin: 0;
    font-size: 0.55rem;
    color: ${({ theme }) => theme.color.green.hex};
  }

  @media screen and (max-width: 64em) {
    font-size: 1.1rem;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: 0rem;
  border-top: 1px solid ${({ theme }) => theme.color.white.tint[4]};
  margin-top: auto;
`;

const StyledSendButton = styled(SendButton)`
  margin: 0;
  border-radius: 0 0 4px 4px;
  width: 100%;
  border: 0;
  padding: 0.9rem 0.5rem;
`;

const FormUI = () => {
  const { isFormOpen } = useContext(MessageFormContext);
  return isFormOpen ? (
    <StyledForm>
      <Header message={''}>
        <NameInput />
      </Header>
      <MessageTitle message={''}>
        <TitleInput />
      </MessageTitle>
      <MessageBody message={''}>
        <MessageInput />
      </MessageBody>
      <Footer>
        <StyledSendButton>POST</StyledSendButton>
      </Footer>
    </StyledForm>
  ) : null;
};

export default FormUI;
