import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './NewWalk.scss';

class DogNewWalk extends React.Component {
  state = {
    selectedDog: '',
    dropdownOpen: false,
  }

  toggle = this.toggle.bind(this);

  toggle() {
    this.setState(preveState => ({
      dropdownOpen: !preveState.dropdownOpen,
    }));
  }

  render() {
    const { dogs } = this.props;
    const { selectedDog } = this.state;
    const dog = dogs.map(a => <DropdownItem key={a.name} value={a.name}>{a.name}</DropdownItem>);

    const saveDogselection = (e) => {
      e.preventDefault();
      const getSelectedDog = e.target.value;
      this.setState({ selectedDog: getSelectedDog });
      console.error(selectedDog);
    };

    return (
      <div className="DogNewWalk">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Select a Dog
            </DropdownToggle>
            <DropdownMenu onClick={saveDogselection}>
              {dog}
            </DropdownMenu>
          </ButtonDropdown>
      </div>
    );
  }
}

export default DogNewWalk;
