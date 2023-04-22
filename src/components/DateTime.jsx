import React, { Component } from 'react';
import moment from 'moment';

class TaskDateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: ''
    };
  }
  

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  };

  handleTimeChange(event) {
    this.setState({ time: event.target.value });
  };

  handleSubmit(event){
    event.preventDefault();
    const timestamp = moment(`${this.state.date} ${this.state.time}`, 'YYYY-MM-DD HH:mm').toDate();
    this.props.onChange(timestamp);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Date:</label>
        <input type="date" value={this.state.date} onChange={this.handleDateChange} />
        <label>Time:</label>
        <input type="time" value={this.state.time} onChange={this.handleTimeChange} />
        <br />
        <button type="submit">Select Date and Time</button>
      </form>
    );
  }
}

export default TaskDateTimePicker;
