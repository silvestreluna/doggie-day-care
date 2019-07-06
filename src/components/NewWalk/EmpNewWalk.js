import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class EmpNewWalk extends React.Component {
  state = {
    selectedEmp: '',
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
    const { selectedEmp } = this.state;
    const emp = combinedData.map(a => <DropdownItem key={a.walkerName} value={a.walkerName}>{a.walkerName}</DropdownItem>);

    const saveEmpSelection = (e) => {
      e.preventDefault();
      const getSelectedEmp = e.target.value;
      this.setState({ selectedEmp: getSelectedEmp });
      console.error(selectedEmp);
    };


    return (
      <div className="EmpNewWalk">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Choose a Employee:
            </DropdownToggle>
            <DropdownMenu onClick={saveEmpSelection}>
              {emp}
            </DropdownMenu>
          </ButtonDropdown>
      </div >
    );
  }
}

export default EmpNewWalk;
