import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
`;

// For smaller error messages.
export const ErrorMessage = props => <Message>{props.children}</Message>;

// Full page error.
// const Error = () => {
//   return <div />;
// };

// export default Error;
