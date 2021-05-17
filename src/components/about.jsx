import React from 'react';
import styled from 'styled-components';
import Section from './section';

const AboutContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin: 24px 0;
`;

const Emphasis = styled.span`
  color: ${({ color }) => color};
  font-weight: bold;
`;

const About = () => (
  <Section>
    <div id="about" />
    <AboutContainer>
      <Title>
        Hey, I am
        <Emphasis color="#de0f66">&nbsp;Samuel Le</Emphasis>
      </Title>
      <Paragraph>
        I graduated from the
        <Emphasis color="#de0f66">&nbsp;University of Arkansas&nbsp;</Emphasis>
        in 2020 with a bachelor&#39;s degree in
        <Emphasis color="#de0f66">&nbsp;Computer Science&nbsp;</Emphasis>
        and a minor in Mathematics. My main interest is front-end development, but I also enjoy making discord bots on the side.
        As of now, I am currently a UI/UX developer at
        <Emphasis color="#de0f66">&nbsp;Walmart</Emphasis>.
      </Paragraph>
      <Paragraph>
        I am a believer that the only good code is clean, testable, and re-usable code.
        Who cares if you can fit everything in one line if no one can read it?
        I am also a believer in going the extra mile to make a good UI/UX experience.
        We spend so much time of our day interacting with these applications, so why not make it aesthetically pleasing?
      </Paragraph>
      <Paragraph>
        In my free time, I enjoy taking on different side projects such as iOS development, web development, and designing bespoke mechanical keyboards, cooking, playing video games, and reading.
      </Paragraph>
    </AboutContainer>
  </Section>
);

export default About;
