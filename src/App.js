
import React, { Component } from 'react';
import TitledInputElement from './TitledInputElement';
import ValidationErrorMessage from './ValidationErrorMessage';
import Submit from './Submit';
import ShowThanksModal from './ShowThanksModal';
// import {postUrl} from './post-url.js';
import './App.css';

const postUrl = 'https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test';

class App extends Component {
  constructor () {
    super ();
    //in state, true prevents submission, false reports no errors, message=error specifies the error
    this.state = {
      message : false,
      consent : false,    // no input to consent field shoudl not block submission;
      showThankyou : false
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

  findErrors = (ev)=> {
    ev.preventDefault();
    let newMessage =
      this.formFields
        .filter (field => this.state[field[1]])
        .map(el=>el[1]+this.state[el[1]])
    if (!newMessage.length && !this.zeroErrors())
      newMessage = 'Please fill in the required fields'
    this.setState ({message : newMessage});
  }

  asyncSetters = {
    onSuccess : result => this.setState ({showThankyou : true}),
    onPostRequestFail : err => {console.log (err); this.setState ({message : 'Something went wrong. Please try again in '+Math.floor(Math.random()*10)+ 'minutes'})}
  }

  clearThankyou = () => {
    this.setState ({showThankyou : false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Register yourself, yo..</h1>
        </header>
        <form className="form-flex form-styled"  action={postUrl} method="post" enctype="multipart/form-data">

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
            setters = {this.asyncSetters}
           />

         <ValidationErrorMessage
           message = {this.state.message}
         />

         <ShowThanksModal
           show = {this.showThankyou}
           OnClickAway = {this.clearThankyou}
         />
        </form>
      </div>
    );
  }
}

export default App;
