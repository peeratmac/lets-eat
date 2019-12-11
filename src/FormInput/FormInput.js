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

  render() {
    return (
      <div>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
        />
        <input
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (MM/DD)'
        />
        <input
          type='text'
          name='name'
          value={this.state.time}
          placeholder='Time (X:XX am/pm)'
        />
        <input
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
