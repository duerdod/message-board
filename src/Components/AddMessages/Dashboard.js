import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 1rem;
`;

const Form = styled.form`
  width: 100%;
  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 0;
    padding: 0.5rem 0.5rem;
    margin: 0.2rem 0;
    font-family: ${({ theme }) => theme.sansSerif};
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: 2px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.black};
`;

const Input = styled.input``;

const Textarea = styled.textarea`
  height: 200px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Form>
        <Label>
          Name:
          <Input />
        </Label>
        <Label>
          Title:
          <Input />
        </Label>
        <Label>
          Message:
          <Textarea />
        </Label>
      </Form>
    </Container>
  );
};

export default Dashboard;
