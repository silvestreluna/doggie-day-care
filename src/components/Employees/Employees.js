import React from 'react';
import './Employees.scss';
import employeesShape from '../../helpers/propz/employeesShape';

class Employees extends React.Component {
  static propTypes = {
    employee: employeesShape.employessShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employees">
        <p className="eachEmp mb-5">{employee.name}</p>
      </div>
    );
  }
}

export default Employees;
