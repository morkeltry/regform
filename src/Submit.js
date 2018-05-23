import React, { Component } from 'react';
import './Submit.css';
// import {postUrl} from './post-url.js';

const postUrl = 'https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test';
const headers = {
    'Content-Type': 'multipart/form-data',
    'Accept': 'text/html'
}

class Submit extends Component {

  submitHandler = (ev, setters)=> {
    // ev.preventDefault();
    console.log('Doing submit ',ev.target);
    console.log('parent:',ev.target.parentElement);
    // fetch (postUrl, headers)
    //   .then (setters.onSuccess)
    //   .catch (setters.onPostRequestFail)
  }

  render() {
    let clickable=this.props.clickable()
    return (
      <input
        type = "submit"
        value = {this.props.title}
        className = {clickable ? "submit-button clickable" : "submit-button"}
        onClick = {clickable ? (ev) => {this.submitHandler(ev,this.props.setters)} : this.props.nag}
      >
      </input>
    );
  }
}

export default Submit;
