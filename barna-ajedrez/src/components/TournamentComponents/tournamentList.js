import React, { Component } from 'react';
import { updateTournamentList, removeTournament } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import TournamentItem from './tournamentitem';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment';


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
        // console.log('A', a, 'B', b);

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
        let today = moment().format("DD-MM-YYYY").toString();
        let tournamentDay = el.startDate.slice(0, 3);
        let tournamentMonth = el.startDate.slice(3, 5);

        if (today > el.startDate) {
          console.log(el, 'ELEMENT ');
          const tournamentID = el.id;
          // console.log('TOURNAMENTID ', tournamentID);

          axios
            .delete(`http://localhost:3001/DeleteTournament/ ${tournamentID}`)
            .then(res =>{
              console.log('DELETE RESPOSE', res);
              if (res.status === 204) {
                console.log('FUCK YES DELETE SUCCESSFULL!!!!!!')
              }

            })
          // this.props.removeTournament(el);
          // return el;
        } else {
          return el;
        }
        // console.log('FILTER ELEMET',el, 'Today', today, 'DATE PASSEDasdjhfalksdjhflka',   );
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
  // removeTournament: tournament => dispatch(removeTournament(tournament)),
  updateTournamentList: tournaments => dispatch(updateTournamentList(tournaments))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentList);
