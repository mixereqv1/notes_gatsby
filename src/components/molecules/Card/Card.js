import React, { useState } from 'react';
import { Redirect } from '@reach/router';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import LinkIcon from '../../../assets/icons/link.svg';
import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsl(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 3fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ theme, activeColor }) =>
    activeColor ? theme[activeColor] : 'white'};
  position: relative;

  &:first-of-type {
    cursor: pointer;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 9999;
`;

const StyledLinkButton = styled(Link)`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({
  id,
  content,
  articleLink,
  twitterName,
  title,
  createdAt,
  pageContext,
}) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={`${pageContext}/details/${id}`} />;
  }

  return (
    <StyledWrapper>
      <InnerWrapper onClick={() => setRedirect(true)} activeColor={pageContext}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{createdAt}</DateInfo>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://twitter-avatar.now.sh/${twitterName}`} />
        )}
        {pageContext === 'articles' && (
          <StyledLinkButton target='_blank' to={articleLink} />
        )}
      </InnerWrapper>
      <InnerWrapper flex>
        {content.map(({ paragraphContent, id }) => (
          <Paragraph key={id}>{paragraphContent}</Paragraph>
        ))}

        <Button secondary>REMOVE</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default withContext(Card);
