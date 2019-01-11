import React, { Component } from 'react';
// import axios from 'axios';
// const  moment = require('moment');
import DatePicker from 'react-date-picker'



class CreateTournamentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfTournament: '',
      clubCreated: false,
      location: '',
      clubPhone: '',
      clubPhone2: '',
      clubEmail: '',
      clubEmail2: '',
      startDate: new Date(),
      additionalInfo: '',
    }
  }
  handleSubmit = (e) =>{
    const date = this.state.startDate;
    console.log(date);

    // const modDate = moment.date(date);
    // console.log(modDate);


    // const value = this.state;
    // const eChecker = (this.state.clubEmail === this.state.clubEmail2) ? true : false;
    // const nChecker = (this.state.clubNumber === this.state.clubNumber2) ? true : false;

    // if (!eChecker) alert('please make sure that your emails are the same');
    // if (!nChecker) alert('please make sure that the phone numbers are the same');
    e.preventDefault();
    // axios
    //   .post('http://localhost:3001/CreateTournament',{
    //   nameOfTournament: value.nameOfTournament,
    //   clubCreated: value.clubCreated,
    //   location: value.location,
    //   clubPhone: value.clubPhone,
    //   clubEmail: value.clubEmail,
    //   startDate: value.startDate,
    //   additionalInfo: value.additionalInfo,
    //   })
    //   .then(res => {
    //     console.log(res);
    //     alert('Account Created Successfully');
    //   })
    //   .catch(err => {
    //     // properly receives
    //     console.log('this is the error', err);
    //     alert('Email exists');
    //   });
  }

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({ [name]: value })
  };
  //FIXME: fix the FUCKING DATE PICKING COMPONENT
  handleDateChange = date => this.setState({ startDate: date })
//<input name="startDate" type="text"         onChange={this.handleChange} value={this.state.value} startdate="startDate" placeholder="DD-MM-YYYY @18h30" />
  render() {
    return (
      <div className="container">
        <form>
          {/* <input name="clubName" type="text" onChange={this.handleChange} value={this.state.value} clubname="clubName" /> */}
          Nombre del torneo:                       <input name="nameOfTournament" type="text"  onChange={this.handleChange} value={this.state.value} nameoftournament="nameOfTournamet" />
          Dirección                                <input name="location" type="text"          onChange={this.handleChange} value={this.state.value}  location="location" />
          Número de teléfono del club:             <input name="clubPhone" type="text"         onChange={this.handleChange} value={this.state.value} clubphone="clubPhone" />
          Verificar el número de teléfono del club: <input name="clubPhone2" type="text"         onChange={this.handleChange} value={this.state.value} clubphone="clubPhone" />
          Email del club:                          <input name="clubEmail" type="email"        onChange={this.handleChange} value={this.state.value} clubmmail="clubEmail"  />
          Verificar el email del club:              <input name="clubEmail2" type="email"        onChange={this.handleChange} value={this.state.value} clubmmail="clubEmail"  />
          Día y hora:                              <DatePicker onChange={this.handleDateChange} value={this.state.startDate} locale="es-ES" />
          Más información:                         <textarea rows="5" cols="50" name="additionalInfo" type="text" onChange={this.handleChange} value={this.state.value} additionalinfo="additionalInfo"  />

          <input type="submit" value="Enviar" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
export default CreateTournamentForm;