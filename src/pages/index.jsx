import React, { useState, useEffect } from 'react';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../components/layout';
import Landing from '../components/landing';
import Projects from '../components/projects';
import About from '../components/about';
import Ellipsis from '../components/ellipsis';

const GlobalStyle = createGlobalStyle`
  ${reset}

  p {
    line-height: 1.5;
    font-size: 20px;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    transition: 0.3s;
    color: black;

    &:link {
      text-decoration: none;
    }
    
    &:visited {
      color: black;
      text-decoration: none;
    }

    &:hover {
      color: ${({ color }) => color};
      transition: 0.3s;
      cursor: pointer;
    }

    &:active, &:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none;
    }
  }

  body {
    font-family: Circular, sans-serif;
    font-display: swap;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  if (isLoaded) {
    return (
      <Layout>
        <GlobalStyle />
        <Landing />
        <Projects />
        <About />
      </Layout>
    );
  }

  return (
    <LoadingContainer>
      <Ellipsis />
    </LoadingContainer>
  );
};

export default IndexPage;
