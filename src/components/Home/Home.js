import React from 'react';
// import myDogs from '../../App/dogs';
// import allEmployees from '../../App/employees';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import dogsData from '../../helpers/data/getDogsData';
import employeesData from '../../helpers/data/getEmployeesData';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  getAllData = () => {
    dogsData.getDogsData()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error(err, 'No data came back'));

    employeesData.getAllEmp()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err, 'No emp data came back'));
  }

  componentDidMount() {
    this.getAllData();
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
