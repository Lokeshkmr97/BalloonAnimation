import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BalloonAnimation from './components/BallonAnimation'; 
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container"> 
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/">Balloon Animation</Link>
              </li>
              <li>
                <Link to="/UserForm">User Form</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<BalloonAnimation />} />
            <Route exact path="/UserForm" element={<UserForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
