import React, { Component } from 'react';
import Donate from './DonateComponents/Donate';
import Home from './HomeComponents/Home';
import Logout from './Login-Logout-Register-Components/Logout';
// import Login from './Login-Logout-Components/Login';
import RegisterClub from './RegisterClubComponents/RegisterClub';
// import RegisterUser from './Login-Logout-Components/RegisterUser';
import TournamentContainer from './TournamentComponents/TournamentContainer';
import CreateTournamentform from './TournamentComponents/createtournamentform';
import './DesktopCSS.css';
import RegisterUserOrSignin from './Login-Logout-Register-Components/RegisterUser';
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
            <Link to="Tournaments"> Tournaments </Link> <span> | </span>
            <Link to="RegisterClub"> Register Your Club </Link> <span> | </span>
            <Link to="LoginRegister">Register / Signin </Link>{' '}
            <span> | </span>
            {/* Conditionally render based on signed in or out */}
            <div>
              {/* <Link to="Login"> Sign in </Link> <span> | </span> */}
              <Link to="Signout"> Sign Out </Link> <span> | </span>
            </div>
          </div>
        </nav>

        <Router>
          <Donate path="/Donate" />
          <Home path="/" />
          <TournamentContainer path="/Tournaments">
            <CreateTournamentform path="CreateNewTournament" />
          </TournamentContainer>

          <RegisterClub path="/RegisterClub" />
          {/* <RegisterUser path="/RegisterUser" /> */}
          <RegisterUserOrSignin path="/LoginRegister" />
          <Logout path="/Logout" />
        </Router>
      </div>
    );
  }
}
