import React from 'react';
import styled from '@emotion/styled';

const LoadingPage = styled.div`
  background: ${({ theme }) => theme.bg};
`;

const InnerContainer = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.darkGreen};
  text-align: center;
  padding: 10% 0;

  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
  > span {
    width: 60px;
    margin: 0 auto;
    display: inline-block;
  }
  span.first {
    width: 60px;
    animation: rotate 1s ease infinite;
  }
  span.second {
    width: 100px;
    animation: rotate 1s ease infinite reverse;
  }
`;

const Text = styled.h2`
  font-family: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  margin: 0.2rem;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.black},
    2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const Loading = props => {
  return (
    <LoadingPage>
      {props.children ? (
        <Text>{props.children}</Text>
      ) : (
        <InnerContainer>
          <Text>Consider me a spinner</Text>
          <span className="first" role="img" aria-label="loading messages">
            <span style={{ visibility: 'hidden' }}>______</span>🎾
          </span>
          <span className="second" role="img" aria-label="loading messages">
            <span style={{ visibility: 'hidden' }}>______</span>🎾
          </span>
        </InnerContainer>
      )}
    </LoadingPage>
  );
};

export default Loading;
