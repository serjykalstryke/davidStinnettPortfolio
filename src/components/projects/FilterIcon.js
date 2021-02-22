import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';

const FilterIcon = ({ filter, filterName }) => {
  return (
    <Fragment>
      <Image
        src={`https://cdn.svgporn.com/logos/${filterName}.svg`}
        alt={filterName}
        onClick={() => filter(filterName)}
        className='filterIcon magnifyBtn'
      />
    </Fragment>
  );
};

export default FilterIcon;