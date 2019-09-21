import React from 'react';
import cl from './AboutUs.module.css';

function AboutUs() {
  return (
    <div className={cl.AboutUs}>
      <h2 className={cl.AboutUsHeader}>О нас</h2>
      <p className={cl.AboutUsText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default AboutUs;
