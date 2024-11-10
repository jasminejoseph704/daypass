import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // No Switch in v6
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UploadGym from './pages/UploadGym';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        {/* Replacing Switch with Routes and updating Route syntax */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadGym />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
