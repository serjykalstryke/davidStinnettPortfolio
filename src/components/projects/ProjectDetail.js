import React from 'react';
import Card from 'react-bootstrap/Card';
import CardButton from './CardButton';

const ProjectDetail = ({ name, description, repo, app }) => {
  return (
    <div className='projectDetail mediaQuery'>
      <Card.Title
        className='mediaQuery'
        style={{
          color: '#143840',
          fontWeight: 'bold'
        }}
      >
        {name}
      </Card.Title>
      <Card.Text
        className='mediaQuery'
        style={{
          color: '#143840'
        }}
      >
        {description}
      </Card.Text>

      <CardButton text='See the Code' href={repo} />
      <CardButton text='See It Live' href={app} />
    </div>
  );
};

export default ProjectDetail;