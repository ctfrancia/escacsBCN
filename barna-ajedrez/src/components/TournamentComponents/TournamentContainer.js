import React, { Component } from 'react';
import CreateTournamentForm from './createtournamentform';
import TournamentList from './tournamentList';
import { Router, Link } from '@reach/router';

class TournamentContainer extends Component {
  render() {
    return (
      <div className="container">

        <Link to="/Tournaments/CreateNewTournament">Create New Tournament</Link>
        <p> Here is where the tournaments will be listed </p>
        {this.props.children}
          <TournamentList />
      </div>
    );
  }
}
export default TournamentContainer;
