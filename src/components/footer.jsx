import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  border-top: 1px solid #EEEEEE;
  height: 300px;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 24px;
  font-weight: bold;
`;

const ContactContainer = styled.div`
  display: flex;
`;

const Contact = styled.a`
  margin: 0 24px;
`;

const Footer = () => (
  <FooterContainer>
    <div id="contact" />
    <Heading>Let&#39;s get in contact</Heading>
    <ContactContainer>
      <Contact href="mailto:samuelle107@gmail.com" target="_blank">Email</Contact>
      <Contact href="https://www.instagram.com/notsamle/?hl=en" target="_blank">Instagram</Contact>
      <Contact href="https://github.com/samuelle107" target="_blank">Github</Contact>
      <Contact href="https://www.linkedin.com/in/samuelle107/" target="_blank">LinkedIn</Contact>
    </ContactContainer>
  </FooterContainer>
);

export default Footer;
