import React from 'react';
import './App.scss';

class App extends React.Component {
  checkingConsole = 'Hello';

  render() {
    return (
      <div>
        {console.error(this.checkingConsole)}
        <p>Hello Test!!!!</p>
        <button className="btn btn-danger">Working button</button>
      </div>
    );
  }
}

export default App;
