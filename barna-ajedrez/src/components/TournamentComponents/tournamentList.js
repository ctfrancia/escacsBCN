import React, { Component } from 'react';
import { updateTournamentList } from '../../actions/actions';
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

const mapStateToProps = state => (
  // console.log('MAP STATE TO PROPS STATE', state),
  {
  tournamentInfo: state.tournamentAction
});
const mapDispatchToProps = dispatch => ({
  updateTournamentList: tournaments => dispatch(updateTournamentList(tournaments)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentList);
