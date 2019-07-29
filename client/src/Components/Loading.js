import React from 'react';
import styled from '@emotion/styled';

const LoadingPage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-family: ${({ theme }) => theme.sansSerif};
  background: ${({ theme }) => theme.bg};
`;

const Text = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.main};
  text-align: center;
`;

const Loading = () => {
  return (
    <LoadingPage>
      <Text>Loading..</Text>
    </LoadingPage>
  );
};

export default Loading;
