import React, { Component } from 'react';
import axios from 'axios';
import {noVisibility} from '../../actions/actions';
import { connect } from 'react-redux';
import FormToRender from './formToRender';

class CreateTournamentForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nameOfTournament: '',
  //     clubCreated: false,
  //     location: '',
  //     clubPhone: '',
  //     clubPhone2: '',
  //     clubEmail: '',
  //     clubEmail2: '',
  //     startDate: '',
  //     additionalInfo: '',
  //   };
  // }
  // hideForm = () => {
  //   this.props.turnOffVisibility();
  // }

  // handleSubmit = e => {
  //   const value = this.state;
  //   const eChecker = this.state.clubEmail === this.state.clubEmail2 ? true : false;
  //   const nChecker = this.state.clubNumber === this.state.clubNumber2 ? true : false;
  //   // const

  //   if (!eChecker) {
  //     alert('please make sure that your emails are the same');
  //   } else if (!nChecker) {
  //     alert('please make sure that the phone numbers are the same');
  //   } else {
  //     e.preventDefault();
  //     axios
  //       .post('http://localhost:3001/CreateTournament', {
  //         nameOfTournament: value.nameOfTournament,
  //         clubCreated: value.clubCreated,
  //         location: value.location,
  //         clubPhone: value.clubPhone,
  //         clubEmail: value.clubEmail,
  //         startDate: value.startDate,
  //         additionalInfo: value.additionalInfo
  //       })
  //       .then(res => {
  //         console.log(res);
  //         console.log('Tournament Created Succesfully');
  //       })
  //       .catch(err => {
  //         // properly receives
  //         console.log('this is the error', err);
  //         alert('Was not');
  //       });
  //   }
  // };

  // handleChange = e => {
  //   console.log(e.target.value);

  //   let value = e.target.value;
  //   let name = e.target.name;

  //   this.setState({ [name]: value });
  // };


  // handleDateChange = date => this.setState({ startDate: date });


  render() {
    const isVisible = this.props.isVisible;
        if(isVisible === true ) {
          return(
            <div>
              <FormToRender />
            </div>
          )
        } else {
          return (
            <div />
          )
        }
  }
}

const mapStateToProps = state => ({
    isVisible: state.loading.visible
  });

const mapDispatchToProps = dispatch => ({
  // turnOnVisibility: () => dispatch(yesVisibility()),
  turnOffVisibility: () => dispatch(noVisibility()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTournamentForm);
