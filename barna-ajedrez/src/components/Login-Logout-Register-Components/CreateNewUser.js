import React, { Component } from 'react';
import axios from 'axios';

class CreateNewUser extends Component {
  constructor(props) {
    super (props);
  this.state = {
    fName: '',
    lName: '',
    password: '',
    password2: '',
    email: '',
    email2: '',
    neighborhood: '',
    club: '',
  }
}
handleSubmit = (e) => {
  e.preventDefault();
  // checks are working before sending to back end
  const pChecker = (this.state.password === this.state.password2) ? true : false;
  const eChecker = (this.state.email === this.state.email2) ? true : false;
  console.log(pChecker);

  if (!pChecker) alert('please make sure that your passwords match');
  if (!eChecker) alert('please make sure that your emails are the same');
  const value = this.state;


  axios
  .post('http://localhost:3001/CreateNewUser',{
    fName: value.fName,
    lName: value.lName,
    password: value.password,
    email: value.email,
    neighborhood: value.neighborhood,
    club: value.club
  })
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.log(err));
}

handleChange = (e) => {
  console.log(e.target.name);
  let value = e.target.value;

  switch (e.target.name) {
    case 'fName':
    console.log('switch case value first name ',value);

      this.setState({fName: value});
      break;

    case 'lName':
    console.log('switch case value last name ',value);

      this.setState({lName: value});
      break;
    case 'password':
    console.log('switch case value first name ',value);

      this.setState({password: value});
      break;

    case 'password2':
    console.log('switch case value first name ',value);

      this.setState({password2: value});
      break;

    case 'email':
    console.log('switch case value first name ',value);

      this.setState({email: value});
      break;

    case 'email2':
    console.log('switch case value first name ',value);

      this.setState({email2: value});
      break;

    case 'neighborhood':
    console.log('switch case value first name ',value);

      this.setState({ neighborhood: value});
      break;

    case 'club':
    console.log('switch case value first name ',value);

      this.setState({ club: value});
      break;

    default:
      break;
  }
}



  render() {
    return (
      <div className="container">
        <form>
          Nombre:              <input name="fName"        type="text" onChange={this.handleChange}     value={this.state.value} fname="fName"  />
          Apellido(s):         <input name="lName"        type="text" onChange={this.handleChange}     value={this.state.value} lname="lName" />
          Contraseña:          <input name="password"     type="password" onChange={this.handleChange} value={this.state.value} password="password" />
          Verificar Contraseña: <input name="password2"    type="password" onChange={this.handleChange} value={this.state.value} password="password" />
          Email:               <input name="email"        type="email" onChange={this.handleChange}    value={this.state.value} email="email" />
          Verificar Email:      <input name="email2"       type="email" onChange={this.handleChange}    value={this.state.value} email="email" />
          Barrio(opcional):    <input name="neighborhood" type="text" onChange={this.handleChange}     value={this.state.value} neighborhood="neighborhood" />
          Club(opcional):      <input name="club"         type="text" onChange={this.handleChange}     value={this.state.value} club="club" />

          <input type="submit" value="Enviar" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
export default CreateNewUser;