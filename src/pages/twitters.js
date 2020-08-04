import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/molecules/Card/Card';
import UserPageTemplate from '../templates/UserPageTemplate';

const ArticlesPage = ({
  data: {
    allDatoCmsNote: { nodes, totalCount },
  },
}) => {
  return (
    <UserPageTemplate totalCount={totalCount}>
      {nodes.map(
        ({ originalId, title, twitterName, content, meta: { createdAt } }) => (
          <Card
            key={originalId}
            id={originalId}
            title={title}
            twitterName={twitterName}
            content={content}
            createdAt={createdAt}
            totalCount={totalCount}
          />
        )
      )}
    </UserPageTemplate>
  );
};

export const query = graphql`
  {
    allDatoCmsNote(filter: { pageType: { eq: "twitters" } }) {
      nodes {
        originalId
        twitterName
        title
        content {
          paragraphContent
          id
        }
        meta {
          createdAt(formatString: "DD/MM/YYYY")
        }
      }
      totalCount
    }
  }
`;

export default ArticlesPage;
