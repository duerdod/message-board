import React from 'react';
import styled from '@emotion/styled';

const LoadingPage = styled.div`
  grid-column: span 4;
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 10% 0;
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
  text-shadow: 1px 1px 0px ${({ theme }) => theme.lightPink};
`;

const ErrorText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
`;

// For smaller error messages.
export const ErrorMessage = props => <ErrorText>{props.children}</ErrorText>;

const Spinner = () => {
  // Jez... there are probably better ways.
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

const Status = ({ state }) => {
  return (
    <LoadingPage>
      <InnerContainer>
        {state === 'loading' ? (
          <Text>Yo spinner.</Text>
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
