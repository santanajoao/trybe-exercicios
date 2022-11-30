import React from 'react';

export default class FeedBackAndContactInputs extends React.Component {
  render() {
    const { mailMe, feedback, handleInput } = this.props;

    return (
      <fieldset>
        <legend>Contato e feedback</legend>
        <label htmlFor="feedback-input">Nos diga por que escolheu nossa empresa</label>
        <textarea
          value={ feedback }
          rows="10"
          onInput={ handleInput }
          name="feedback"
          id="feedback-input"
          cols="30"
        >
        </textarea>
        <label htmlFor="mail-me">Deseja receber nossas novidades e promoções?
        <input
          value={ mailMe }
          type="checkbox"
          onChange={ handleInput }
          name="mailMe"
          id="mail-me"
          />
        </label>
      </fieldset>
    );
  }
}