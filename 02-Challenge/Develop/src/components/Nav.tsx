import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav-list" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Candidate Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/SavedCandidates" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;