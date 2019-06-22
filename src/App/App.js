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
        <h1>Doggie Day Care</h1>
        <DogPen dogs ={dogs}/>
        <h5 className="m-3">Employees</h5>
        <StaffRoom employees={employees}/>
      </div>
    );
  }
}

export default App;
