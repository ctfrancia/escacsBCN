import React, { Component } from 'react';
import axios from 'axios';


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
      startDate: '',
      additionalInfo: '',
    }
  }
  handleSubmit = (e) =>{
    // const date = this.state.startDate;
    // console.log(date);
    const value = this.state;
    const eChecker = (this.state.clubEmail === this.state.clubEmail2) ? true : false;
    const nChecker = (this.state.clubNumber === this.state.clubNumber2) ? true : false;

    if (!eChecker) {
      alert('please make sure that your emails are the same');
    } else if (!nChecker) {
      alert('please make sure that the phone numbers are the same');
    } else {
      e.preventDefault();
      axios
        .post('http://localhost:3001/CreateTournament',{
        nameOfTournament: value.nameOfTournament,
        clubCreated: value.clubCreated,
        location: value.location,
        clubPhone: value.clubPhone,
        clubEmail: value.clubEmail,
        startDate: value.startDate,
        additionalInfo: value.additionalInfo,
        })
        .then(res => {
          console.log(res);
          console.log('Tournament Created Succesfully');
        })
        .catch(err => {
          // properly receives
          console.log('this is the error', err);
          alert('Was not able to create tournament try again later');
        });
    }
  }

  handleChange = e => {
    console.log(e.target.value);

    let value = e.target.value;
    let name = e.target.name;

    this.setState({ [name]: value })
  };
  handleDateChange = date => this.setState({ startDate: date })
  render() {
    return (
      <div className="ctf-container">
        <form className="f-container">
        {/* <div>

        </div> */}
          <div className="basic-info-container">
            <div className="first-column">
              <div className="form-box">
                <p>Nombre del torneo:</p>                       <input className="f-input" name="nameOfTournament" type="text" onChange={this.handleChange} value={this.state.value} nameoftournament="nameOfTournamet" />
              </div>

              <div className="form-box">
                  <p>Email del club:</p>                          <input className="f-input" name="clubEmail" type="email" onChange={this.handleChange} value={this.state.value} clubmmail="clubEmail" />
              </div>
              <div className="form-box">
                  <p>Número de teléfono del club:</p>             <input className="f-input" name="clubPhone" type="text" onChange={this.handleChange} value={this.state.value} clubphone="clubPhone" />
                </div>
            </div>

            <div className="second-column">
              <div className="form-box">
                <p>Dirección:</p>                                <input className="f-input" name="location" type="text" onChange={this.handleChange} value={this.state.value} location="location" />
              </div>
              <div className="form-box">
                <p>Verificar el email del club:</p>             <input className="f-input" name="clubEmail2" type="email" onChange={this.handleChange} value={this.state.value} clubmmail="clubEmail" />
              </div>
              <div className="form-box">
                <p>Verificar el número de teléfono del club:</p><input className="f-input" name="clubPhone2" type="text" onChange={this.handleChange} value={this.state.value} clubphone="clubPhone" />
              </div>
            </div>
          </div>
            <div className="form-box">
              <p>Día y hora:</p>                              <input className="f-input" name="date" type="text" onChange={this.handleChange} value={this.state.startDate} locale="es-ES" />
            </div>

          {/* <div> */}
            <div className="form-box">
              <p>Más información:</p>                         <textarea className="" rows="20" cols="80" name="additionalInfo" type="text" onChange={this.handleChange} value={this.state.value} additionalinfo="additionalInfo" />
            </div>
            <input className="f-input form-box pointer hvr-grow"type="submit" value="Enviar" onClick={this.handleSubmit} />
          {/* </div> */}
        </form>
      </div>
    );
  }
}
export default CreateTournamentForm;