import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import logoutIcon from '../../../assets/icons/logout.svg';
import withContext from '../../../hoc/withContext';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme, activeColor }) =>
    activeColor ? theme[activeColor] : theme.notes};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 900;
  font-size: 20px;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 40px;
`;

const StyledLink = styled(Link)`
  margin-left: auto;
`;

const Navigation = ({ pageContext }) => (
  <NavigationWrapper activeColor={pageContext}>
    <Logo>
      <Link to='/'>Notes app</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to='/notes'>notes</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to='/articles'>articles</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to='/twitters'>twitters</Link>
      </NavigationListItem>
    </NavigationList>
    <StyledLink to='/'>
      <ButtonIcon icon={logoutIcon} />
    </StyledLink>
  </NavigationWrapper>
);

export default withContext(Navigation);
