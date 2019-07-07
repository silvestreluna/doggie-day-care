import React from 'react';
import EmpNewWalk from './EmpNewWalk';
import DogNewWalk from './DogNewWalk';

import './NewWalk.scss';

class NewWalk extends React.Component {
  state = {
    selectedDog: '',
    selectedEmp: '',
  }

  dogSelection = (e) => {
    e.preventDefault();
    this.setState({ selectedDog: e.target.value });
    // this.setState({ selectedEmp: e.target.value });
    // console.error(this.state.selectedDog, 'dog');
  }

  empSelection = (e) => {
    e.preventDefault();
    this.setState({ selectedEmp: e.target.value });
    // console.error(this.state.selectedEmp, 'emp');
  }

  postNewWalker = (e) => {
    e.preventDefault();
    const newObj = {
      dogId: this.state.selectedDog,
      employeeId: this.state.selectedEmp,
      date: '09/20/2019',
    };
    console.error(newObj);
    this.setState({ selectedDog: '', selectedEmp: '' });
  }

  render() {
    const { dogs } = this.props;
    const { combinedData } = this.props;
    const loadEmpComponent = () => {
      if (this.state.selectedDog !== '') {
        return <EmpNewWalk combinedData={combinedData} empSelection={this.empSelection}/>;
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
          {/* <EmpNewWalk combinedData={combinedData} empSelection={this.empSelection}/> */}
          <button onClick={this.postNewWalker}>testing</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewWalk;
