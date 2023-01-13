import React from 'react';
import {
  Opening,
  Home,
   Profile,
  Leave,
  // Guest,
   Landing,
   Admin,
   Lunch,
   Breakfast,
   Dinner,
} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AccountBox } from './pages/landing/accountBox';
import styled from "styled-components";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const App = () => {
  return (
    <div className="App">
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Opening />} />
          <Route exact path="/home" element={<Home />} />
           <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/leave" element={<Leave />} />
          <Route exact path="/guest" element={<Guest />} /> */}
          <Route exact path="/landing" element={<Landing />} /> 
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/breakfast" element={<Breakfast />} />
          <Route exact path="/lunch" element={<Lunch />} />
          <Route exact path="/dinner" element={<Dinner />} />
          <Route exact path="/leave" element={<Leave />} />
        </Routes>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </div>
  );
};

export default App;