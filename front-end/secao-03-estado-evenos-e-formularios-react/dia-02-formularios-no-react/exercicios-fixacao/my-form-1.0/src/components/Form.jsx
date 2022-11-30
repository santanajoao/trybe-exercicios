import React from 'react';
import UserInfosInputs from './UserInfosInputs';
import FeedBackAndContactInputs from './FeedbackAndContactInputs';
import './Form.css';

export default class Form extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
  }

  state = {
    email: '',
    password: '',
    plan: 'free',
    feedback: '',
    mailMe: false,
    errors: true,
  }

  handleInput = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), this.handleError)
  };

  handleError = () => {
    const { email, password, plan, feedback } = this.state;
    const errors = [
      !email,
      !password,
      !plan,
      !feedback,
      !email.includes('@'),
      !email.length > 15,
    ];
    const state = errors.some((error) => error === true);
    this.setState(() => ({
      errors: state,
    }));
  };

  renderError = () => {
    if (this.state.errors) {
      return <span>Campos inválidos! Preencha corretamente!</span>
    }
  };

  render() {
    return (
      <form className="Form">
        <UserInfosInputs {...this.state}  handleInput={ this.handleInput } />
        <FeedBackAndContactInputs { ...this.state }
          handleInput={ this.handleInput }
        />
        { this.renderError() }
      </form>
    );
  }
}
