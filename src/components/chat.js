import React from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import Info from './Info';
import Facebook from './Facebook';
import Tripadvisor from './Tripadvisor';
import Booking from './Booking';
import Google from './Google';
import Expedia from './Expedia';
import '../styles/chat.css';
import LandingPage from './LandingPage';

const ChatApp = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="landing-page">
      <div className='landing'>
      {!isLandingPage && (
      <nav className="nav">
        <div className='column align-center'>
          <Link to="/" className='row align-center justify-center english-btn back-link' style={{gap: '5px'}}><i class="fa-solid fa-arrow-left fa-2x white"></i>&nbsp;BACK</Link>
          <h1 className='white heading-name'>My Reviews</h1>
          <p className='white'>Hello, John Doe</p>
        </div>
        <ul className='column'>
          <li>
            <NavLink to="/info" className='nav-link'>Info</NavLink>
          </li>
          <li>
            <NavLink to="/facebook">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/tripadvisor">Tripadvisor</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/google">Google My Business</NavLink>
          </li>
          <li>
            <NavLink to="/expedia">Expedia</NavLink>
          </li>
        </ul>

        <a href='https://uthmanbello.github.io/portfolio/' className='deroyale'>DeRoy<span class="deroyale-at">@</span>l&#233;</a>
      </nav>
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/tripadvisor" element={<Tripadvisor />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/google" element={<Google />} />
        <Route path="/expedia" element={<Expedia />} />
      </Routes>

      </div>
    </div>
  );
};

export default ChatApp;

