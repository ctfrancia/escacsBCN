import React, { Component } from 'react';
import { fetchTournamentList, updateTournamentList } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import TournamentItem from './tournamentitem';

class TournamentList extends Component {
  //chucknorris representing api call to my back end
componentDidMount() {
  axios
    .get('https://api.chucknorris.io/jokes/random')
    .then((payload) => {
      console.log('initial fetch', payload);
      this.props.updateTournamentList(payload.data);
    });
}

  render() {
    return (
      <div>
        {this.props.tournamentInfo.map(tournament =>
          <TournamentItem
            key={tournament.id}
            tournamentQuote={tournament.value}
          />
          )}
      </div>
    );
  }
}

//right now state is my reducers looks like each reducer has it's own state
//we have to say the reducer that we are interested in fetching the information
const mapStateToProps = state => (
  console.log('MAP STATE TO PROPS STATE', state.updateTournamentList.tournaments),
  {
  tournamentInfo: state.updateTournamentList.tournaments
});
//the data is being received here
const mapDispatchToProps = dispatch => ({
  // fetchTournamentList: tournaments => dispatch(fetchTournamentList(tournaments)),
  updateTournamentList: tournaments => dispatch(updateTournamentList(tournaments)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentList);
