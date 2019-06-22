import React from 'react';

import myDogs from './dogs';
import allEmployees from './employees';
import DogPen from '../components/DogPen/DogPen';


import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: allEmployees });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <DogPen dogs ={dogs}/>
      </div>
    );
  }
}

export default App;
