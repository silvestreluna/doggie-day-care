import React from 'react';

import myDogs from './dogs';
import allEmployees from './employees';
import DogPen from '../components/DogPen/DogPen';
import StaffRoom from '../components/StaffRoom/StaffRoom';
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
    const { employees } = this.state;
    return (
      <div className="App">
        <DogPen dogs ={dogs}/>
        <StaffRoom employees={employees}/>
      </div>
    );
  }
}

export default App;
