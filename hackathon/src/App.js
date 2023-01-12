import React from 'react';
import {
  Opening,
  Home
  // Profile,
  // Leave,
  // Guest,
  // Landing
} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Opening />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/leave" element={<Leave />} />
          <Route exact path="/guest" element={<Guest />} />
          <Route exact path="/landing" element={<Landing />} /> */}
        </Routes>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </div>
  );
};

export default App;