import React, { Component } from 'react';
import './ShowThanksModal.css';

class ShowThanksModal extends Component {

  render() {
    return (
      <div
      className = {this.props.show ? "Modal" : "noshow"}>
        Thanks!! <br/> We&apos;ll be in touch :)
    </div>
  )}
}

export default ShowThanksModal;
