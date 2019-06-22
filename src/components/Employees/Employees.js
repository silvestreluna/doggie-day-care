import React from 'react';
import './Employees.scss';

class Employees extends React.Component {
  render() {
    const { employee } = this.props;
    return (
      <div className="Employees">
        <p className="eachEmp">{employee.name}</p>
      </div>
    );
  }
}

export default Employees;
