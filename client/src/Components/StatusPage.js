import React from 'react';
import styled from '@emotion/styled';
import { trimErrorMessage } from '../utils/utils';
import Button from './ui/Button';

const LoadingPage = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background: ${({ theme }) => theme.white};
  padding: 10% 0;
`;

const InnerContainer = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 10% 0;
  button {
    margin: 2rem 0;
  }
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
  span.eyes {
    display: block;
  }
  span.first {
    width: 60px;
    animation: rotate 1s ease infinite;
    &::after {
      display: block;
      content: '_____';
      visibility: hidden;
    }
  }
  span.second {
    width: 100px;
    animation: rotate 1s ease infinite reverse;
    &::before {
      display: block;
      content: '_____';
      visibility: hidden;
    }
  }
`;

const Text = styled.h2`
  font-family: ${({ theme }) => theme.sansSerif};
  font-weight: 800;
  text-transform: uppercase;
  margin: 0.2rem;
  font-weight: 800;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.color.primary.hex};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.color.primary.tint[6]};
  &.error {
    color: ${({ theme }) => theme.color.red.tint[3]};
  }
`;

const ErrorText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.red.hex};
  display: block;
  width: 100%;
  margin: 1rem 0;
`;

// For smaller error messages.
export const ErrorMessage = ({ error }) => (
  <ErrorText>{trimErrorMessage(error)}</ErrorText>
);

const Spinner = () => {
  return (
    <>
      <span role="img" aria-label="loading messages" className="eyes">
        👀
      </span>
      <span role="img" aria-label="loading messages" className="first">
        🎾
      </span>
      <span role="img" aria-label="loading messages" className="second">
        🎾
      </span>
    </>
  );
};

const StatusPage = ({ state }) => {
  return (
    <LoadingPage>
      <InnerContainer>
        {state === 'loading' ? (
          <Text>Spinner.</Text>
        ) : (
          <>
            <Text className="error">
              Oh darn. <br />
              Something went wrong.
            </Text>
            <Button
              size="large"
              color="primary"
              onClick={() => window.location.reload()}
            >
              Try again
            </Button>
          </>
        )}
        <Spinner />
      </InnerContainer>
    </LoadingPage>
  );
};

export default StatusPage;
