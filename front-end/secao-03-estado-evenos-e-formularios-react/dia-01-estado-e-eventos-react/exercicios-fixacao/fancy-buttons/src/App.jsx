import React from 'react';

export default class App extends React.Component {
  printOnClick = () => console.log('click');

  render() {
    return (
      <div className="App">
        <button onClick={ this.printOnClick }>Clique aqui!</button>
      </div>
    )
  }
}
