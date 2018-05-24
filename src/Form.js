
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
    this.updateValidationErrorState = (newState) => {
      this.setState (newState)
    };
  };

  formFields = [
    ['Email: ',             'email',    'email',  'me@me.me', true],
    ['Phone: ',             'phone',    'text',   'We may call about your appointment', true],
    ['Choose a username  ', 'username', 'text',   'Please enter your desired username', true],
    ['Enter a password ',   'password', 'password', null, true],
    ['Tick the box if we may contact you with great stuff', 'consent', 'checkbox', null]
  ];

  zeroErrors = ()=>
    this.formFields.every (field =>
      this.state[field[1]] === false
    )

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

  render() {
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
            update = {this.updateValidationErrorState}
            errorState = {this.state[fieldContents[1]]}
        />})}

        <Submit
          title = 'OK, register me!'
          action = {postUrl}
          clickable = {this.zeroErrors}
          nag = {this.findErrors}
          setters = {this.props.asyncSetters}
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
