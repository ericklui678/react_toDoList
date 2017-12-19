import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskField from './components/taskfield';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Learn React', completed: true },
        { id: 2, text: 'Build a todo app', completed: false },
        { id: 3, text: 'Profit', completed: false },
      ],
      filter: 'all',
      newTodoText: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // create copy of items array, push new item, then setState
    let newItems = this.state.items.slice();
    newItems.push({
      id: newItems.length + 1,
      text: this.state.newTodoText,
      completed: false,
    })
    this.setState({
      items: newItems,
      newTodoText: '',
    });

  }

  onChange(event) {
    this.setState({newTodoText: event.target.value});
  }

  render() {
    console.log(this.state);
    return (
      <TaskField
        taskText={this.state.newTodoText}
        taskChange={this.onChange}
        text={this.state.newTodoText}
        onSubmit={this.handleSubmit}/>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
