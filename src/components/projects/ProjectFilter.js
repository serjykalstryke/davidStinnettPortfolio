import React from 'react';
import FilterIcon from './FilterIcon';

const ProjectFilter = ({ filter }) => {
  return (
    <div>
      <h3 className="otherText">Select a technology below to filter the list:</h3>

      <FilterIcon filter={filter} filterName='react' />
      <FilterIcon filter={filter} filterName='javascript' />
      <FilterIcon filter={filter} filterName='nodejs' />
      <FilterIcon filter={filter} filterName='mongodb' />
      <FilterIcon filter={filter} filterName='mysql' />

      <i
        className='far fa-times-circle text'
        onClick={() => filter('')}
        style={{
          display: 'block',
          cursor: 'pointer',
          fontSize: '2rem',
          justifyContent: 'center'
        }}
      />
    </div>
  );
};

export default ProjectFilter;