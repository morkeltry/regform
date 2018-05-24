import React, { Component } from 'react';
import './TitledInputElement.css';
import validators from './validators';

class TitledInputElement extends Component {

  validate(event, update, ZE) {
    const status = {};
    const node = event.target;
    const objection = validators[node.id](node.value);
    status.message =
      objection ?
        node.id+objection :
        false
    status[node.id] = objection;
    update (status);

    return
  }

  render() {
    return (
      <div className="flex-container">
        <label htmlFor={this.props.name} className="flex-child-left fieldname-text"> {this.props.title} </label>
          <input className="flex-child-right"
            id={this.props.name}
            // required={this.props.required}       // Chrome bug means that noValidate does not override required
            type={this.props.type || 'text'}
            name={this.props.name}
            placeholder={this.props.placeholder || ''}
            noValidate
            onChange={
              this.props.update ?
              event => this.validate (event, this.props.update, this.props.ZE) :
              ()=>{}                                //if no setter to set errors, then don;t validate
            }
          />
      </div>
  )}
}

export default TitledInputElement;
