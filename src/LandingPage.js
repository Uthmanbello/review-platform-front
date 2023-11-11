import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {

  return (
    <div className="landing-page">
      <div className='landing'>
        <h2 className='landing-page-heading'>My Review Partner</h2>
        <div className='lang-btns'>
          <Link to="/chat" className='lang-btn english-btn'>Get Started</Link>
        </div>    
        <div className='landing-footer'>
          <p style={{ color: '#0F7876', fontWeight: '900' }}>&copy; {new Date().getFullYear()} <span style={{ fontWeight: 900, fontFamily: 'Josefin Sans, sans-serif', color: '#0F7876' }}>DeRoy<span style={{ color: '#F98F45' }} className="deroyale-at">@</span>l&#233;</span></p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
