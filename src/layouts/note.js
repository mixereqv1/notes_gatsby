import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const query = graphql`
  query queryCMSPage($id: String!) {
    datoCmsNote(originalId: { eq: $id }) {
      title
      articleLink
      twitterName
      content {
        paragraphContent
        id
      }
      meta {
        createdAt(formatString: "DD/MM/YYYY")
      }
    }
  }
`;

const PostLayout = ({
  pathContext: { pageType },
  data: {
    datoCmsNote: {
      title,
      articleLink,
      twitterName,
      content,
      meta: { createdAt },
    },
  },
}) => (
  <StyledWrapper>
    <StyledPageHeader>
      <StyledHeading big as='h1'>
        {title}
      </StyledHeading>
      <StyledParagraph>CREATED - {createdAt}</StyledParagraph>
    </StyledPageHeader>
    {content.map(({ paragraphContent, id }) => (
      <Paragraph key={id}>{paragraphContent}</Paragraph>
    ))}
    {pageType === 'articles' && (
      <StyledLink target='_blank' to={articleLink}>
        Open this article
      </StyledLink>
    )}
    {pageType === 'twitters' && (
      <>
        <StyledImage
          alt={title}
          src={`https://twitter-avatar.now.sh/${twitterName}`}
        />
        <StyledLink target='_blank' to={`https://twitter.com/${twitterName}`}>
          Open this twitter
        </StyledLink>
      </>
    )}
    <Button as={Link} to={`/${pageType}`} activeColor={pageType}>
      close
    </Button>
  </StyledWrapper>
);

export default PostLayout;
