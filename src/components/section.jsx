import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const FadeIn = keyframes`
  from {
    opacity: 0%;
    transform: translateY(10%);
    scale: 0.9;
  }

  to {
    opacity: 100%;
    transform: translateY(0);
    scale: 1;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  max-width: 1200px;
  width: 100%;
  margin: 96px 0;

  animation: ${FadeIn} 1.5s;
`;

const Section = ({ children }) => (
  <SectionContainer>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
