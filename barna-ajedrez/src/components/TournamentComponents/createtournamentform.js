import React, { Component } from 'react';
import { Link } from "@reach/router";

class CreateTournamentForm extends Component {


  render() {
    console.log('here')
    return (
      <div className="container">
      {/* Maybe better to map over this in the store */}
        {/* <Link to="CreateNewTournament"> */}
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
          stuff that I need in the FORM:
          club Name
          club direction
          special directions for how to get to club
          club email and verification
          club phone and verification
          summary of tournament
          field to upload document
      </div>
    );
  }
}
export default CreateTournamentForm;