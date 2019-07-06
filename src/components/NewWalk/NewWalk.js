import React from 'react';
import EmpNewWalk from './EmpNewWalk';
import DogNewWalk from './DogNewWalk';

import './NewWalk.scss';

class NewWalk extends React.Component {
  render() {
    const { dogs } = this.props;
    const { combinedData } = this.props;
    return (
      <div className="NewWalk">
        <h5>Add walker:</h5>
        <div>
          <form>
          <DogNewWalk dogs={dogs} />
          <EmpNewWalk combinedData={combinedData}/>
          </form>
        </div>
      </div>
    );
  }
}

export default NewWalk;
