import React, { Component } from 'react';
const homeIcon = require('../../images/chess.svg')
class Home extends Component {


  render() {
    return (
      <div className="home-container">
        <img src={homeIcon} alt="Home" />
        text will go here
      </div>
    );
  }
}
export default Home;