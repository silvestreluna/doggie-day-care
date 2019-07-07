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
    const { combinedData } = this.props;
    const emp = combinedData.map(a => <DropdownItem key={a.walkerName} value={a.walkerName}>{a.walkerName}</DropdownItem>);
    return (
      <div className="EmpNewWalk">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Choose a Employee:
            </DropdownToggle>
            <DropdownMenu onClick={this.props.empSelection}>
              {emp}
            </DropdownMenu>
          </ButtonDropdown>
      </div >
    );
  }
}

export default EmpNewWalk;
