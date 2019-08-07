import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';

const COMMENT_MOCK = [
  {
    comment: 'Taksi oli täynnä, juhlailtakuski kertoi sen',
    author: 'keta kooko',
    date: '1561157969374'
  },
  {
    comment: 'Aamuyöllä meno oli melkoinen, joo',
    author: 'asap finnie$',
    date: '1562127592742'
  },
  {
    comment:
      'Ei saa nyt viivytellä laisinkaan, Kaisa pistää kenkää takaisin jalkaan, Aamuyöllä meno oli melkoinen, joo',
    author: 'Eyafjalla Juukul',
    date: '15652079374'
  },
  {
    comment:
      'Kaisa meni discoon taas, joo, Kaisa meni discoon taas, joo, Kaisa meni discoon taas, joo, Kaisa meni discoon taas, joo',
    author: 'Joo Ja',
    date: '1565227969374'
  }
];

const CommentContainer = styled.li``;

const CommentText = styled.div`
  padding: 0.1rem 1.5rem;
  width: 100%;
  p {
    margin: 1rem 0;
    font-size: 0.85rem;
    font-weight: 300;
    word-wrap: break-word;
  }
`;

const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
`;

const Comment = () => {
  return COMMENT_MOCK.map((comment, i) => (
    <CommentContainer key={i}>
      <Header message={comment} />
      <CommentText>
        <p>{comment.comment}</p>
      </CommentText>
      <Footer />
    </CommentContainer>
  ));
};

export default Comment;
