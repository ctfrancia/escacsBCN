import React, { Component } from 'react';

class LoginForm extends Component {


  render() {
    return (
      <div className="login-container">
        <h2>Log Into your account here!</h2>
        <form>
          Email:    <input className="f-input" type="text" />
          Password: <input className="f-input" type="text" />
          <input className="f-input" type="submit" value="Enviar"/>
        </form>
      </div>
    );
  }
}
export default LoginForm;