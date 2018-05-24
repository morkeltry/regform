import React, { Component } from 'react';
import './ShowThanksModal.css';

class ShowThanksModal extends Component {

  render() {
    return (
      <div
        className = {this.props.show ? "modal" : "noshow"}>
        <div className = "modal-content flex-centre-container">
          <div>
            <p>Thanks!!</p>
            <p> We&apos;ll be in touch :)</p>
          </div>
        </div>
      </div>
  )}
}

export default ShowThanksModal;
