import React, { Component } from 'react';
import './tournamentList.css';
// import styled from 'emotion';
// import { jsx } from '@emotion/core';

// const Container = styled('div')`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   flex-basis: 30%;
// `;
// const Location = styled('div')`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   flex-basis: 30%;
// `;

class TournamentItem extends Component {
  render() {
    return (
      <div className="tContainer">
        <div className="tName">
          tournament name
          {this.props.tournamentName}
        </div>

        <div className="tLocation">
          location
          {this.props.location}
        </div>

        <div className="tPhone">
          phone number of club
          {this.props.clubPhone}
        </div>

        <div className="tEmail">
          contact email
          {this.props.clubEmail}
        </div>

        <div className="tDate">
          date
          {this.props.startDate}
        </div>

        <div className="tInfo">
          info
          {this.props.additionalInfo}
        </div>

        <div className="tCreated">
          date created
          {this.props.dateCreated}
        </div>
      </div>
    );
  }
}
export default TournamentItem;
