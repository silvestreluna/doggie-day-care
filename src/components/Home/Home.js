import React from 'react';
import myDogs from '../../App/dogs';
import allEmployees from '../../App/employees';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
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
      <div className="Home">
        <h1>Doggie Day Care</h1>
        <DogPen dogs ={dogs}/>
        <h5 className="m-3">Employees</h5>
        <StaffRoom employees={employees}/>
      </div>
    );
  }
}

export default Home;
