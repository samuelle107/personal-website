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
  color: #de0f66;
  font-weight: bold;
`;

const About = () => (
  <Section>
    <div id="about" />
    <AboutContainer>
      <Title>
        Hey, I am
        <Emphasis>&nbsp;Samuel Le</Emphasis>
      </Title>
      <Paragraph>
        I graduated from the
        <Emphasis>&nbsp;University of Arkansas&nbsp;</Emphasis>
        in 2020 with a bachelor&#39;s degree in
        <Emphasis>&nbsp;Computer Science&nbsp;</Emphasis>
        and a minor in Mathematics.
        While my major had no emphasis on UI/UX,
        it was always something I appreciated.
        I wanted to go the extra mile to make my applications look aesthetically pleasing
        without losing any functionality nor hindering the user experience.
      </Paragraph>
      <Paragraph>
        Currently, I work for
        <Emphasis>&nbsp;Walmart&nbsp;</Emphasis>
        as a UI/UX Developer.
        While I am still fresh to the industry,
        I am trying to adapt to modern techniques of UI/UX design during
        and outside of work.
        Previously, I have worked as a web developer at the University of Arkansas and
        a mobile developer intern at J.B. Hunt.
        My main toolkit consists of React.JS, React Native, Android, some iOS, and Python.
      </Paragraph>
      <Paragraph>
        During the quarantine of 2020, I was trapped in my house and had a lot of spare time.
        Asides from coding, I wanted to use that time to pick up new skills.
        I love going out to eat, but it was kind of a problem then,
        so I went on YouTube and started watching cooking videos.
        I will not lie and say that my food is delicious,
        but I can at least now cook edible food.
        Something else I started getting into was custom mechanical keyboards.
        Do not fall into this long and dark rabbit hole.
        I started researching about builds, different sets, current and upcoming group buys, etc.
        While doing so, I found a community of people within the hobby that have since improved my
        quality of life.
        I also got into stocks,
        but there isn&#39;t really much to say since I wake up everyday in red.
      </Paragraph>
      <Paragraph>
        In my spare time, I enjoy playing video games.
        Currently, I am playing for Final Fantasy XIV and trying not to floor tank.
        I have been waiting for Cyberpunk 2077 for 7 years,
        and I still am at the time of me writing this.
        Asides from that, I enjoy food.
        Food is pretty cool, and I wouldn&#39;t be here without it.
        Once the world turns back to normal,
        I want to travel to different countries and try new and familiar foods.
      </Paragraph>
    </AboutContainer>
  </Section>
);

export default About;
