import React, { Component } from 'react';
import axios from 'axios';

class RegisterClubForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    clubName: '',
    location: '',
    organizerName: '',
    clubNumber: '',
    clubEmail: '',
    clubEmail2: '',
    password: '',
    password2: '',
    languages: [],
    extras: [],
    clubWebsite: '',
    additionalInfo: '',
  }

    this.clubLanguages = ['Catalán', 'Castellano', 'Inglés', 'Portugués', 'Gallego', 'Vasco', 'Francés', 'Ruso', 'Chino'];
    this.clubExtras = ['Bar', 'Clases', 'Wifi', 'Reuniones', 'Dominos', 'Internacional', 'Cerca del Metro', 'Jugadores Titelado', 'Amigable para Principiantes'];
}
handleSubmit = (e) => {
  e.preventDefault();
  // checks are working before sending to back end
  // const pChecker = (this.state.password === this.state.password2) ? true : false;
  // const eChecker = (this.state.clubEmail === this.state.clubEmail2) ? true : false;
  // console.log(pChecker);

  // if (!pChecker) alert('please make sure that your passwords match');
  // if (!eChecker) alert('please make sure that your emails are the same');
  const value = this.state;


  console.log(value);

  axios
    .post('http://localhost:3001/CreateNewUser', {
      clubName: value.clubName,
      location: value.location,
      organizerName: value.organizerName,
      clubNumber: value.clubNumber,
      clubEmail: value.clubEmail,
      password: value.password,
      languages: [],
      extras: [],
      clubWebsite: value.clubWebsite,
      additionalInfo: value.additionalInfo,
    })
    .then((res) => {
      console.log(res)
      alert('Account Created Successfully');
    })
    .catch(err => {
      // properly receives
      console.log('this is the error', err)
      alert('Email exists');
    });
}

handleChange = (e) => {
  console.log(e.target.name);
  let value = e.target.value;

  switch (e.target.name) {
    case 'clubName':
      console.log('switch case value first name ', value);

      this.setState({ clubName: value });
      break;

    case 'location':
      console.log('switch case value last name ', value);

      this.setState({ location: value });
      break;
    case 'password':
      console.log('switch case value first name ', value);

      this.setState({ password: value });
      break;

    case 'password2':
      console.log('switch case value first name ', value);

      this.setState({ password2: value });
      break;

    case 'clubEmail':
      console.log('switch case value first name ', value);

      this.setState({ clubEmail: value });
      break;

      case 'clubEmail2':
      console.log('switch case value first name ', value);

      this.setState({ clubEmail2: value });
      break;

    case 'clubWebsite':
      console.log('switch case value first name ', value);

      this.setState({ clubWebsite: value });
      break;

    case 'club':
      console.log('switch case value first name ', value);

      this.setState({ club: value });
      break;

    default:
      break;
  }
}



render() {
  return (
    <div className="container">
      <form>
        Nombre:              <input name="clubName" type="text" onChange={this.handleChange} value={this.state.value} fname="clubName" />
        Apellido(s):         <input name="location" type
    ="text" onChange={this.handleChange} value={this.state.value} lname="location" />
        Contraseña:          <input name="password" type="password" onChange={this.handleChange} value={this.state.value} password="password" />
        Verificar Contraseña: <input name="password2" type="password" onChange={this.handleChange} value={this.state.value} password="password" />
        Email:               <input name="clubEmail" type="clubEmail" onChange={this.handleChange} value={this.state.value} clubEmail="clubEmail" />
        Verificar Email:      <input name="clubEmail2" type="clubEmail" onChange={this.handleChange} value={this.state.value} clubEmail="clubEmail" />
        Barrio(opcional):    <input name="clubWebsite" type="text" onChange={this.handleChange} value={this.state.value} clubWebsite="clubWebsite" />
        Club(opcional):      <input name="club" type="text" onChange={this.handleChange} value={this.state.value} club="club" />

        <input type="submit" value="Enviar" onClick={this.handleSubmit} />
      </form>
    </div>
  );
}
}
export default RegisterClubForm;