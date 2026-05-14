import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="glass-navbar navbar">
      <div className="container flex-between nav-content">
        <Link to="/" className="logo flex-center">
          <Code2 size={32} className="logo-icon" />
          <span className="logo-text gradient-text">DevArena</span>
        </Link>
        
        <ul className="nav-links flex-center">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/problems" className={location.pathname === '/problems' ? 'active' : ''}>Problems</Link>
          </li>
          <li>
            <Link to="/assessments" className={location.pathname === '/assessments' ? 'active' : ''}>Assessments</Link>
          </li>
          <li>
            <Link to="/contests" className={location.pathname === '/contests' ? 'active' : ''}>Contests</Link>
          </li>
          <li>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
          </li>
        </ul>

        <div className="nav-actions flex-center">
          <Link to="/login" className="btn btn-outline" style={{marginRight: '1rem'}}>Log In</Link>
          <Link to="/register" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
