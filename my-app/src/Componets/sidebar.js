import React from 'react';
import Sidebar from './Sidebar';
import './MainContainer.css'; // Main container styles

const MainContainer = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="background-image">
        {/* Your background image content */}
      </div>
    </div>
  );
};

export default MainContainer;
