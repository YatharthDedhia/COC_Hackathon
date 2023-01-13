import React from 'react';
import {
  Opening,
  Home,
   Profile,
  Leave,
<<<<<<< HEAD
  Guest,
   Landing
=======
  // Guest,
   Landing,
   Admin,
   Lunch,
   Breakfast,
   Dinner,
>>>>>>> 7c3afb8a0b094ed1794be33923d55624515806fd
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
<<<<<<< HEAD
          <Route exact path="/leave" element={<Leave />} />
          <Route exact path="/guest" element={<Guest />} />
          <Route exact path="/landing" element={<Landing />} /> 
=======
          {/* <Route exact path="/leave" element={<Leave />} />
          <Route exact path="/guest" element={<Guest />} /> */}
          {/* <Route exact path="/landing" element={<Landing />} />  */}
          <Route exact path="/landing" element={<AppContainer><AccountBox /></AppContainer>} /> 
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/breakfast" element={<Breakfast />} />
          <Route exact path="/lunch" element={<Lunch />} />
          <Route exact path="/dinner" element={<Dinner />} />
          <Route exact path="/leave" element={<Leave />} />
>>>>>>> 7c3afb8a0b094ed1794be33923d55624515806fd
        </Routes>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </div>
  );
};

export default App;