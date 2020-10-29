import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1170px) {
    padding: 0 200px;
  }

  @media screen and (max-width: 1169px) {
    padding: 0 10vw;
  }
`;

const Layout = ({ children }) => (
  <>
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
