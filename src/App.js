
import React, { Component } from 'react';
import TitledInputElement from './TitledInputElement';
import ValidationErrorMessage from './ValidationErrorMessage';
import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      message : false
    }
    this.updateValidationErrorState = (newState) => {
      this.setState (newState)
    };
  };

  formFields = [
    ['Email: ', 'email', 'email', 'me@me.me', true],
    ['Phone: ', 'phone', 'text', 'We may need to contact you about your appointment'],
    ['Choose a username  ', 'username', 'text', 'Please enter your desired username'],
    ['Enter a password ', 'password', 'password', null],
    ['Please tick this box if we may contact you with great stuff', 'consent', 'checkbox', null]
  ];


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Register yourself, yo..</h1>
        </header>
        <form className="form-flex form-styled">

          <p className="hello"> Please fill in our beautifully styled form </p>

          {this.formFields.map (fieldContents =>
          <TitledInputElement
            title = {fieldContents[0]}
            name = {fieldContents[1]}
            type = {fieldContents[2]}
            placeholder = {fieldContents[3]}
            required = {!!fieldContents[4]}
            update = {this.updateValidationErrorState}
            errorState = {this.state[fieldContents[1]]}
          />)}

          <ValidationErrorMessage
            message = {this.state.message}
          />
        </form>
      </div>
    );
  }
}

export default App;
