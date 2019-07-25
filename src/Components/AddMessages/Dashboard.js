import React from 'react';
import styled from '@emotion/styled';
import Button from '../Button';
import config from '../../config';
import { charCounter } from '../../utils';
import { FiSend } from 'react-icons/fi';

const Container = styled.div``;

const ContainerInner = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.main};
  font-family: ${({ theme }) => theme.sansSerif};
  ${p => p.red && `color: ${({ theme }) => theme.lightRed}`}
`;

const MessageForm = styled.form`
  width: 100%;

  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 0;
    padding: 0.5rem 0.5rem;
    margin: 0.2rem 0;
    font-family: ${({ theme }) => theme.sansSerif};
    background: transparent;
    border-radius: 2px;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.main};

    &::placeholder {
      text-transform: uppercase;
      font-size: 0.65rem;
      font-family: ${({ theme }) => theme.sansSerif};
    }
  }
`;

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
    background-color: ${({ theme }) => theme.main};
  }
  .counter {
    text-align: right;
    margin: 0;
    font-size: 0.65rem;
    color: ${({ theme }) => theme.main};
  }
`;

const Input = styled.input``;

const Textarea = styled.textarea`
  transition: 'all .2s ease';
  overflow: hidden;
`;

const FormContainer = ({ handleSubmit, handleChange, values }) => {
  // Passed to charCounter fn.
  let textFieldLength = values && values.message ? values.message.length : 0;
  // Used to increase height when typing message.
  const increaseHeight = e => {
    const { scrollHeight, clientHeight } = e.target;
    if (scrollHeight > clientHeight) {
      e.target.style.height = `${scrollHeight}px`;
    }
  };

  return (
    <Container>
      <ContainerInner>
        <Title>Say something</Title>
        <Title style={{ color: '#fcc6c9' }}>Nice.</Title>
        <Title style={{ color: '#FF8B5C' }}>To the Internet.</Title>
        <MessageForm
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Label>
            <Input
              type="text"
              placeholder="Title"
              name="title"
              maxLength="50"
              onChange={e => handleChange(e)}
            />
          </Label>
          <Label>
            <Textarea
              placeholder="Message"
              name="message"
              maxLength={config.messageLength}
              onChange={e => {
                handleChange(e);
                increaseHeight(e);
              }}
              style={{ transition: 'all .2s ease', overflow: 'hidden' }}
            />
            <p className="counter">
              {charCounter(textFieldLength, config.messageLength)}
            </p>
          </Label>
          <Label>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              maxLength="50"
              onChange={e => handleChange(e)}
            />
          </Label>
          <Button
            fn={() => {
              console.log('hej');
            }}
          >
            Post <FiSend style={{ lineHeight: '0' }} />
          </Button>
        </MessageForm>
      </ContainerInner>
    </Container>
  );
};

// const Dashboard = ({ setInputActive }) => {
//   return (
//     <Container>
//       <Title>Say something. Nice.</Title>
//       <MessageForm>
//         <Label>
//           <Input
//             onFocus={() => setInputActive(true)}
//             type="text"
//             placeholder="Name"
//           />
//         </Label>
//         <Label>
//           <Input
//             onFocus={() => setInputActive(true)}
//             type="text"
//             placeholder="Title"
//           />
//         </Label>
//         <Label>
//           <Textarea
//             onFocus={() => setInputActive(true)}
//             placeholder="Message"
//           />
//         </Label>
//       </MessageForm>
//     </Container>
//   );
// };

// export default Form;

export default FormContainer;
