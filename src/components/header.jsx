import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const SlideIn = keyframes`
  from {
    transform: translateY(-60%);
    opacity: 0%;
  }
  to {
    transform: translateY(0%);
    opacity: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  height: 10vh;
  animation: ${SlideIn} 1.5s;

  @media screen and (max-width: 1169px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
`;

const StyledLink = styled(({ children, className, to }) => (
  <AnchorLink
    to={to}
    className={className}
  >
    {children}
  </AnchorLink>
))`
  margin-left: 48px;

  &:hover {
    color: ${({ color }) => color};
  }
`;

const Header = () => (
  <HeaderContainer>
    <LinkContainer>
      <StyledLink color="#f7c3b5" to="/#home">Home</StyledLink>
      <StyledLink color="#eabfff" to="/#projects">Projects</StyledLink>
      <StyledLink color="#a3d3ff" to="/#about">About</StyledLink>
      <StyledLink color="#de0f66" to="/#contact">Contact</StyledLink>
    </LinkContainer>
  </HeaderContainer>
);

export default Header;
