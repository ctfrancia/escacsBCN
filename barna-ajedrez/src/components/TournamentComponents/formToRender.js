import React, { Component } from 'react';
import { noVisibility } from '../../actions/actions';
import { connect } from 'react-redux';

class FormToRender extends Component {
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
    };
  }
  hideForm = () => {
    this.props.turnOffVisibility();
  }

render(){
  return(

  <div className="ctf-container">
    <form className="f-container">
      <button onClick={this.hideForm} className="close-form">X</button>
      <div className="basic-info-container">
        <div className="first-column">
          <div className="form-box">
            <p>Nombre del torneo:</p>{' '}
            <input
              required
              className="f-input"
              name="nameOfTournament"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              nameoftournament="nameOfTournamet"
              placeholder="necesario"
            />
          </div>

          <div className="form-box">
            <p>Email del club:</p>{' '}
            <input
              required
              className="f-input"
              name="clubEmail"
              type="email"
              onChange={this.handleChange}
              value={this.state.value}
              clubmmail="clubEmail"
              placeholder="necesario"
            />
          </div>
          <div className="form-box">
            <p>Número de teléfono del club:</p>{' '}
            <input
              required
              className="f-input"
              name="clubPhone"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              clubphone="clubPhone"
              placeholder="necesario"
            />
          </div>
        </div>

        <div className="second-column">
          <div className="form-box">
            <p>Dirección:</p>{' '}
            <input
              required
              className="f-input"
              name="location"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              location="location"
              placeholder="necesario"
            />
          </div>
          <div className="form-box">
            <p>Verificar el email del club:</p>{' '}
            <input
              required
              className="f-input"
              name="clubEmail2"
              type="email"
              onChange={this.handleChange}
              value={this.state.value}
              clubmmail="clubEmail"
              placeholder="necesario"
            />
          </div>
          <div className="form-box">
            <p>Verificar el número de teléfono del club:</p>
            <input
              required
              className="f-input"
              name="clubPhone2"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              clubphone="clubPhone"
              placeholder="necesario"
            />
          </div>
        </div>
      </div>
      <div className="form-box">
        <p>Día y hora:</p>{' '}
        <input
          required
          className="f-input"
          name="startDate"
          type="text"
          onChange={this.handleChange}
          value={this.state.startDate}
          // locale="es-ES"
          placeholder="necesario: formato DD-MM-AAAA @24h00"
        />
      </div>

      {/* <div> */}
      <div className="form-box">
        <p>Más información:</p>{' '}
        <textarea
          className=""
          rows="20"
          cols="80"
          name="additionalInfo"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          additionalinfo="additionalInfo"
          placeholder="Opcional, ingrese cualquier información adicional sobre el club, la ubicación, cómo llegar allí."
        />
      </div>
      <input
        // disabled={!isEnabled}
        className="f-input form-box pointer hvr-grow"
        type="submit"
        value="Enviar"
        onClick={this.handleSubmit}
      />
      {/* </div> */}
    </form>
  </div>
  )

}
}
const mapStateToProps = state => ({
  isVisible: state.loading.visible
});

const mapDispatchToProps = dispatch => ({
  turnOffVisibility: () => dispatch(noVisibility()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormToRender);
