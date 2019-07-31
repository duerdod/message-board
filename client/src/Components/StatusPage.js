import React from 'react';
import styled from '@emotion/styled';

const LoadingPage = styled.div`
  grid-column: span 3;
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
    width: 70px;
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
  font-weight: 200;
  letter-spacing: 3px;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.lightpink};
`;

const ErrorText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
`;

// For smaller error messages.
export const ErrorMessage = props => <ErrorText>{props.children}</ErrorText>;

const Spinner = () => (
  // Jez... there are probably better ways.
  <>
    <span style={{ display: 'block' }} role="img" aria-label="loading messages">
      👁 👁
    </span>
    <span className="first" role="img" aria-label="loading messages">
      <span style={{ visibility: 'hidden' }}>______</span>🎾
    </span>
    <span className="second" role="img" aria-label="loading messages">
      <span style={{ visibility: 'hidden' }}>______</span>🎾
    </span>
  </>
);

const Status = ({ state }) => {
  return (
    <LoadingPage>
      <InnerContainer>
        {state === 'loading' ? (
          <Text>
            Consider me yo <br /> loading spinner
          </Text>
        ) : (
          <Text>
            Oh darn. <br />
            Something went wrong.
          </Text>
        )}
        <Spinner />
      </InnerContainer>
    </LoadingPage>
  );
};

export default Status;
