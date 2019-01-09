import React, { Component } from 'react';
import Donate from './DonateComponents/Donate';
import Home from './HomeComponents/Home';
import Logout from './Login-Logout-Components/Logout';
import Login from './Login-Logout-Components/Login';
import RegisterClub from './RegisterClubComponents/RegisterClub';
import RegisterUser from './UserRegistrationComponents/RegisterUser';
import TournamentContainer from './TournamentComponents/TournamentContainer';
import './DesktopCSS.css';
import { Link, Router } from '@reach/router';

export default class Desktop extends Component {
  render() {
    return (
      <div className="container">

          <nav>
            <div className="donate-div">
              <Link to="/Donate"> Donate </Link> <span> | </span>
            </div>
            <div className="rest-div">
              <Link to="/"> Home </Link> <span> | </span>
              <Link to="/Tournaments"> Tournaments </Link> <span> | </span>
              <Link to="/RegisterClub"> Register Your Club </Link> <span> | </span>
              <Link to="/RegisterUser">Register Yourself </Link> <span> | </span>
              {/* Conditionally render based on signed in or out */}
              <div>
                <Link to="/Login"> Sign in </Link> <span> | </span>
                <Link to="/Signout"> Sign Out </Link> <span> | </span>
              </div>
            </div>
          </nav>


        <Router>
          <Donate path="/Donate" />
          <Home path="/" />
          <TournamentContainer path="/Tournaments" />
          <RegisterClub path="/RegisterClub" />
          <RegisterUser path="/RegisterUser" />
          <Login path="/Login" />
          <Logout path="/Logout" />
        </Router>
      </div>
    );
  }
}
