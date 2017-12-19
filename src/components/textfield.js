import React, { Component } from 'react';

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'text': '',
    }
    // this bind allows handleKeyPress to retrieve state
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onTextEnter(this.state.text);
    }
  }

  onInputChange(text) {
    this.setState({text});
  }

  render() {
    return (
      <div className='input-group input-group-lg'>
        <input
          value={this.state.text}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.handleKeyPress}
          type='text'
          className='form-control'
          placeholder='What needs to be done?'/>
      </div>
    );
  }
}
