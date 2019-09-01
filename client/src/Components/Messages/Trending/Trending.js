import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { GET_TAGS } from '../../../gql/gql';

const Page = styled.div`
  margin-top: 1rem;
`;

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.color.secondary.tint[2]};
  font-weight: 900;
  font-size: 1.2rem;
`;

const TagContainer = styled.ul``;

const Tag = styled.li`
  color: ${({ theme }) => theme.color.primary.tint[8]};
  font-weight: 200;
  display: inline-block;
  margin-right: 0.5rem;
  opacity: 1;
  transition: all 0.2s ease;
  font-size: ${p => p.size}rem;
  &:hover {
    color: ${({ theme }) => theme.color.primary.tint[9]};
  }
`;

const Trending = ({ collapseMenu }) => {
  const { data, error, loading } = useQuery(GET_TAGS);
  if (loading) return '';
  if (error) return '';
  const { tags } = data;

  return (
    <Page>
      <PageTitle>Trending</PageTitle>
      <TagContainer>
        {tags.map(({ tag, count, id }) => (
          <Link
            key={id}
            to={`/messages/${tag.replace('#', '')}`}
            onClick={collapseMenu}
          >
            <Tag size={1 + count / 100}>{tag}</Tag>
          </Link>
        ))}
      </TagContainer>
    </Page>
  );
};

export default Trending;
