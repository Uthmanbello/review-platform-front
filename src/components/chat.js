import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';
import Facebook from './Facebook';
import Tripadvisor from './Tripadvisor';
import Booking from './Booking';
import Google from './Google';
import Expedia from './Expedia';
import '../styles/chat.css';

const ChatApp = () => {
  const [activeComponent, setActiveComponent] = useState('info');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="landing-page">
      <div className='landing'>
        <nav className="nav">
          <div className='column align-center'>
            <Link to="/" className='row align-center justify-center english-btn back-link' style={{gap: '5px'}}>
              <i className="fa-solid fa-arrow-left fa-2x white"></i>&nbsp;BACK
            </Link>
            <h1 className='white heading-name'>My Reviews</h1>
            <p className='white'>Hello, John Doe</p>
          </div>
          <ul className='column'>
            <li>
              <button onClick={() => handleButtonClick('info')} className={`nav-link ${activeComponent === 'info' ? 'active' : ''}`}>
                Info
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('facebook')} className={`nav-link ${activeComponent === 'facebook' ? 'active' : ''}`}>
                Facebook
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('tripadvisor')} className={`nav-link ${activeComponent === 'tripadvisor' ? 'active' : ''}`}>
                Tripadvisor
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('booking')} className={`nav-link ${activeComponent === 'booking' ? 'active' : ''}`}>
                Booking
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('google')} className={`nav-link ${activeComponent === 'google' ? 'active' : ''}`}>
                Google My Business
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick('expedia')} className={`nav-link ${activeComponent === 'expedia' ? 'active' : ''}`}>
                Expedia
              </button>
            </li>
          </ul>
          <a href='https://uthmanbello.github.io/portfolio/' className='deroyale'>
            DeRoy<span className="deroyale-at">@</span>l&#233;
          </a>
        </nav>

        <div className='chat-component' style={{ display: activeComponent === 'info' ? 'flex' : 'none' }}>
          <Info />
        </div>
        <div className='chat-component' style={{ display: activeComponent === 'facebook' ? 'flex' : 'none' }}>
          <Facebook />
        </div>
        <div className='chat-component' style={{ display: activeComponent === 'tripadvisor' ? 'flex' : 'none' }}>
        <Tripadvisor />
        </div>
        <div className='chat-component' style={{ display: activeComponent === 'booking' ? 'flex' : 'none' }}>
          <Booking />
        </div>
        <div className='chat-component' style={{ display: activeComponent === 'google' ? 'flex' : 'none' }}>
          <Google />
        </div>
        <div className='chat-component' style={{ display: activeComponent === 'expedia' ? 'flex' : 'none' }}>
          <Expedia />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
