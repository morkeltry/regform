import React, { Component } from 'react';
import './Submit.css';

class Submit extends Component {

submitHandler = ()=> {
  console.log ('getting clicks');
}

  render() {
    let clickable=this.props.clickable()
    return (
      <div
        className= {clickable ? "submit-button clickable" : "submit-button"}
        onClick = {clickable ? this.submitHandler : this.props.nag}
      >
        {this.props.title}
      </div>
    );
  }
}

export default Submit;
