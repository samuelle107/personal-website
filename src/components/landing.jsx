import React from 'react';
import styled from 'styled-components';
import image from '../images/samuelle107.jpg';
import Section from './section';

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1169px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const ProfilePicture = styled.img`
  display: block;
  height: auto;
  flex: 1;
  border-radius: 4px;
  width: 200px;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding-right: 64px;

  @media screen and (max-width: 1169px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    padding: 0;
  }
`;

const Emphasis = styled.span`
  color: #de0f66;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 24px;

  @media screen and (max-width: 1169px) {
    font-size: 38px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 24px;

  @media screen and (max-width: 1169px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Landing = () => (
  <Section>
    <div id="home" />
    <LandingContainer>
      <InfoContainer>
        <Title>
          Hi, I&#39;m
          <Emphasis>&nbsp;Samuel Le</Emphasis>
        </Title>
        <Description>
        I am a software engineer residing in the Northwest Arkansas area.
        I enjoy making clean web and mobile application and 3D designing.
        </Description>
      </InfoContainer>
      <ProfilePicture
        src={image}
        alt="Myself"
      />
    </LandingContainer>
  </Section>
);

export default Landing;
