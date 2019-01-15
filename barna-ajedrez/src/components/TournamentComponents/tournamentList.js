import React, { Component } from 'react';
import { updateTournamentList } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import TournamentItem from './tournamentitem';
import LinearProgress from '@material-ui/core/LinearProgress';


class TournamentList extends Component {
  componentDidMount() {
    axios.get('http://localhost:3001/GetTournamentList').then(payload => {
      this.props.updateTournamentList(payload);
    });
  }

  render() {
    let tournament = this.props.tournamentInfo[0];
    if (tournament === undefined) {
      return <div> <LinearProgress /> </div>;
    } else {
      return (
        <div id="ti-container">
          {tournament.data.map(tournamentEl => (
            <TournamentItem
              key={tournamentEl.id}
              tournamentName={tournamentEl.nameOfTournament}
              location={tournamentEl.location}
              clubPhone={tournamentEl.clubPhone}
              clubEmail={tournamentEl.clubEmail}
              startDate={tournamentEl.startDate}
              additionalInfo={tournamentEl.additionalInfo}
              dateCreated={tournamentEl.dateCreated}
            />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
    tournamentInfo: state.tournamentAction
});

const mapDispatchToProps = dispatch => ({
  updateTournamentList: tournaments => dispatch(updateTournamentList(tournaments))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentList);
