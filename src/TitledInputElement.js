import React, { Component } from 'react';
import './TitledInputElement.css';
import validators from './validators';

class TitledInputElement extends Component {

  validate(event) {
    let node = event.target;
    let objection = validators[node.id];

    return 
  }

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
            onChange={this.validate}
          />
      </div>
    );
  }
}

export default TitledInputElement;
