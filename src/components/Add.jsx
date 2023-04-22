import React from "react";

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.selectedDate = new Date();
    this.handleDateChange = this.handleDateChange.bind(this)
  }
  handleDateChange(event) {
    const newDate = new Date(event.target.value);
    this.selectedDate = newDate;
    this.props.onDateTimeChange(newDate);
  };
  render(){
    const { value, onChange, changePriority, onSubmit } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Add New Task</div>
        <div className="panel-body">
          <textarea
            className="create-todo-text"
            value={value}
            onChange={onChange}
          />
          <div className="form-group">
            <label className="label-move">How much of a priority is this?:</label>
            <select
              className="create-todo-priority form-control"
              style={{ width: "100%" }}
              id="priority"
              onChange={changePriority}
            >
              <option disabled selected>Select a Priority</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label-move">Select a date and time you want to complete your task:</label>
            <input 
              type="datetime-local"
              onChange={this.handleDateChange}
            />
          </div>
        </div>
        <div className="panel-footer" style={{ width: "100%" }}>
          <button
            className="btn-gradient green block create-todo move-btn"
            onClick={() => onSubmit(this.selectedDate)}
          >
            &nbsp;Add
          </button>
        </div>
      </div>
    );
  }
};

export default Add;
