import React, { Component } from 'react';
import './ValidationErrorMessage.css';

class ValidationErrorMessage extends Component {


  render() {
    return (
      <div
        className={this.props.message ? "status-error" : "status-error no-error-shown"}
      >
        {Array.isArray(this.props.message) ?
          this.props.message.map ( (msg,idx) =>
            <div key={idx}>{msg}</div>
          ) :
          <div>{this.props.message}</div>
        }
      </div>
  )}
}

export default ValidationErrorMessage;
