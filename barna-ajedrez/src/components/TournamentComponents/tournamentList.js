import React, { Component } from 'react';
import { updateTournamentList } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import TournamentItem from './tournamentitem';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment';
// moment.format();


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
      tournament.data.sort((a,b) => {
        let arr1 = a.startDate.split('-').slice(0, 10);
        let arr2 = b.startDate.split('-').slice(0, 10);
        let aDD = arr1[0];
        let aMM = arr1[1];
        let aYYYY = arr1[2];
        let bDD = arr2[0];
        let bMM = arr2[1];
        let bYYYY = arr2[2];
        console.log(arr1, arr2,'ARRAYS');
        return new Date(aYYYY, aMM, aDD) - new Date(bYYYY, bMM, bDD);
      })
      .filter(el => {
        const today = moment()._d;
        console.log('FILTER ELEMET',el, 'DATE', today );

      });
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
