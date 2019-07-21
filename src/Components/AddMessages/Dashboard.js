import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  /* padding: 0.5rem; */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.main};
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
  width: 80%;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.main};
  }
`;

const Input = styled.input``;

const Textarea = styled.textarea`
  height: 100px;
`;

const FormContainer = ({ handleSubmit, handleChange, values }) => {
  return (
    <Container>
      <Title>Say something. Nice.</Title>
      <MessageForm>
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
            maxLength="500"
            onChange={e => handleChange(e)}
          />
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
      </MessageForm>
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
