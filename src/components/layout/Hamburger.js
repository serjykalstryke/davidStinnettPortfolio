import React from 'react';

export const Hamburger = ({ toggleMobileNav, opened }) => {
  return (
    <button
      className='mobile-dropdown-toggle'
      aria-hidden='true'
      onClick={toggleMobileNav}
    >
      <div id='nav-icon1' className={opened ? 'nav dropdown-opened' : 'nav'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default Hamburger;