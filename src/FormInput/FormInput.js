import React, { Component } from 'react';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { name, date, time, number } = this.state;
    this.props.makeReservation(name, date, time, number);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
        />
        <input
          onChange={this.handleChange}
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (MM/DD)'
        />
        <input
          onChange={this.handleChange}
          type='text'
          name='time'
          value={this.state.time}
          placeholder='Time (X:XX am/pm)'
        />
        <input
          onChange={this.handleChange}
          type='text'
          name='number'
          value={this.state.number}
          placeholder='Number of Guests'
        />
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </div>
    );
  }
}

export default FormInput;
