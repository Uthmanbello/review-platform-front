import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ChatApp from './chat';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatApp />} />
      </Routes>
    </div>
  );
}

export default App;
