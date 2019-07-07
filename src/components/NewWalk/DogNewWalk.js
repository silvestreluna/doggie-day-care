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
    const dog = dogs.map(a => <DropdownItem key={a.name} value={a.name}>{a.name}</DropdownItem>);
    return (
      <div className="DogNewWalk">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Select a Dog
            </DropdownToggle>
            <DropdownMenu onClick={this.props.dogSelection}>
              {dog}
              {console.error(this.props.combinedData)}
            </DropdownMenu>
          </ButtonDropdown>
      </div>
    );
  }
}

export default DogNewWalk;
