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
    const { combinedData } = this.props;
    const onlyCombId = combinedData.map(a => a.idDog);
    const dogWithMissingWalker = dogs.filter(a => !onlyCombId.includes(a.id));

    const dog = dogWithMissingWalker.map(a => <DropdownItem key={a.name} value={a.id}>{a.name}</DropdownItem>);

    return (
      <div className="DogNewWalk">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Select a Dog
            </DropdownToggle>
            <DropdownMenu onClick={this.props.dogSelection}>
              {dog}
            </DropdownMenu>
          </ButtonDropdown>
      </div>
    );
  }
}

export default DogNewWalk;
