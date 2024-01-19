import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TitleText from '../components/Text.js';
import youtubeIcon from '../assets/img/youtube.png';
import githubIcon from '../assets/img/github.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="topnav">
      <a
        href="/"
        onClick={() => handleLinkClick('/')}
        className={`${
          activeLink === '/' ? 'active' : ''
        } White-text Eerie-text Small-text`}
      >
        <TitleText text="Main Page" />
      </a>
      <a
        href="/profile"
        onClick={() => handleLinkClick('/profile')}
        className={`${
          activeLink === '/profile' ? 'active' : ''
        } White-text Eerie-text Small-text`}
      >
        <TitleText text="Profile" />
      </a>
      <div className="right-side">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img style={{ maxWidth: '30px', maxHeight: '30px' }} src={youtubeIcon} alt="YouTube" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=DSG53BsUYd0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img style={{ maxWidth: '30px', maxHeight: '30px' }} src={githubIcon} alt="Github" />
        </a>
        <a
          href="/project"
          onClick={() => handleLinkClick('/project')}
          className={`${
            activeLink === '/project' ? 'active' : ''
          } White-text Eerie-text Small-text`}
        >
          <TitleText text="Project" />
        </a>
        <a
          href="/contact_me"
          onClick={() => handleLinkClick('/contact_me')}
          className={`${
            activeLink === '/contact_me' ? 'active' : ''
          } White-text Eerie-text Small-text`}
        >
          <TitleText text="Contact Me" />
        </a>
      </div>
    </div>
  );
};

export default Header;
