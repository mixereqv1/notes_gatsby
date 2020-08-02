import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';

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

const Navigation = () => (
  <NavigationWrapper>
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
  </NavigationWrapper>
);

export default Navigation;
