import React from "react";

const View = props => {
    const handleFilterChange = (event) => {
        props.onFilterChange(event.target.value)
    }

    return (
        <div className="panel panel-default">
            <div className="panel-heading">View Tasks</div>
            {props.id === 0 ? (<div className="alert-success panel-body">
            <strong>Welcome!</strong>
            <div>Add a new tasker on the left!</div></div>) : (<div className="panel-body"></div>)}
            <div>
                <label htmlFor="filter-select">Filter By:</label>
                <select id="filter-select" onChange={handleFilterChange}>
                    <option value='All'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value="priority">Priority</option>
                    <option value='timestamp'>Date</option>
                </select>
            </div>
            <ul className= "list-group">
            {props.todosArray.map(todo => {
            return <li className={
                todo.completed ? "alert alert-success" : 
                (todo.priority === 1 ? "alert alert-info success" : 
                todo.priority === 2 ? "alert alert-warning" : "alert alert-danger")}
                role="alert" key={todo.id}>

                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    onChange={() => props.onDone(todo)} /> {' '} {todo.text} {" "} {todo.timestamp}
                <a className="delete-todo glyphicon glyphicon-trash pull-right" onClick={() => props.onDelete(todo)}
                href="#"></a>
                <a className="edit-todo glyphicon glyphicon-edit pull-right" onClick={() => props.onEdit(todo)} href="#"></a>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default View;