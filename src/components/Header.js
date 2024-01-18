import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/portfolio"><p className="White-text Eerie-text Normal-text">Portfolio</p></Link></li>
          <li><a className="White-text Eerie-text Normal-text" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a className="White-text Eerie-text Normal-text" href="https://www.youtube.com/watch?v=DSG53BsUYd0" target="_blank" rel="noopener noreferrer">DuckDuckGo</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
