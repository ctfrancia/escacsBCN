import React, { Component } from 'react';
import axios from 'axios';
// const instance = axios.create({

// });


class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
}

handleChange = e => {
  // console.log(e.target.value)
  let value = e.target.value;
  let name = e.target.name;
    this.setState({ [name]: value });

}

handleSubmit = e => {
  e.preventDefault();

  const email = this.state.email;
  const password = this.state.password;
  // console.log(this.state.email);
  // console.log(this.state.password);
  axios
    .get(`http://localhost:3001/UserSign-in`,
    {
      params: {
        email,
        password,
      },
    })
    .then(res => {
      console.log('response ',res);

    });
}

  render() {
    return (
      <div className="login-container">
        <h2>Log Into your account here!</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          Email:    <input name="email" onChange={this.handleChange} className="f-input" type="text" email="email"/>
          Password: <input name="password" onChange={this.handleChange} className="f-input" type="password" password="password"/>
          <input className="f-input pointer" type="submit" value="Enviar"/>
        </form>
      </div>
    );
  }
}
export default LoginForm;