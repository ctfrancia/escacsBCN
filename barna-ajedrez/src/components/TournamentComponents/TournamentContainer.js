import React, { Component } from 'react';
import TournamentList from './tournamentList';
import { Link } from '@reach/router';
import UpdateTournamentListButton from '../UpdateTournamentListButton';
import './tournamentcontainer.css';
const image = require('../../images/chess-clock.svg')
// import CreateTournamentform from './TournamentComponents/createtournamentform';

class TournamentContainer extends Component {
  render() {
    return (
      <div className="tc-container">
        {/* Need to conditionally load that when the create tournament link is clicked it shows just the form */}
        <div className="tc-button-container">
          <Link to="CreateNewTournament">
            <button>
              <p className="button-font">CRIAR UN TORNEO NUVEO</p>
              <img src={image} alt="chess" className="img-clock" />
            </button>
          </Link>
          <UpdateTournamentListButton />
        </div>
        {this.props.children}

        <p className="tc-text"> Lista de torneos en Barcelona </p>
        <div className="tl-container">
          <TournamentList />
        </div>
      </div>
    );
  }
}
export default TournamentContainer;
