import React from 'react';
import { graphql } from 'gatsby';

const countTypes = (nodes) => {
  const typesCount = [];
  let n = 0,
    a = 0,
    t = 0;
  nodes.map(({ pageType }) =>
    pageType === 'notes' ? n++ : pageType === 'articles' ? a++ : t++
  );
  typesCount.push(n, a, t);
  return typesCount;
};

export const query = graphql`
  {
    allDatoCmsNote {
      totalCount
      nodes {
        pageType
      }
    }
  }
`;

const IndexPage = ({
  data: {
    allDatoCmsNote: { totalCount, nodes },
  },
}) => {
  const [notesCount, articlesCount, twittersCount] = countTypes(nodes);

  return (
    <>
      <h3>All notes: {totalCount}</h3>
      <p>Notes: {notesCount}</p>
      <p>Articles: {articlesCount}</p>
      <p>Twitters: {twittersCount}</p>
    </>
  );
};

export default IndexPage;
