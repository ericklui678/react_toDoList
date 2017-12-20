import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskField from './components/taskfield';
import TaskList from './components/task_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Build a todo app', completed: false },
        { id: 2, text: 'Profit', completed: false },
      ],
      filter: 'uncompleted',
      newTodoText: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCompleteStatus = this.updateCompleteStatus.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // if empty string input, don't do anything
    if (!this.state.newTodoText) return;
    // create copy of items array, push new item, then setState
    let newItems = this.state.items.slice();
    newItems.push({
      id: newItems.length,
      text: this.state.newTodoText,
      completed: false,
    })
    this.setState({
      items: newItems,
      newTodoText: '',
    });
  }

  updateCompleteStatus(i) {
    let newItems = this.state.items.slice();

    newItems[i].completed = !newItems[i].completed;
    this.setState({items: newItems});
    // console.log(this.state.items[i]);
    // this.setState()
  }

  onChange(event) {
    this.setState({newTodoText: event.target.value});
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <TaskField
          taskText={this.state.newTodoText}
          taskChange={this.onChange}
          text={this.state.newTodoText}
          onSubmit={this.handleSubmit}/>
        <h1>{this.state.filter} tasks</h1>
        <p onClick={() => this.setState({filter: 'all'})}>All</p>
        <p onClick={() => this.setState({filter: 'completed'})}>Completed</p>
        <p onClick={() => this.setState({filter: 'uncompleted'})}>Uncompleted</p>
        <TaskList
          items={this.state.items}
          filter={this.state.filter}
          onClick={this.updateCompleteStatus}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
