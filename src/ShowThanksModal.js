import React, { Component } from 'react';
import './ShowThanksModal.css';

class ShowThanksModal extends Component {

  render() {
    return <div
    className = {this.props.show ? "Modal" : "noshow"}>
      Mwahahahah
    </div>
  }
}

export default ShowThanksModal;
