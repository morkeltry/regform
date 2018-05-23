import React, { Component } from 'react';
import './Submit.css';

class Submit extends Component {

submitHandler = ()=> {

}

  render() {
    let clickable=this.props.clickable()
    return (
      <div
        className= {clickable ? "submit-button clickable" : "submit-button"}
          onSubmit= {clickable ? this.submitHandler : ()=>{}}
      >
        {this.props.title}
      </div>
    );
  }
}

export default Submit;
