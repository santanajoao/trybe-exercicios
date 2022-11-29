import React from 'react';

export default class App extends React.Component {
  leftBtnConsole = () => console.log('Nesse não!');

  middleBtnConsole = () => console.log('Clicou!');

  rightBtnConsole = () => console.log('Não é esse!');

  render() {
    return (
      <div className="App">
        <button onClick={ this.leftBtnConsole }>Clique aqui &gt;</button>
        <button onClick={ this.middleBtnConsole }>Clique aqui!</button>
        <button onClick={ this.rightBtnConsole }>&lt; Clique aqui</button>
      </div>
    )
  }
}
