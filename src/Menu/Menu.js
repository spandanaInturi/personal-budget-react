import React from 'react';


import {
  Link
} from "react-router-dom";

function Menu() {
  return (
    <nav role="navigation"
    aria-label = "Main menu"
    itemType = "https://schema.org/SiteNavigationElement"> 
    <ul>
        <li><Link to="/" rel ="canonical">Home</Link></li>
        <li><Link to="/about" rel="canonical">About</Link></li>
        <li><Link to="/login" rel ="canonical">Login</Link></li>
        <li><Link to="https://google.com" rel="nofollow">Google</Link></li>
    </ul>
</nav>
  );
}

export default Menu;
