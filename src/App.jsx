import React, { Component } from 'react';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: '',
      editText: '',
      editId: '',
      priority: '',
      editEnabled: false,
      todos: [],
      timestamp: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    this.handleCompletedTodo=this.handleCompletedTodo.bind(this);
    this.handleSave=this.handleSave.bind(this);
    this.handleEditChange=this.handleEditChange.bind(this);
    this.handleDateTimeChange=this.handleDateTimeChange.bind(this);
  }

  handleTextChange(e)  {   
    this.setState({text:e.target.value})
  }
    
  handlePriorityChange(e) {
    this.setState({priority: parseInt(e.target.value)})
  }

  handleSubmit(event) {
    const newTodo = {
      id: this.state.id + 1,
      text: this.state.text,
      editText: '',
      priority: this.state.priority,
      editEnabled: false,
      editId: '',
      completed: false,
      timestamp: ''
    };

    const sortedTodos = [...this.state.todos, newTodo].sort((a, b) => {
      return a.priority - b.priority;
    }).reverse();

    this.setState({
      id: newTodo.id,
      text: '',
      editText: '',
      priority: this.state.priority,
      editEnabled: false,
      editId: '',
      completed: false,
      todos: sortedTodos,
      timestamp: ''
    });

    event.preventDefault();
  }

  handleDateTimeChange(timestamp) {
    this.setState({ timestamp })
  }

  handleDelete(todo) {
    var newState = this.state.todos;
    for(var i = 0; i< newState.length; i++){
      if(newState[i].id == todo.id){
        newState.splice(i, 1);
      }
    }
    this.setState({id: todo.id, newState:todo})
  }

  handleEditChange(e) {
    this.setState({editText:e.target.value})
  }

  handleEdit(todo) {
    this.setState({ 
    text:'',
    editEnabled: true,
    editText:todo.text, 
    editId: todo.id,
    priority: todo.priority,
  });
  }

  handleSave(event){
    var edited = this.state.editId;
    var found = this.state.todos.find(todo=>todo.id === edited);
      if(found) found.text = this.state.editText;
      if(found) found.priority = this.state.priority;
      if(found) found.editEnabled = false;
    this.setState({ 
      isEdit: false, todos: [...this.state.todos]});
    event.preventDefault();
  }

  handleCompletedTodo(todo) {
    var completedTodoId = todo.id;
    var found = this.state.todos.find(todosArray=>todosArray.id === completedTodoId);
      if(found) found.completed = !found.completed;
      this.setState({todos: [...this.state.todos]});
  }

  render() {
    return(
      <div className="container">
        <h1 className="text-bold-black">To Do App</h1>
        <h5 className="text-bold-black">Track what you need to do!</h5>
        <hr className="table-light"/>
        <div className="row">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="col-md-4">
              <Add 
                value={this.state.text} 
                onChange={this.handleTextChange} 
                onSubmit={this.handleSubmit}
                changePriority={this.handlePriorityChange}
                onDateTimeChange={this.handleDateTimeChange}
              />
            </div>
          </form>
          <div className="col-md-8">
            {!this.state.isEdit &&
              <View
                todosArray={this.state.todos}
                onDone={this.handleCompletedTodo}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                id={this.state.id}
                onSave={this.handleSave}
                onEditChange={this.handleEditChange}
                timestamp={this.state.timestamp}
              />
            }
          </div>
          <div className="col-md-8">
            {this.state.editEnabled &&
              <Edit
                todosArray={this.state.todos}
                value={this.state.editText} 
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
                onSave={this.handleSave}
                onTextChange={this.handleEditChange} 
                changePriority={this.handlePriorityChange}
                onDone={this.handleCompletedTodo}
              /> 
            }
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;