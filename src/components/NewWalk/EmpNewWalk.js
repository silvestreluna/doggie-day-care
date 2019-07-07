import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class EmpNewWalk extends React.Component {
  state = {
    dropdownOpen: false,
  }

  toggle = this.toggle.bind(this);

  toggle() {
    this.setState(preveState => ({
      dropdownOpen: !preveState.dropdownOpen,
    }));
  }

  render() {
    const { employees } = this.props;
    const emp = employees.map(a => <DropdownItem key={a.id} value={a.id}>{a.name}</DropdownItem>);
    return (
      <div className="EmpNewWalk">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mt-3">
            <DropdownToggle caret>
              Choose a Employee:
            </DropdownToggle>
            <DropdownMenu onClick={this.props.empSelection}>
              {emp}
              {console.error(employees)}
            </DropdownMenu>
          </ButtonDropdown>
      </div >
    );
  }
}

export default EmpNewWalk;
