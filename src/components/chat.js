import React from 'react';
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import Info from './Info';
import Facebook from './Facebook';
import Tripadvisor from './Tripadvisor';
import '../styles/chat.css';

const ChatApp = () => {
  
  return (
    <div className="landing-page">
      <div className='landing'>

      <nav className="nav">
        <div className='column align-center'>
          <Link to="/" className='row align-center justify-center english-btn back-link' style={{fontSize: '0.8rem', gap: '5px'}}><i class="fa-solid fa-arrow-left fa-2x white"></i>&nbsp;BACK</Link>
          <h1 className='white heading-name'>My Reviews</h1>
          <p className='white'>Hello, John Doe</p>
        </div>
        <ul className='column'>
          <li>
            <NavLink to="/" className='nav-link'>Info</NavLink>
          </li>
          <li>
            <NavLink to="/facebook">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/tripadvisor">Tripadvisor</NavLink>
          </li>
        </ul>

        <a href='https://uthmanbello.github.io/portfolio/' className='deroyale'>DeRoy<span class="deroyale-at">@</span>l&#233;</a>
      </nav>

      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/tripadvisor" element={<Tripadvisor />} />
      </Routes>

      </div>
    </div>
  );
};

export default ChatApp;

