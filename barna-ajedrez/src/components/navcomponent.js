import { connect } from 'react-redux';
import React, { Component } from 'react';
import Donate from './DonateComponents/Donate';
import Home from './HomeComponents/Home';
import Logout from './Login-Logout-Register-Components/Logout';
import RegisterClub from './RegisterClubComponents/RegisterClub';
import TournamentContainer from './TournamentComponents/TournamentContainer';
import CreateTournamentform from './TournamentComponents/createtournamentform';
import RegisterUserOrSignin from './Login-Logout-Register-Components/RegisterUser';
import { Link, Router } from '@reach/router';
import { updateTournamentList } from '../actions/actions';

class NavBar extends Component {


  render() {
    return (
      <div className="container">
        <nav>
          <div className="donate-div">
            <Link to="/Donate"> Donate </Link> <span> | </span>
          </div>
          <div className="rest-div">
            <Link to="/"> Home </Link> <span> | </span>
            <Link to="Tournaments" onClick={this.getTournamentList}>
              {' '}
              Tournaments{' '}
            </Link>{' '}
            <span> | </span>
            <Link to="RegisterClub"> Register Your Club </Link> <span> | </span>
            <Link to="LoginRegister">Register / Signin </Link> <span> | </span>
              {/* Conditionally render based on signed in or out * this will be done by checking state*/}
            <div>
            </div>
              {/* <Link to="Login"> Sign in </Link> <span> | </span> */}
              <Link to="Signout"> Sign Out </Link> <span> | </span>
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
const mapStateToProps = state => ({});

//the data is being received here
const mapDispatchToProps = dispatch => ({
  updateTournamentList: (tournament) => dispatch(updateTournamentList(tournament))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
