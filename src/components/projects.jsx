import React from 'react';
import styled from 'styled-components';
import ProjectCard from './project-card';
import Section from './section';
import Thinking from '../assets/thinking.svg';
import Analysis from '../assets/analysis.svg';
import Influencer from '../assets/influencer.svg';
import Tasks from '../assets/tasks.svg';
import Thought from '../assets/thought.svg';
import Cooking from '../assets/cooking.svg';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const projects = [
  {
    id: 6,
    title: 'VX.KB',
    link: 'https://github.com/samuelle107/VX.KB',
    description: 'This is a side hobby mine. This is where I keep updated information about the keyboards I have designed.',
    color: '#fff5e0',
    image: <Thought style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 5,
    title: 'Umami',
    link: 'https://umami-website.herokuapp.com/',
    description: 'This site was made using Next.JS and is hosted on Heroku. The website is made for community members to host recipes that do not contain unnecessary backstories.',
    color: '#f2b99d',
    image: <Cooking style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 4,
    title: 'Personal Website',
    link: 'https://github.com/samuelle107/personal-website',
    description: 'My site was made with Gatsby.JS. This is a playground for me to show off my projects and practice modern techniques for web design.',
    color: '#FFE9E2',
    image: <Thinking style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 3,
    title: 'Irene',
    link: 'https://github.com/samuelle107/irene',
    description: 'Irene is a Discord bot made with Node.JS and is hosted on Amazon Web Services. She helps make the lives of members more enjoyable.',
    color: '#E6DBEB',
    image: <Influencer style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 2,
    title: 'MAZ Chan',
    link: 'https://github.com/samuelle107/maz-chan',
    description: 'MAZ Chan is a Discord bot written in Python and is hosted on Heroku. She helps scrape Reddit for information about mechanical keyboards and gives the members fun commands.',
    color: '#bad6f5',
    image: <Analysis style={{ width: '90%', height: '100%' }} />,
  },
  {
    id: 1,
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
