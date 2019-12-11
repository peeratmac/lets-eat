import React, { Component } from 'react';
import { getAllReservations } from '../apiCalls';
import FormInput from '../FormInput/FormInput';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      allReservationsData: [],
      error: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ allReservationsData: data }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <FormInput />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.allReservationsData} />
        </div>
      </div>
    );
  }
}

export default App;
