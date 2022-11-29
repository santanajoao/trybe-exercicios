import React from 'react';

export default class App extends React.Component {
  state = {
    firstBtnClicksCounter: 0,
    secondBtnClicksCounter: 0,
    thirdBtnClicksCounter: 0,
  };

  increaseFirstBtnCounter = () => {
    this.setState(({ firstBtnClicksCounter }) => (
      { firstBtnClicksCounter: firstBtnClicksCounter + 1 }
    ));
  };

  increaseSecondBtnCounter = () => {
    this.setState(({ secondBtnClicksCounter }) => (
      { secondBtnClicksCounter: secondBtnClicksCounter + 1 }
    ));
  };

  increaseThirdBtnCounter = () => {
    this.setState(({ thirdBtnClicksCounter }) => (
      { thirdBtnClicksCounter: thirdBtnClicksCounter + 1 }
    ));
  };

  render() {
    const {
      firstBtnClicksCounter,
      secondBtnClicksCounter,
      thirdBtnClicksCounter
    } = this.state;

    return (
      <div className="App">
        <button onClick={ this.increaseFirstBtnCounter }>
          { firstBtnClicksCounter }
        </button>

        <button onClick={ this.increaseSecondBtnCounter }>
          { secondBtnClicksCounter}
        </button>

        <button onClick={ this.increaseThirdBtnCounter }>
          { thirdBtnClicksCounter }
        </button>
      </div>
    )
  }
}
