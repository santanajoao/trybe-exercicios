import React from 'react';

export default class UserInfosInputs extends React.Component {
  validateEmail = () => {
    const { email } = this.props;
    if (!email) return <span>O email precisa ser preenchido!</span>;
    if (email.length > 80) {
      return <span>O email deve ter no máximo 80 caracteres!</span>;
    }
  };

  validatePassword = () => {
    const { password } = this.props;
    const { length } = password;
    if (!password) return <span>O campo de senha deve ser preenchido!</span>;
    if (length < 8) {
      return <span>A senha deve ter no mínimo 8 caracteres!</span>;
    }
    if (length > 127) return <span>Compimento máximo ultrapassado!</span>;
  };

  render() {
    const { email, password, plan, handleInput } = this.props;
    return (
      <fieldset>
        <legend>Informações de usuário</legend>
        <label htmlFor="email-input">Email</label>
        <input
          value={ email }
          type="email"
          onInput={ handleInput }
          name="email"
          id="email-input"
        />
        { this.validateEmail() }

        <label htmlFor="password-input">Senha</label>
        <input
          value={ password }
          type="password"
          onInput={ handleInput }
          name="password"
          id="password-input"
        />
        { this.validatePassword() }

        <label htmlFor="plan-input">Escolha seu plano de assinatura</label>
        <select
          value={ plan }
          onInput={ handleInput }
          name="plan"
          id="plan-input"
        >
          <option value="free">Grátis</option>
          <option value="base">Básico</option>
          <option value="complete">Completo</option>
          <option value="vip">VIP</option>
        </select>
        <label htmlFor="file">Escolha uma foto para adicionar ao seu perfil</label>
        <input type="file" id="file"/>
      </fieldset>
    );
  }
}
