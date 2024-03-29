import React from "react";

const Edit = props => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">Edit Todo Item</div>
        <div className="panel-body">
          <textarea 
            className="update-todo-text"
            value={props.value} 
            onChange={props.onTextChange}>
          </textarea>
        </div>
        <div className="form-group edit-form">
          <label className="label-move">&nbsp;Priority:&nbsp;</label>
          <select className="update-todo-priority" list="priority" onChange={props.changePriority}>
            <option value="Choose A Priority"></option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
          <div className="form-group">
            <label className="label-move">Select a date and time you want to complete your task:</label>
            <input 
              type="datetime-local"
              onChange={this.handleDateChange}
            />
          </div>
        <button className="edit-btn btn blueish mini update-todo" onClick={() => props.onSave(event)}>Save</button>
        </div>
        <button className="exit-btn btn blueish mini exit-todo" onClick={() => props.onExit()}>Exit</button>
        <ul className = "list-group">

          {props.todosArray.map(todo => {
            return <li className={
              todo.completed ? "alert alert-success" : 
              (todo.priority === 1 ? "alert alert-info success" : 
              todo.priority === 2 ? "alert alert-warning success" : 
              "alert alert-danger success")} key ={todo.id}>
              
              <input 
                className="form-check-input"
                type="checkbox" 
                onChange= {() => props.onDone(todo)}/>{todo.text}
              <a onClick={() => props.onDelete(todo)}
                className="delete-todo glyphicon glyphicon-trash pull-right" href="#"></a>
                <a onClick={() => props.onEdit(todo)} className="edit-todo glyphicon glyphicon-edit pull-right" href="#"></a>
            </li>
          })}
        </ul>

      </div>
    </div>
  )  
}

export default Edit;