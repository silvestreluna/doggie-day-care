import React from 'react';
import EmpNewWalk from './EmpNewWalk';
import DogNewWalk from './DogNewWalk';
import dogsData from '../../helpers/data/getDogsData';

import './NewWalk.scss';

class NewWalk extends React.Component {
  state = {
    selectedDog: '',
    selectedEmp: '',
    selectedWalkDate: '',
  }

  dogSelection = (e) => {
    e.preventDefault();
    this.setState({ selectedDog: e.target.value });
  }

  empSelection = (e) => {
    e.preventDefault();
    this.setState({ selectedEmp: e.target.value });
  }

  dateSelection = (e) => {
    e.preventDefault();
    this.setState({ selectedWalkDate: e.target.value });
  }


  postNewWalker = (e) => {
    e.preventDefault();
    const newObj = {
      dogId: this.state.selectedDog,
      employeeId: this.state.selectedEmp,
      date: this.state.selectedWalkDate,
    };
    dogsData.postNewWalker(newObj)
      .then(
        this.setState({ selectedDog: '', selectedEmp: '', selectedWalkDate: '' }),
        this.props.getAllData(),
      )
      .catch(err => console.error(err, 'Nothing to Post'));
  }

  render() {
    const { dogs } = this.props;
    const { combinedData } = this.props;
    const { employees } = this.props;
    const loadEmpComponent = () => {
      if (this.state.selectedDog !== '') {
        return <EmpNewWalk employees={employees} empSelection={this.empSelection}/>;
      }
      return '';
    };
    return (
      <div className="NewWalk">
        <h5>Add walker:</h5>
        <div className="mb-4">
          <form>
          <DogNewWalk dogs={dogs}
          dogSelection={this.dogSelection}
          combinedData={combinedData}/>
          { loadEmpComponent()}
          {
            this.state.selectedEmp.length > 0 ? (
              <label className="mt-3">
                <input placeholder="Walk Date 01/01/2019" type="text" className="form-control" onChange={this.dateSelection}/>
              </label>
            ) : (
              ''
            )
          }

          {
            this.state.selectedWalkDate.length > 9 ? (
              <button className="btn btn-primary mt-1.5 ml-3" onClick={this.postNewWalker}>Save Changes</button>
            ) : (
              ''
            )
          }
          </form>
        </div>
      </div>
    );
  }
}

export default NewWalk;
