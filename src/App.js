
import React, { Component } from 'react';
import TitledInputElement from './TitledInputElement';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Register yourself, yo..</h1>
        </header>
        <form className="form-flex form-styled">
          <p className="hello"> Please fill in our beautifully styled form </p>
          <TitledInputElement
            title="Email: "
            required
            type="email"
            name="email"
            placeholder="me@me.me"
          />
          <TitledInputElement
            title="Phone: "
            type="text"
            name="phone"
            placeholder="We may need to contact you about your appointment" />
          <TitledInputElement
            title="Choose a username "
            required
            type="text"
            name="username"
            placeholder="Please enter your desired username" />
          <TitledInputElement
            title="Enter a password "
            required
            type="password"
            name="password" />
          <TitledInputElement
            title="Please tick this box if we may contact you with great stuff"
            type="checkbox"
            name="consent"/>
        </form>
      </div>
    );
  }
}

export default App;
