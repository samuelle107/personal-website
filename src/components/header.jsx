import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  height: 10vh;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const LinkWrapper = styled.div`
  margin-left: 48px;
`;

const Header = () => (
  <HeaderContainer>
    <LinkContainer>
      <LinkWrapper>
        <AnchorLink to="/#home">Home</AnchorLink>
      </LinkWrapper>
      <LinkWrapper>
        <AnchorLink to="/#projects">Projects</AnchorLink>
      </LinkWrapper>
      <LinkWrapper>
        <AnchorLink to="/#about">About</AnchorLink>
      </LinkWrapper>
      <LinkWrapper>
        <AnchorLink to="/#contact">Contact</AnchorLink>
      </LinkWrapper>
    </LinkContainer>
  </HeaderContainer>
);

export default Header;
