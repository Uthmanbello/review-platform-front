import React from 'react';
import { Routes, Route, Router, Navigate } from 'react-router-dom';
import './styles/App.css';
import ChatApp from './components/chat';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reviews" element={<ChatApp />} />
      </Routes>
      {/* <ChatApp /> */}
    </div>
  );
}

export default App;
