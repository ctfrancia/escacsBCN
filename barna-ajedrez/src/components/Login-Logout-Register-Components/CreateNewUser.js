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
    console.log(res)
    alert('Account Created Successfully');
  })
  .catch(err => {
    // properly receives
    console.log('this is the error',err)
    alert('Email exists');
  });
}

handleChange = (e) => {
  console.log(e.target.name);
  let value = e.target.value;
  let name = e.target.name;

  this.setState({ [name]: value });
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