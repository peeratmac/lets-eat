import React, { Component } from 'react';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
        <button>Make Reservation</button>
      </div>
    );
  }
}

export default FormInput;
