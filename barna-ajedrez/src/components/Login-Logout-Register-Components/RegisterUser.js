import React, { Component } from 'react';
import CreateNewUser from './CreateNewUser';
import LoginForm from './LoginForm';
import RegisterClubForm from '../RegisterClubComponents/RegisterClubForm';



class RegisterUserOrSignin extends Component {




  render() {
    return (
      <div >
        <LoginForm />
        <RegisterClubForm />
        <CreateNewUser />
      </div>
    );
  }
}
export default RegisterUserOrSignin;
