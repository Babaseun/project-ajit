import React from 'react';
import { Link } from 'react-router-dom';
function SideBar() {
  return (
    <div className="map__item">
      <div className="map__first-item--brand">
        <h1>aJIT</h1>
      </div>
      <div className="map__second-item--links">
        <Link to="/login">Login</Link>
        <div>or</div>
        <Link to="/register">Signup</Link>
      </div>
    </div>
  );
}

export default SideBar;
