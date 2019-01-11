import React, { Component } from 'react';

class TournamentItem extends Component {


  render() {
    return (
      <div>
        <div>
          {this.props.tournamentName}
        </div>

        <div>
          {this.props.location}
        </div>

        <div>
          {this.props.clubPhone}
        </div>

        <div>
          {this.props.clubEmail}
        </div>

        <div>
          {this.props.startDate}
        </div>

        <div>
          {this.props.additionalInfo}
        </div>

        <div>
          {this.props.dateCreated}
        </div>
      </div>
    );
  }
}
export default TournamentItem;
