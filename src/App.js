
import React, { Component } from 'react';
import TitledInputElement from './TitledInputElement';
import ValidationErrorMessage from './ValidationErrorMessage';
import Submit from './Submit';
import './App.css';

class App extends Component {
  constructor () {
    super ();
    //in state, true prevents submission, false reports no errors, message=error specifies the error
    this.state = {
      message : false,
      consent : false     // no input to consent field shoudl not block submission;
    }
    this.updateValidationErrorState = (newState) => {
      this.setState (newState)
    };
  };

  formFields = [
    ['Email: ',             'email',    'email',  'me@me.me', true],
    ['Phone: ',             'phone',    'text',   'We may need to contact you about your appointment', true],
    ['Choose a username  ', 'username', 'text',   'Please enter your desired username', true],
    ['Enter a password ',   'password', 'password', null, true],
    ['Please tick this box if we may contact you with great stuff', 'consent', 'checkbox', null]
  ];

  count = 0;

  zeroErrors = ()=>
    this.formFields.every (field =>
      this.state[field[1]] === false
    )

  findErrors = ()=> {
    let newMessage =
      this.formFields
        .filter (field => this.state[field[1]])
        .map(el=>el[1]+this.state[el[1]])
    if (!newMessage.length && !this.zeroErrors())
      newMessage = 'Please fill in the required fields'
    this.setState ({message : newMessage});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Register yourself, yo..</h1>
        </header>
        <form className="form-flex form-styled">

          <p className="hello"> Please fill in our beautifully styled form </p>

          {this.formFields.map (fieldContents => {
          const [title, name, type, placeholder, required] = fieldContents;
          return <TitledInputElement
            title = {title}
            name = {name}
            key = {name}
            type = {type}
            placeholder = {placeholder}
            required = {!!required}
            update = {this.updateValidationErrorState}
            errorState = {this.state[fieldContents[1]]}
          />})}

          <Submit
            title = 'OK, register me!'
            clickable = {this.zeroErrors}
            nag = {this.findErrors}
           />

         <ValidationErrorMessage
           message = {this.state.message}
         />
        </form>
      </div>
    );
  }
}

export default App;
