import React, { Component } from 'react';
import './DesktopCSS.css';
import NavBar from './navcomponent';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Desktop extends Component {
  render() {
    return (
      <div className="container">
        {/* <MuiThemeProvider> */}
          <NavBar />
        {/* </MuiThemeProvider> */}
      </div>
    );
  }
}
