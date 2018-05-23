import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form>
          <input
            required
            type="email"
            name="email"
            placeholder="me@me.me" />
          <input type="text"
            name="phone"
            placeholder="We may need to contact you about your appointment" />
          <input
            required
            type="text"
            name="username"
            placeholder="Please enter your desired username" />
          <input
            required
            type="password" />
          <input type="checkbox"
            name="consent"/>
        </form>
      </div>
    );
  }
}

export default App;
