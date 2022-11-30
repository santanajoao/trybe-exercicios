import React from 'react';
import './Form.css';

export default class Form extends React.Component {
  state = {
    email: '',
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      email: value,
    }))
  };

  render() {
    const { email } = this.state;
    return (
      <form className="Form">
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          value={ email }
          onInput={ this.handleInput }
        />
        <label htmlFor="password-input">Senha</label>
        <input type="password" name="" id="password-input" />

        <label htmlFor="plan-input">Escolha seu plano de assinatura</label>
        <select name="" id="plan-input">
          <option value="free">Grátis</option>
          <option value="base">Básico</option>
          <option value="ultra">Entusiasta</option>
          <option value="vip">VIP</option>
        </select>

        <label htmlFor="feedback-input">Nos diga por que escolheu nossa empresa</label>
        <textarea name="" id="feedback-input" cols="30" rows="10"></textarea>
      </form>
    );
  }
}
