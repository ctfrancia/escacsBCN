import React, { Component } from 'react';
import { updateTournamentList } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import TournamentItem from './tournamentitem';
import LinearProgress from '@material-ui/core/LinearProgress';

// const styles = {
//   root: {
//     flexGrow: 1
//   }
// };

class TournamentList extends Component {
  //chucknorris representing api call to my back end
  componentDidMount() {
    axios.get('http://localhost:3001/GetTournamentList').then(payload => {
      console.log('initial fetch', payload);

      this.props.updateTournamentList(payload);
    });
  }

  render() {
    let tournament = this.props.tournamentInfo[0];
    console.log('THIS IS tournament info', tournament);
    if (tournament === undefined) {
      return <div> <LinearProgress /> </div>;
    } else {
      console.log('THIS IS tournament info', tournament.data);
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

const mapStateToProps = state => (
  // console.log('MAP STATE TO PROPS STATE', state.tournamentAction),
  {
    tournamentInfo: state.tournamentAction
  }
);
const mapDispatchToProps = dispatch => ({
  updateTournamentList: tournaments =>
    dispatch(updateTournamentList(tournaments))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentList);
