import React, { Component } from 'react';
import CreateNewUser from './CreateNewUser';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import RegisterClubForm from '../RegisterClubComponents/RegisterClubForm';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});


class RegisterUserOrSignin extends Component {
  constructor(props){
    super(props);

    this.state= {
      value: 0
  }

}
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    // const { classes } = this.props;
    const { value } = this.state;
    return (
      <div >
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Registrarse" />
            <Tab label="Registrarse como Club" />
            <Tab label="Registrarse como Jugador" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer> <LoginForm />        </TabContainer>}
        {value === 1 && <TabContainer> <RegisterClubForm /> </TabContainer>}
        {value === 2 && <TabContainer> <CreateNewUser />    </TabContainer>}
      </div>
    );
  }
}
export default RegisterUserOrSignin;
