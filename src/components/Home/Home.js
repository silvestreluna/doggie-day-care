import React from 'react';
// import myDogs from '../../App/dogs';
// import allEmployees from '../../App/employees';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkPen from '../WalkPen/WalkPen';

import dogsData from '../../helpers/data/getDogsData';
import employeesData from '../../helpers/data/getEmployeesData';
import allWalks from '../../helpers/data/getWalkersData';
import dataSmashing from '../../helpers/data/smashData';

import './Home.scss';


class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    combinedData: [],
  }

  getAllData = () => {
    dogsData.getDogsData()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error(err, 'No data came back'));

    employeesData.getAllEmp()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err, 'No emp data came back'));

    allWalks.getWalksData()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error(err, 'No walks came back'));

    dataSmashing.gettingAllDataToSmash()
      .then(combinedData => this.setState({ combinedData }))
      .catch(err => console.error(err, 'No walks came back'));
  }


  componentDidMount() {
    this.getAllData();
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    const { walks } = this.state;
    const { combinedData } = this.state;

    return (
      <div className="Home">
        <h1>Doggie Day Care</h1>
        <DogPen dogs={dogs} walks={walks} combinedData={combinedData} />
        <h5 className="m-3">Employees</h5>
        <StaffRoom employees={employees} />
        <WalkPen walks={walks} />
      </div>
    );
  }
}

export default Home;
