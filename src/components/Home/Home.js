import React from 'react';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkPen from '../WalkPen/WalkPen';
import NewWalk from '../NewWalk/NewWalk';
import EditWalk from '../EditWalk/EditWalk';

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
    editWalkerName: '',
    editWalkDate: '',
    editWalkId: '',
    editDogId: '',
    showEditForm: false,
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

  deleteWalker = (e) => {
    e.preventDefault();
    const getCardId = e.target.value;
    const filterId = this.state.walks.filter(a => a.dogId === getCardId);
    const getWalkId = filterId.map(walk => walk.id);
    const onlyWalkIdString = getWalkId.toString();
    dogsData.deleteWalker(onlyWalkIdString);
    this.getAllData();
  }

  editWalker = (e) => {
    e.preventDefault();
    this.setState({ showEditForm: true });
    const getCurrentDogId = e.target.value;
    const getWalkObj = this.state.combinedData.filter(a => a.idDog === getCurrentDogId);
    getWalkObj.forEach((walk) => {
      this.setState({
        editWalkerName: walk.walkerName,
        editWalkDate: walk.date,
        editWalkId: walk.walkId,
        editEmpId: walk.empId,
      });
    });
  }

  walkNameChangeDuringEdit = (e) => {
    e.preventDefault();
    this.setState({ editWalkerName: e.target.value });
  }

  walkDateChangeDuringEdit = (e) => {
    e.preventDefault();
    this.setState({ editWalkDate: e.target.value });
  }

  saveEditChangeToFirebase = (e) => {
    e.preventDefault();
    const walkId = this.state.editWalkId;
    const editNewObj = {
      employeeId: this.state.editEmpId,
      date: this.state.editWalkDate,
    };
    dogsData.editWalkFirebase(walkId, editNewObj)
      .then(
        this.setState({
          showEditForm: false,
          editWalkerName: '',
          editWalkDate: '',
          editWalkId: '',
          editEmpId: '',

        }),
        this.getAllData(),
      )
      .catch(err => console.error(err, 'Nothing to edit'));
  }


  componentDidMount() {
    this.getAllData();
  }


  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    const { walks } = this.state;
    const { combinedData } = this.state;
    const { editWalkerName, editWalkDate } = this.state;

    return (
      <div className="Home">
        <h1>Doggie Day Care</h1>
        {
          this.state.showEditForm ? (
            <EditWalk
            editWalkerName={editWalkerName}
            employees={employees}
            editWalkDate={editWalkDate}
            saveEditChangeToFirebase={this.saveEditChangeToFirebase}
            walkNameChangeDuringEdit={this.walkNameChangeDuringEdit}
            walkDateChangeDuringEdit={this.walkDateChangeDuringEdit}
             />
          ) : (
            ''
          )
        }

        <DogPen
        dogs={dogs}
        walks={walks}
        combinedData={combinedData}
        deleteWalker={this.deleteWalker}
        editWalker={this.editWalker}/>
        <h5 className="m-3">Employees</h5>
        <StaffRoom employees={employees} />
        <NewWalk
        dogs={dogs}
        combinedData={combinedData}
        employees={employees}
        getAllData={this.getAllData}/>
        <WalkPen walks={walks}/>
      </div>
    );
  }
}

export default Home;
