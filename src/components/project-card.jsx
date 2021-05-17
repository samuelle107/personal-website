import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  height: 730px;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    width: 50%;
    align-items: ${({ index }) => (index % 2 === 0 ? 'flex' : 'flex-end')};
    padding: ${({ index }) => (index % 2 === 0 ? '0 15px 30px 0' : '0 0 30px 15px;')};
    box-sizing: border-box;
  }

  @media screen and (max-width: 799px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  height: 100%;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    scale: 1.025;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const HoverWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 48px 0 0 48px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 12px;
  color: rgba(0,0,0, 0.5);
`;

const LearnMore = styled.h1`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 12px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectCard = ({
  title,
  description,
  link,
  color,
  index,
  image,
}) => (
  <ProjectCardContainer index={index} href={link} target="_blank">
    <HoverWrapper>
      <Card color={color}>
        <InfoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <LearnMore>Learn More →</LearnMore>
        </InfoContainer>
        <ImageContainer>
          {image}
        </ImageContainer>
      </Card>
    </HoverWrapper>
  </ProjectCardContainer>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.node.isRequired,
};

export default ProjectCard;
