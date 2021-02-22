import React, { Fragment } from 'react';

const Logo = ({ logo, logoAlt }) => {
  return (
    <Fragment>
      <img src={logo} alt={logoAlt} width='100' />
    </Fragment>
  );
};

export default Logo;