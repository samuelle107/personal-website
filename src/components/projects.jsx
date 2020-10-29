import React from 'react';
import styled from 'styled-components';
import ProjectCard from './project-card';
import Section from './section';
import Thinking from '../assets/thinking.svg';
import Analysis from '../assets/analysis.svg';
import Influencer from '../assets/influencer.svg';
import Tasks from '../assets/tasks.svg';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const projects = [
  {
    id: 1,
    title: 'Personal Website',
    link: 'https://github.com/samuelle107/personal-website',
    description: 'My site was made with Gatsby.JS. This is a playground for me to show off my projects and practice modern techniques for web design',
    color: '#FFE9E2',
    image: <Thinking style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 2,
    title: 'Irene',
    link: 'https://github.com/samuelle107/irene',
    description: 'Irene is a Discord bot made with Node.JS and is hosted on Amazon Web Services. She helps makes the lives of the members more enjoyable.',
    color: '#E6DBEB',
    image: <Influencer style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 3,
    title: 'MAZ Chan',
    link: 'https://github.com/samuelle107/maz-chan',
    description: 'MAZ Chan is a Discord bot written in Python and is hosted on Heroku. She helps scrap Reddit for information about mechanical keyboards and gives the members fun commands.',
    color: '#DDEEFE',
    image: <Analysis style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 4,
    title: 'Todo',
    link: 'https://github.com/samuelle107/todo-list',
    description: 'Todo is an Android application. Users can add tasks and set alarms when the task is due.',
    color: '#E486A8',
    image: <Tasks style={{ width: '70%', height: '100%' }} />,
  },
];

const Projects = () => (
  <Section>
    <div id="projects" />
    <ProjectsContainer>
      {
        projects.map((item, i) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            color={item.color}
            index={i}
          />
        ))
      }
    </ProjectsContainer>
  </Section>
);

export default Projects;
