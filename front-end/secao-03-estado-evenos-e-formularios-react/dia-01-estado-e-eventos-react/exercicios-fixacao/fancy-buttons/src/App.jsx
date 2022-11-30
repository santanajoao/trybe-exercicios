import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    firstBtnClicksCounter: 0,
    secondBtnClicksCounter: 0,
    thirdBtnClicksCounter: 0,
  };

  getClassName = (clicksCounter) => {
    return (clicksCounter % 2 === 0) ? 'green' : 'yellow';
  };

  increaseFirstBtnCounter = () => {
    const { firstBtnClicksCounter } = this.state;
    const newValue = firstBtnClicksCounter + 1;
    this.setState(
      () => ({ firstBtnClicksCounter: newValue }),
      () => {
        const color = this.getClassName(newValue);
        console.log(`A cor do botão agora é ${color}`);
      },
    );
  };

  increaseSecondBtnCounter = () => {
    const { secondBtnClicksCounter } = this.state;
    const newValue = secondBtnClicksCounter + 1;
    this.setState(
      () => ({ secondBtnClicksCounter: newValue }),
      () => {
        const color = this.getClassName(newValue);
        console.log(`A cor do botão agora é ${color}`);
      },
    );
  };

  increaseThirdBtnCounter = () => {
    const { thirdBtnClicksCounter } = this.state;
    const newValue = thirdBtnClicksCounter + 1;
    this.setState(
      () => ({ thirdBtnClicksCounter: newValue }),
      () => {
        const color = this.getClassName(newValue);
        console.log(`A cor do botão agora é ${color}`);
      },
    );
  };  

  render() {
    const {
      firstBtnClicksCounter,
      secondBtnClicksCounter,
      thirdBtnClicksCounter
    } = this.state;

    return (
      <div className="App">
        <button
          onClick={ this.increaseFirstBtnCounter }
          className={ this.getClassName(firstBtnClicksCounter) }
        >
          { firstBtnClicksCounter }
        </button>

        <button
          onClick={ this.increaseSecondBtnCounter }
          className={ this.getClassName(secondBtnClicksCounter) }
        >
          { secondBtnClicksCounter }
        </button>

        <button
          onClick={ this.increaseThirdBtnCounter }
          className={ this.getClassName(thirdBtnClicksCounter) }
        >
          { thirdBtnClicksCounter }
        </button>
      </div>
    )
  }
}
