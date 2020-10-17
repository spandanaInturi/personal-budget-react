import React from 'react';
import './App.scss';
import axios from './AxiosPie/AxiosPie';
import Pie from './PieChart/PieChart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
     <Menu/>
     <Hero/>
     <div className = "mainContainer"></div>
      <Switch>
        <Router path = "/about">
        <AboutPage/>
        </Router>
        <Router path = "/login">
        <LoginPage/>
        </Router>
        <Router path = "/">
        <HomePage/>
        </Router>
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
