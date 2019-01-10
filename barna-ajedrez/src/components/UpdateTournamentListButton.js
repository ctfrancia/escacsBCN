import { connect } from 'react-redux';
import React, { Component } from 'react';
import { updateTournamentList } from '../actions/actions';
import axios from 'axios';
// import { updateTournamentList } from '../actions/actions'

class UpdateTournamentListButton extends Component {

  getTournamentList = () => {
    console.log('get request from button');
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(payload => {
        console.log('fetch from button', payload);
        this.props.updateTournamentList(payload.data);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getTournamentList}>
          <p>Actualizar lista de torneos</p>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateTournamentList: tournament => dispatch(updateTournamentList(tournament))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTournamentListButton);
