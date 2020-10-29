import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/layout';
import Landing from '../components/landing';
import Projects from '../components/projects';
import About from '../components/about';

const GlobalStyle = createGlobalStyle`
  ${reset}

  p {
    line-height: 1.5;
    font-size: 20px;
  }

  a {
    font-size: 16px;
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
      color: #de0f66;
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
    font-family: Helvetica, Arial, sans-serif;
  }
`;

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Landing />
    <Projects />
    <About />
  </Layout>
);

export default IndexPage;
