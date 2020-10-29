import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  max-width: 1200px;
  width: 100%;
  margin: 96px 0;
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
