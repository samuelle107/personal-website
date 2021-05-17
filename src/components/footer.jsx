import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/resume.pdf';

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
  font-weight: bold;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 48px;
`;

const ContactContainer = styled.div`
  display: flex;
`;

const Contact = styled.a`
  margin: 0 36px;

  &:hover {
    color: ${({ color }) => color}
  }
`;

const Resume = styled.a`
  margin-bottom: 36px;
  color: #de0f66;

  :visited {
    color: #de0f66;
  }

  :hover {
    color: #ff8cbd;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  scale: 1.5;
  transition: 0.3s;

  &:hover {
    scale: 2;
    transition: 0.2s;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div id="contact" />
    <Heading>Let&#39;s get in contact</Heading>
    <Description>I will usually respond in 1 to 2 business days.</Description>
    <Resume href={resume} target="_blank">Check out my Resume</Resume>
    <ContactContainer>
      <Contact
        color="#f7c3b5"
        href="mailto:samuelle107@gmail.com"
        target="_blank"
      >
        <Icon icon={faEnvelope} />
      </Contact>
      <Contact
        color="#eabfff"
        href="https://www.instagram.com/notsamle/?hl=en"
        target="_blank"
      >
        <Icon icon={faInstagram} />
      </Contact>
      <Contact
        color="#a3d3ff"
        href="https://github.com/samuelle107"
        target="_blank"
      >
        <Icon icon={faGithub} />
      </Contact>
      <Contact
        color="#de0f66"
        href="https://www.linkedin.com/in/samuelle107"
        target="_blank"
      >
        <Icon icon={faLinkedin} />
      </Contact>
    </ContactContainer>
  </FooterContainer>
);

export default Footer;
