import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Dislike from './Dislike/Dislike';
import Comments from './Comments/CommentsIndicator';

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0rem 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.white.tint[4]};
  margin-top: auto;
  background: ${({ theme }) => theme.color.white.tint[6]};
  > * {
    font-size: 0.75rem;
  }
  > label {
    width: 10%;
    margin: 0;
    padding: 0;
  }
  border-radius: 0 0 4px 4px;
  @media screen and (max-width: 63em) {
    border-radius: 0;
    padding: 0rem 1rem;
  }
`;

const Footer = ({ id, dislikes, comments }) => {
  return (
    <Container>
      <Link
        to={{
          pathname: `/message/${id}`
        }}
      >
        <Comments id={id} comments={comments} />
      </Link>
      <Dislike id={id} dislikes={dislikes} />
    </Container>
  );
};

export default Footer;
