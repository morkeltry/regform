import React, { Component } from 'react';
import './TitledInputElement.css';

class TitledInputElement extends Component {
  render() {
    return (
      <div className="flex-container">
        <label htmlFor={this.props.name} className="flex-child-left"> {this.props.title} </label>
          <input className="flex-child-right"
            id={this.props.name}
            required={this.props.required}
            type={this.props.type || 'text'}
            name={this.props.name}
            placeholder={this.props.placeholder || ''}
          />
      </div>
    );
  }
}

export default TitledInputElement;
