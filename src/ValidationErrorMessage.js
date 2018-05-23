import React, { Component } from 'react';

class ValidationErrorMessage extends Component {


  render() {
    return (
      <div className="status-error">
        {this.props.message}
      </div>
    );
  }
}

export default ValidationErrorMessage;
