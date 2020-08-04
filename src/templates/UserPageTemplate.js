import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Input from '../components/atoms/Input/Input';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 20px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey300};
`;

const UserPageTemplate = ({ children, pageContext, totalCount }) => (
  <StyledWrapper>
    <StyledPageHeader>
      <Input placeholder='search' search />
      <StyledHeading big as='h1'>
        {pageContext}
      </StyledHeading>
      <StyledParagraph>
        {totalCount} {pageContext}
      </StyledParagraph>
    </StyledPageHeader>
    <StyledGrid>{children}</StyledGrid>
  </StyledWrapper>
);

export default withContext(UserPageTemplate);
