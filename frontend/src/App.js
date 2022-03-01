import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Error404 from './components/Error404';
import UserState from './context/User/UserState';



export default function App() {
  return (
    <>
    <UserState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Bio" element={<Bio />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
      </UserState>
    </>
  );
}
