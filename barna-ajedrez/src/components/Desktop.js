import React, { Component } from 'react';
import Donate from './DonateComponents/Donate';
import Home from './HomeComponents/Home';
import Logout from './Login-Logout-Components/Logout';
import Login from './Login-Logout-Components/Login';
import RegisterClub from './RegisterClubComponents/RegisterClub';
import RegisterUser from './UserRegistrationComponents/RegisterUser';
import TournamentContainer from './TournamentComponents/TournamentContainer';
import { Link, Router } from '@reach/router';


export default class Desktop extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <Link to="/Donate"> Donate </Link>
          <Link to="/"> Home </Link>
          <Link to="/Tournaments"> Tournaments </Link>
          <Link to="/RegisterClub"> Register Your Club </Link>
          <Link to="/RegisterUser">Register Yourself </Link>
          {/* Conditionally render based on signed in or out */}
          <div>
            <Link to="/Login"> Sign in </Link>
            <Link to="/Signout"> Sign Out </Link>
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
