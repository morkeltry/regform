import React, { Component } from 'react';
import './Submit.css';

const headers = {
    'Content-Type': 'multipart/form-data',
    'Accept': 'text/html'
}

class Submit extends Component {

  //functionality incomplete - commenting out preventDefault() allows form submission by default behaviour
  submitHandler = (ev, url, setters)=> {
    // ev.preventDefault();
    // fetch (url, {headers: headers})
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
        onClick = {
          clickable ?
            (ev) => {this.submitHandler (ev, this.props.url, this.props.setters)} :
            this.props.nag
        }>
      </input>
  )}
}

export default Submit;
