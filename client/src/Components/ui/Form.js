import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.black};
  width: 50%;
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

const MessageForm = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.white};
  padding: 2rem;
  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 0;
    padding: 0.5rem 0.5rem;
    margin: 0.2rem 0;
    font-family: ${({ theme }) => theme.sansSerif};
    border-radius: 2px;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.darkGreen};
    resize: none;
    box-shadow: none;
    &:not(output):-moz-ui-invalid:not(:focus),
    &:not(output):-moz-ui-invalid:focus,
    &:not(output):-moz-ui-invalid:-moz-focusring:not(:focus) {
      box-shadow: none;
    }

    &::placeholder {
      text-transform: uppercase;
      font-size: 0.65rem;
      font-family: ${({ theme }) => theme.sansSerif};
    }
    @media screen and (max-width: 64em) {
      font-size: 1.1rem;
    }
  }
`;

export { Label, Textarea };
export default MessageForm;
