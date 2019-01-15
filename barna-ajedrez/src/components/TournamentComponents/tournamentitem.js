import React, { Component } from 'react';

class TournamentItem extends Component {
  render() {
    // let time = moment(this.props.dateCreated.slice(0, 10)).locale('es');
    // console.log('Time',time.);
    let time = this.props.dateCreated.slice(0,10);

    return (
      <div className="tContainer">
        <div className="tName">
          <h3>tournament name</h3>
          {this.props.tournamentName}
        </div>

        <div className="tLocation">
          <h3>location</h3>
          {this.props.location}
        </div>

        <div className="tPhone">
          <h3>phone number of club</h3>
          {this.props.clubPhone}
        </div>

        <div className="tEmail">
          <h3>contact email</h3>
          {this.props.clubEmail}
        </div>

        <div className="tDate">
          <h3>date</h3>
          {this.props.startDate}
        </div>

        <div className="tInfo hide-overflow">
          <h3>info</h3>
          {this.props.additionalInfo}
        </div>

        <div className="tCreated">
          <h3>date created</h3>
          {time}
        </div>
      </div>
    );
  }
}
export default TournamentItem;
