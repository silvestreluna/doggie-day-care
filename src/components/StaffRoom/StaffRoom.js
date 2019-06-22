import React from 'react';
import Employees from '../Employees/Employees';

class StaffRoom extends React.Component {
  render() {
    const { employees } = this.props;
    const AllEmployeesCard = employees.map(employee => (
      <Employees key={employee.id} employee={employee}/>
    ));
    return (
      <div className="Employees d-flex flex-wrap">
         { AllEmployeesCard }
      </div>
    );
  }
}

export default StaffRoom;
