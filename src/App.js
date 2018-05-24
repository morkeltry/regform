
import React, { Component } from 'react';
import Form from './Form';
import ShowThanksModal from './ShowThanksModal';
import './App.css';

const postUrl = 'https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      showThankyou : false
    }
  };

  asyncSetters = {
    onSuccess : result => {console.log(result); this.setState ({showThankyou : true})},
    onPostRequestFail : err => {console.log (err); this.setState ({message : 'Something went wrong. Please try again in '+Math.floor(Math.random()*10)+ 'minutes'})}
  }

  clearThankyou = () => {
    this.setState ({showThankyou : false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header header-blur">
          <h1 className="App-title">Register with us</h1>
        </header>

        <Form
          action = {postUrl}
          asyncSetters = {this.asyncSetters}
        />

         <ShowThanksModal
           show = {this.state.showThankyou}
           OnClickAway = {this.clearThankyou}
         />

      </div>
    );
  }
}

export default App;
