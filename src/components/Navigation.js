import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
    </div>
    // ! href를 사용하면 페이지가 로드될 때 전체 refresh하여 render함 //
    // ! Link to를 사용하면 refresh되지 않는다.
  );
}

export default Navigation;
