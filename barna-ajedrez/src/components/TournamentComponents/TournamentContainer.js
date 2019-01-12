import React, { Component } from 'react';
import TournamentList from './tournamentList';
import { Link } from '@reach/router';
import UpdateTournamentListButton from '../UpdateTournamentListButton';
// import CreateTournamentform from './TournamentComponents/createtournamentform';

class TournamentContainer extends Component {
  render() {
    return (
      <div className="container">
        {/* Need to conditionally load that when the create tournament link is clicked it shows just the form */}
        <Link to="CreateNewTournament">Create New Tournament</Link>
        {this.props.children}
        <UpdateTournamentListButton />

        <p> Current List of the Tournaments within Barcelona </p>
        <TournamentList />
      </div>
    );
  }
}
export default TournamentContainer;
