import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from '../components/organisms/Navigation/Navigation';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/MainTheme';
import PageContext from '../context';

const MainLayout = ({ children, location: { pathname } }) => {
  const [pageType, setPageType] = useState('notes');

  useEffect(() => {
    setCurrentPage();
  });

  const setCurrentPage = () => {
    const pageTypes = ['notes', 'twitters', 'articles'];

    pathname = pathname.substr(1);

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    setPageType(currentPage);
  };

  return (
    <PageContext.Provider value={pageType}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation pageType={pageType} />
        {children}
      </ThemeProvider>
    </PageContext.Provider>
  );
};

export default MainLayout;
