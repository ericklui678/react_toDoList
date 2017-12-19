import React, { Component } from 'react';
import TextField from './textfield';
import ToDoList from './to_do';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  printStuff(stuff) {
    console.log('stuff', stuff);
  }

  render() {
    return (
      <div>
        <TextField onTextEnter={this.printStuff}/>
        <ToDoList/>
      </div>
    );
  }
}
