
import React, { Component } from 'react';
import TitledInputElement from './TitledInputElement';
import ValidationErrorMessage from './ValidationErrorMessage';
import Submit from './Submit';
import ShowThanksModal from './ShowThanksModal';
import './Form.css';

const postUrl = 'https://g5xirepb1j.execute-api.eu-west-2.amazonaws.com/dev/post-test';

class Form extends Component {
  constructor () {
    super ();
    //in state, true prevents submission, false reports no errors, message=error specifies the error
    this.state = {
      message : false,
      consent : false,    // no input to consent field shoudl not block submission;
    }
  };

  formFields = [
    ['Email: ',             'email',    'email',  'me@me.me', true],
    ['Phone: ',             'phone',    'text',   'We may call about your appointment', true],
    ['Choose a username  ', 'username', 'text',   'Please enter your desired username', true],
    ['Enter a password ',   'password', 'password', null, true],
    ['Tick the box if we may contact you with great stuff', 'consent', 'checkbox', null]
  ];

  hashOf = password => password;

  updateValidationErrorState = (newState) => {
    this.setState (newState)
  };

  //Yes, It's hacky :(
  //An alternative would be to place values and erros objects in the state, but then .setState() wouldn't work as prettily.
  // Better would be refactoring so that errors are stored in App state, and the ValidationErrorMessage is also rendered from App.
  //  Oh, if only there were enough time!
  updateFormValue= (field, value)=> {
    const newState = {};
    if (field==='password')
      value = this.hashOf (value);
    newState[field+'value'] = value;
    this.setState (newState);
  }

  //zeroErrors()==true if no validation errors, false otherwise
  zeroErrors = ()=>
    this.formFields.every (field =>
      this.state[field[1]] === false
    )

  //checks both for validation errors and for empty fields
  findErrors = (ev)=> {
    ev.preventDefault();
    let newMessage =
      this.formFields
        .filter (field => this.state[field[1]])
        .map(el=>el[1]+this.state[el[1]]);
    if (!newMessage.length && !this.zeroErrors())
      newMessage = 'Please fill in the required fields'
    this.setState ({message : newMessage});
  }

  bundleData = state => {
    const dataObj = {};
    this.formFields.forEach (field => {
      dataObj[field[1]] = state[field[1]+'value'];
    });
  return JSON.stringify(dataObj);
  }


  render() {
    //Quicky hacky way to have network message shown in error display, without refactoring it back up into App.js
    let settersOverride = this.props.asyncSetters;
    settersOverride.onPostRequestFail = err => {
      console.log (err); this.setState ({message : "Something went wrong. Maybe the server doesn't like JSON..."})}

    return (
      <div>
      <form className="form-flex form-styled"  action={postUrl} method="post" encType="multipart/form-data">
        <p className="form-header"> Please fill in our beautifully styled form </p>

        {this.formFields.map (fieldContents => {
          const [title, name, type, placeholder, required] = fieldContents;
          return <TitledInputElement
            title = {title}
            name = {name}
            key = {name}
            type = {type}
            placeholder = {placeholder}
            required = {!!required}
            updateErrors = {this.updateValidationErrorState}       // setters
            updateValues = {this.updateFormValue}
            errorState = {this.state[fieldContents[1]]}     //field name, store error as property named after it
        />})}

        <Submit
          title = 'OK, register me!'
          action = {postUrl}
          data = {this.bundleData(this.state)}
          clickable = {this.zeroErrors}
          nag = {this.findErrors}
          setters = {settersOverride}
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

export default Form;
