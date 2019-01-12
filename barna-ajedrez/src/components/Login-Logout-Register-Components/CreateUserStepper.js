











































// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import axios from 'axios';

// const styles = theme => ({
//   root: {
//     width: '90%',
//   },
//   backButton: {
//     marginRight: theme.spacing.unit,
//   },
//   instructions: {
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit,
//   },
// });

// const inputFields = [
// { id: 1, name: "fName", spanish: "Nombre", type: "text" }, { id: 2, name: "lName", spanish: "Apellido(s)", type: "text" },
// { id: 3, name: "password", spanish: "Contraseña", type: "password" }, { id: 4, name: "password", spanish: "Verificar Contraseña", type: "password" },
// { id: 5, name: "email", spanish: "Email", type: "email" }, { id: 6, name: "email2", spanish: "Verificar Email", type: "email" },
// { id: 7, name: "neighborhood", spanish: "Barrio", type: "text" }, { id: 8, name: "club", spanish: "Club", type: "text" },
// ];

// // submitForm = () => {
// //   axios
// //   .post('http:')

// // }
// function getSteps() {
//   return ['Information Personal', 'Account information', 'Additional Information'];
// }

// function handleChange(e) {
//   this.setState({[e.target.name]:e.target.value})
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return (
//         <div>
//             {inputFields.slice(0, 2).map(input =>
//               <TextField key={input.id} onChange={handleChange}  value={input.value} required="outlined-required" label={input.spanish} defaultValue="" margin="normal" variant="outlined" name={input.name}/>
//               )}
//         </div>
//       )

//     case 1:
//       return (
//         <div>
//           {inputFields.slice(2, 6).map(input =>
//             <TextField key={input.id} required="outlined-required" label={input.spanish} type="password" margin="normal" variant="outlined" name={input.name} />
//           )}
//         </div>
//       )
//     case 2:
//       return (
//         <div>
//           {inputFields.slice(6).map(input =>
//             <TextField key={input.id} required="outlined-required" label={input.spanish} defaultValue="" margin="normal" variant="outlined" name={input.name} />
//           )}
//         </div>
//       )
//     default:
//       return 'Unknown stepIndex';
//   }
// }

// class HorizontalLabelPositionBelowStepper extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeStep: 0,
//       fName: '',
//       lName: '',
//       password: '',
//       password2: '',
//       email: '',
//       email2: '',
//       neighborhood: '',
//       club: '',
//     };

//   }

//   handleNext = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep + 1,
//     }));
//   };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1,
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0,
//     });
//   };

//   handleSumbit = (e) => {
//     e.preventDefault();
//     const pChecker = (this.state.password === this.state.password2) ? true : false;
//     const eChecker = (this.state.email === this.state.email2) ? true : false;
//     console.log(pChecker);

//     if (!pChecker) alert('please make sure that your passwords match');
//     if (!eChecker) alert('please make sure that your emails are the same');
//     const value = this.state;

//     axios
//       .post('http://localhost:3001/CreateNewUser', {
//         fName: value.fName,
//         lName: value.lName,
//         password: value.password,
//         email: value.email,
//         neighborhood: value.neighborhood,
//         club: value.club
//       })
//       .then((res) => {
//         console.log(res)
//         alert('Account Created Successfully');
//       })
//       .catch(err => {
//         // properly receives
//         console.log('this is the error', err)
//         alert('Email exists');
//       });
//   }

//   render() {
//     const { classes } = this.props;
//     const steps = getSteps();
//     const { activeStep } = this.state;

//     return (
//       <div className={classes.root}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map(label => {
//             return (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         <div>
//           {this.state.activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>All steps completed</Typography>
//               <Button onClick={this.handleReset}>Reset</Button>
//             </div>
//           ) : (
//               <div>
//                 <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//                 <div>
//                   <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.backButton} >
//                     Back
//                   </Button>
//                 {activeStep === steps.length -1 ?
//                   <Button variant="contained" color="primary" onClick={this.handleSumbit}>Enviar</Button> :
//                   <Button variant="contained" color="primary" onClick={this.handleNext}>NEXT</Button>
//                 }
//                   {/* <Button variant="contained" color="primary" onClick={this.handleNext}>
//                     {activeStep === steps.length - 1 ?  'Enviar' : 'Next'}
//                   </Button> */}
//                 </div>
//               </div>
//             )}
//         </div>
//       </div>
//     );
//   }
// }

// HorizontalLabelPositionBelowStepper.propTypes = {
//   classes: PropTypes.object,
// };

// export default withStyles(styles)(HorizontalLabelPositionBelowStepper);