import React from 'react';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Home />
      </div>
    );
  }
}

export default App;
